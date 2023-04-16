import axios from "axios";

const TOKEN = process.env.TOKEN;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

api.defaults.headers[
  "Authorization"
] = `Bearer ${TOKEN}`;

export default api;
