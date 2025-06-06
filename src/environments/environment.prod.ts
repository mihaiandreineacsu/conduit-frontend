declare const process: {
  env: {
    BASE_API_URL: string;
    BASE_API_PORT: string;
  };
};

export const environment = {
  production: true,
  api_url: `http://${process.env.BASE_API_URL}:${process.env.BASE_API_PORT}`, // Placeholder for backend URL
};
