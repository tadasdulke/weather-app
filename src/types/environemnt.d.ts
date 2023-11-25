declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OPEN_WEATHER_API_KEY: string;
      NODE_ENV: string;
    }
  }
}

export {};
