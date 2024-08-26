cd template
dotnet pack Svelte.Dotnet.Template.csproj
cd bin/release
dotnet new uninstall Svelte.Dotnet.Template
dotnet new install Svelte.Dotnet.Template.1.0.0.nupkg
pause
