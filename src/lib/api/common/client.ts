import axios from "axios";

export const REACT_APP_BASE_URL: string | undefined =
  process.env.REACT_APP_BASE_URL;

const client = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

export default client;
