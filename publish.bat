@echo off

rem 24�з�����׿�����Ϊ�Լ���Android sdk��ַ, ������ ����->ѡ��->Xamarin->Android���� ��鿴sdk��ַ

rd /s /q public\\publish
rd /s /q public\\publish-zip
mkdir public\\publish-zip

dotnet publish ./client/client.service -c release -f net6.0 -o ./public/publish/any/client 
dotnet publish ./server/server.service -c release -f net6.0 -o ./public/publish/any/server 
dotnet publish ./client/client.service -c release -f net6.0 -o ./public/publish/win-x64-single/client	-r win-x64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./server/server.service -c release -f net6.0 -o ./public/publish/win-x64-single/server	-r win-x64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./client/client.service -c release -f net6.0 -o ./public/publish/win-arm64-single/client	-r win-arm64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./server/server.service -c release -f net6.0 -o ./public/publish/win-arm64-single/server	-r win-arm64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./client/client.service -c release -f net6.0 -o ./public/publish/linux-x64-single/client	-r linux-x64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./server/server.service -c release -f net6.0 -o ./public/publish/linux-x64-single/server	-r linux-x64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./client/client.service -c release -f net6.0 -o ./public/publish/linux-arm64-single/client	-r linux-arm64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./server/server.service -c release -f net6.0 -o ./public/publish/linux-arm64-single/server	-r linux-arm64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./client/client.service -c release -f net6.0 -o ./public/publish/osx-x64-single/client	-r osx-x64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./server/server.service -c release -f net6.0 -o ./public/publish/osx-x64-single/server	-r osx-x64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./client/client.service -c release -f net6.0 -o ./public/publish/osx-arm64-single/client	-r osx-arm64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 
dotnet publish ./server/server.service -c release -f net6.0 -o ./public/publish/osx-arm64-single/server	-r osx-arm64		--self-contained true  -p:DebugType=none -p:DebugSymbols=false  -p:PublishSingleFile=true -p:PublishTrimmed=true -p:IncludeNativeLibrariesForSelfExtract=true 

dotnet publish ./client/client.service.app -c:Release -f:net6.0-android /p:AndroidSigningKeyPass=123321 /p:AndroidSigningStorePass=123321  /p:AndroidSdkDirectory=D:\\Android\\android-sdk
echo F|xcopy "client\\client.service.app\\bin\\Release\\net6.0-android\\publish\\p2p_tunnel.p2p_tunnel-Signed.apk" "public\\publish-zip\\p2p-tunnel.apk"  /s /f /h /y

echo D|xcopy "client\\plugins\\client.service.ui\\client.service.ui.api.service\\public\\web\\" "public\\publish\\win-x64-single\\client\\public\\web\\" /s /f /h /y
echo D|xcopy "client\\plugins\\client.service.ui\\client.service.ui.api.service\\public\\web\\" "public\\publish\\win-arm64-single\\client\\public\\web\\" /s /f /h /y
echo D|xcopy "client\\plugins\\client.service.ui\\client.service.ui.api.service\\public\\web\\" "public\\publish\\linux-x64-single\\client\\public\\web\\" /s /f /h /y
echo D|xcopy "client\\plugins\\client.service.ui\\client.service.ui.api.service\\public\\web\\" "public\\publish\\linux-arm64-single\\client\\public\\web\\" /s /f /h /y
echo D|xcopy "client\\plugins\\client.service.ui\\client.service.ui.api.service\\public\\web\\" "public\\publish\\osx-x64-single\\client\\public\\web\\" /s /f /h /y
echo D|xcopy "client\\plugins\\client.service.ui\\client.service.ui.api.service\\public\\web\\" "public\\publish\\osx-arm64-single\\client\\public\\web\\" /s /f /h /y

echo F|xcopy "client\\plugins\\client.service.vea\\tun2socks.exe" "public\\publish\\win-x64-single\\client\\"  /f /h /y
echo F|xcopy "client\\plugins\\client.service.vea\\wintun.dll" "public\\publish\\win-x64-single\\client\\"  /f /h /y
echo F|xcopy "client\\plugins\\client.service.vea\\tun2socks.exe" "public\\publish\\win-arm64-single\\client\\"  /f /h /y
echo F|xcopy "client\\plugins\\client.service.vea\\wintun.dll" "public\\publish\\win-arm64-single\\client\\"  /f /h /y

7z a -tzip ./public/publish-zip/any.zip ./public/publish/any/*
7z a -tzip ./public/publish-zip/win-x64-single.zip ./public/publish/win-x64-single/*
7z a -tzip ./public/publish-zip/win-arm64-single.zip ./public/publish/win-arm64-single/*
7z a -tzip ./public/publish-zip/linux-x64-single.zip ./public/publish/linux-x64-single/*
7z a -tzip ./public/publish-zip/linux-arm64-single.zip ./public/publish/linux-arm64-single/*
7z a -tzip ./public/publish-zip/osx-x64-single.zip ./public/publish/osx-x64-single/*
7z a -tzip ./public/publish-zip/osx-arm64-single.zip ./public/publish/osx-arm64-single/*
