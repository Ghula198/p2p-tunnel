## linux��supervisor�йܿͻ���
```

//1������linux�汾���򣬷ŵ� /usr/local/p2p-tunnel-client �ļ���

//2����װsupervisor
apt install -y supervisor

//3��д�����ļ�
vim /etc/supervisor/conf.d/p2p-tunnel-client.conf

[program:p2p-tunnel-client]
directory = /usr/local/p2p-tunnel-client
command = /usr/local/p2p-tunnel-client/client.service
autostart = true
startsec = 15
autorestart = true
startretries = 3
user = root
redirect_stderr = true
stdout_logfile_maxbytes = 50MB
stdout_logfile_backups = 20
stdout_logfile = /usr/local/p2p-tunnel-client/log/log.log
stderr_logfile = /usr/local/p2p-tunnel-client/log/log.err.log

//4�����¼��������ļ�
supervisorctl update
//5��������������������
supervisorctl start p2p-tunnel-client
supervisorctl restart p2p-tunnel-client
```