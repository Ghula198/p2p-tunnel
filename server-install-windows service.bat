@echo off

SET exepath=%~dp0

cd %exepath%public

%~d0

echo ɾ������=======================
nssm remove p2p-tunnel-server confirm
echo =================================
echo.
echo.
echo ��װ����==========================
nssm install p2p-tunnel-client	 %exepath%server.service.exe
nssm set p2p-tunnel-server AppDirectory %exepath%
echo =================================
echo.
echo.
echo �����Զ��ӳ�����===================
sc config p2p-tunnel-server start=delayed-auto
echo =================================
echo.
echo.
echo ��������==========================
nssm start p2p-tunnel-server
echo.
echo.
echo �����


pause