import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://lovely-horses-0fb3c65a2e.strapiapp.com/api",
});
