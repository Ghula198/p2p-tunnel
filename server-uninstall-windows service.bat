@echo off

SET exepath=%~dp0

cd %exepath%public

%~d0

echo ֹͣ����==========================
nssm stop p2p-tunnel-server
echo.
echo.
echo ɾ������=======================
nssm remove p2p-tunnel-server confirm
echo =================================
echo.
echo.
echo �����


pause