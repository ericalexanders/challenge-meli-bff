declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: string;
      API_MELI_QUERY: string;
      API_MELI_ITEMS: string;
    }
  }
}

export {};