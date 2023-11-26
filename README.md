# Weather forecast app

## Setup

Create .env file:

    cp .env.sample .env

Set [open weather api key](https://home.openweathermap.org/api_keys) inside .env file:

    OPEN_WEATHER_API_KEY=<open_weather_api_key_goes_here>

## Development environment

Install [devcontainers cli tool](https://www.npmjs.com/package/@devcontainers/cli):

**Note**: devcontainer cli tool is optional. Project can run with VS Code dev containers extension too.

    npm install -g @devcontainers/cli

Startup development container:

    devcontainer up --workspace-folder .

Install node_modules:

    devcontainer exec --workspace-folder yarn

Start webpack development server:

    devcontainer exec --workspace-folder yarn dev

Go to [https://localhost:3000/](https://localhost:3000/)

## Serving production build

Startup client service:

    docker compose up -d

Go to [https://localhost:7979/](https://localhost:7979/)
