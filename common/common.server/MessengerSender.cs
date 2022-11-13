﻿using common.libs;
using common.libs.extends;
using common.server.model;
using System;
using System.Buffers;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

namespace common.server
{
    /// <summary>
    /// 消息发送器
    /// </summary>
    public class MessengerSender
    {
        public NumberSpaceUInt32 requestIdNumberSpace = new NumberSpaceUInt32(0);
        private WheelTimer<TimeoutState> wheelTimer = new WheelTimer<TimeoutState>();
        private ConcurrentDictionary<uint, WheelTimerTimeout<TimeoutState>> sends = new ConcurrentDictionary<uint, WheelTimerTimeout<TimeoutState>>();

        public MessengerSender()
        {
        }

        /// <summary>
        /// 发送并等待回复
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="msg"></param>
        /// <returns></returns>
        public async Task<MessageResponeInfo> SendReply(MessageRequestWrap msg)
        {
            if (msg.RequestId == 0)
            {
                Interlocked.CompareExchange(ref msg.RequestId, requestIdNumberSpace.Increment(), 0);
            }
            WheelTimerTimeout<TimeoutState> timeout = NewReply(msg);
            if (await SendOnly(msg).ConfigureAwait(false) == false)
            {
                sends.TryRemove(msg.RequestId, out _);
                timeout.Cancel();
                timeout.Task.State.Tcs.SetResult(new MessageResponeInfo { Code = MessageResponeCodes.NOT_CONNECT });
            }
            return await timeout.Task.State.Tcs.Task.ConfigureAwait(false);
        }
        /// <summary>
        /// 只发送，不等回复
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="msg"></param>
        /// <returns></returns>
        public async Task<bool> SendOnly(MessageRequestWrap msg)
        {
            try
            {
                if (msg.RequestId == 0)
                {
                    Interlocked.CompareExchange(ref msg.RequestId, requestIdNumberSpace.Increment(), 0);
                }
                if (msg.Connection == null)
                {
                    return false;
                }

                if (msg.Connection.Relay && msg.RelayId == 0)
                {
                    msg.RelayId = msg.Connection.ConnectId;
                }
                if (msg.Connection.EncodeEnabled)
                {
                    msg.Payload = msg.Connection.Crypto.Encode(msg.Payload);
                }

                byte[] bytes = msg.ToArray(msg.Connection.ServerType, out int length);
                bool res = await msg.Connection.Send(bytes, length).ConfigureAwait(false);
                msg.Return(bytes);

                return res;
            }
            catch (Exception ex)
            {
                Logger.Instance.Error(ex);
            }
            return false;
        }

        /// <summary>
        /// 回复远程消息，收到某个连接的消息后，通过这个再返回消息给它
        /// </summary>
        /// <param name="msg"></param>
        /// <returns></returns>
        public async ValueTask<bool> ReplyOnly(MessageResponseWrap msg)
        {
            try
            {
                if (msg.Connection.EncodeEnabled)
                {
                    msg.Payload = msg.Connection.Crypto.Encode(msg.Payload);
                }

                byte[] bytes = msg.ToArray(msg.Connection.ServerType, out int length);
                bool res = await msg.Connection.Send(bytes, length).ConfigureAwait(false);
                msg.Return(bytes);
                return res;
            }
            catch (Exception ex)
            {
                Logger.Instance.DebugError(ex);
            }
            return false;
        }
        /// <summary>
        /// 回复本地消息，发送消息后，socket收到消息，通过这个方法回复给刚刚发送的对象
        /// </summary>
        /// <param name="wrap"></param>
        public void Response(MessageResponseWrap wrap)
        {
            if (sends.TryRemove(wrap.RequestId, out WheelTimerTimeout<TimeoutState> timeout))
            {
                timeout.Cancel();
                timeout.Task.State.Tcs.SetResult(new MessageResponeInfo { Code = wrap.Code, Data = wrap.Payload });
            }
        }

        private WheelTimerTimeout<TimeoutState> NewReply(MessageRequestWrap msg)
        {
            if (msg.Timeout <= 0)
            {
                msg.Timeout = 15000;
            }
            WheelTimerTimeout<TimeoutState> timeout = wheelTimer.NewTimeout(new WheelTimerTimeoutTask<TimeoutState>
            {
                Callback = TimeoutCallback,
                State = new TimeoutState { RequestId = msg.RequestId, Tcs = new TaskCompletionSource<MessageResponeInfo>() }
            }, msg.Timeout);
            sends.TryAdd(msg.RequestId, timeout);
            return timeout;
        }
        private void TimeoutCallback(WheelTimerTimeout<TimeoutState> timeout)
        {
            sends.TryRemove(timeout.Task.State.RequestId, out _);
            timeout.Task.State.Tcs.SetResult(new MessageResponeInfo { Code = MessageResponeCodes.TIMEOUT });
        }
    }

    public class MessageResponeInfo
    {
        public MessageResponeCodes Code { get; set; } = MessageResponeCodes.OK;
        public ReadOnlyMemory<byte> Data { get; set; } = Helper.EmptyArray;
    }

    public class TimeoutState
    {
        public uint RequestId { get; set; }
        public TaskCompletionSource<MessageResponeInfo> Tcs { get; set; }
    }
}

