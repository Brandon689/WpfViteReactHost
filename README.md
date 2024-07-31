# WPF Vite React Host

This project demonstrates how to host a Vite-built React application within a WPF (Windows Presentation Foundation) application using WebView2.

![Screenshot of the application](screenshot.png)

## Features

- WPF application serving as a host for a React app
- React app built with Vite for fast development and optimized production builds
- WebView2 integration for rendering the React app within WPF
- Example of fetching data from an ASP.NET Core Web API

## Prerequisites

- .NET Framework or .NET Core (version used in the project)
- Node.js and npm (for React development)
- WebView2 Runtime

## Getting Started

1. Clone the repository
2. Navigate to the React app directory and run:

    ```sh
    npm install
    npm run build
    ```

3. Open the WPF solution in Visual Studio
4. Build and run the WPF application

## Project Structure

- `/WpfApp`: Contains the WPF host application
- `/ReactApp`: Contains the Vite React application
- `/WebApi`: Contains the ASP.NET Core Web API (if applicable)

## How It Works

The WPF application uses WebView2 to load the React application. The React app is built and its output is placed in a directory that the WPF app can access. WebView2 is configured to use a virtual host, allowing the React app to make API calls without CORS issues.

## Configuration

Ensure that the paths in the WPF application correctly point to your React app's build output. You may need to adjust the virtual host settings in both the WPF app and the React app to match your development environment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
