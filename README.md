# Svelte .NET Template

A simple project template for working with Svelte and ASP.NET.
The template consists of 2 projects - a Svelte project (Client) that utilizes SvelteKit for the routing and an ASP.NET API (Server).

The project is using <b>Svelte 4</b> and <b>.NET 8.</b>

# Installing the template

Using NuGet:
```cmd
dotnet new install Svelte.Dotnet.Template
```
https://www.nuget.org/packages/Svelte.Dotnet.Template


# Client
## Prerequisites

This project requires [NodeJS](http://nodejs.org/) (version 18 or later) and [NPM](https://npmjs.org/).
To make sure you have them available on your machine,
try running the following command:

```sh
$ npm -v && node -v
9.5.0
v18.14.1
```

## Installation

```bash
npm install
```

## Serving the app

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.










# Recommendations

The template was created with the intention of using [VS Code](https://code.visualstudio.com/)
for the [Client](https://github.com/Quickz/svelte-dotnet-template/tree/main/svelte-dotnet-template/Client)
and [Visual Studio](https://visualstudio.microsoft.com/) for the [Server](https://github.com/Quickz/svelte-dotnet-template/tree/main/svelte-dotnet-template/Server). You are free to use whatever tools you prefer though.
