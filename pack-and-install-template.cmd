cd Template
dotnet pack Svelte.Dotnet.Template.csproj
cd bin/Release
dotnet new uninstall Svelte.Dotnet.Template
dotnet new install Svelte.Dotnet.Template.1.0.2.nupkg
pause
