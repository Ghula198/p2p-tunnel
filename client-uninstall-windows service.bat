@echo off

SET exepath=%~dp0

cd %exepath%public

%~d0

echo ֹͣ����==========================
nssm stop p2p-tunnel-client
echo.
echo.
echo ɾ������=======================
nssm remove p2p-tunnel-client confirm
echo =================================
echo.
echo.
echo �����


pause