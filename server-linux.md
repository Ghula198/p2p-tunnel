
## linux��docker�йܷ����
```
// ��ȡ����
docker pull snltty/p2p-tunnel-server
docker run -it -d --name="p2p-tunnel-server" -p 5410:5410/udp -p 59410:59410/tcp snltty/p2p-tunnel-server

// ��������Ŀ¼����������ʱ�����ļ��������޸�������Ϣ
cd /usr/local
mkdir p2p-tunnel-server
cd p2p-tunnel-server

// �������ļ��������︴�Ƴ���
docker cp p2p-tunnel-server:/app/appsettings.json /usr/local/p2p-tunnel-server/appsettings.json
docker cp p2p-tunnel-server:/app/socks5-appsettings.json /usr/local/p2p-tunnel-server/socks5-appsettings.json
docker cp p2p-tunnel-server:/app/tcpforward-appsettings.json /usr/local/p2p-tunnel-server/tcpforward-appsettings.json
docker cp p2p-tunnel-server:/app/udpforward-appsettings.json /usr/local/p2p-tunnel-server/udpforward-appsettings.json

// �޸�����

// ���޸ĺ������ļ����ƽ�ȥ
docker cp /usr/local/p2p-tunnel-server/appsettings.json  p2p-tunnel-server:/app/appsettings.json
docker cp /usr/local/p2p-tunnel-server/socks5-appsettings.json  p2p-tunnel-server:/app/socks5-appsettings.json
docker cp /usr/local/p2p-tunnel-server/tcpforward-appsettings.json  p2p-tunnel-server:/app/tcpforward-appsettings.json
docker cp /usr/local/p2p-tunnel-server/udpforward-appsettings.json  p2p-tunnel-server:/app/udpforward-appsettings.json

// ��������
docker restart p2p-tunnel-server
```

## �Լ����docker����˾���
```
//������Ŀ��Ŀ¼
//power shell ��
./server-docker ��ľ�����(����snltty/p2p-tunnel-server)
//cmd ��
server-docker ��ľ�����(����snltty/p2p-tunnel-server)
```