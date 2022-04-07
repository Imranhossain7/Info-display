import axios from "axios";

const instance = axios.create({
  baseURL: process.env.React_APP_NEWS_URL,
});

instance.defaults.headers.common["X-Api-Key"] =
  process.env.React_APP_NEWS_API_KEY;

export default instance;
