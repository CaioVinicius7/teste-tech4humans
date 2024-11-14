import axios from "axios";

import { env } from "../config/env";

export const httpClient = axios.create({
  baseURL: env.VITE_API_BASE_URL
});

httpClient.interceptors.request.use(async (config) => {
  config.params = config.params || {};

  config.params.api_key = env.VITE_API_KEY;
  config.params.language = "pt-BR";

  return config;
});
