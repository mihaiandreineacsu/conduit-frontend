declare const process: {
  env: {
    BASE_API_URL: string;
  };
};

export const environment = {
  production: true,
  api_url: process.env.BASE_API_URL, // Placeholder for backend URL
};
