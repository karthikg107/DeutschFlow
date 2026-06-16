import axios from "axios";

const api = axios.create({
  baseURL: "http://10.62.21.3:5000/api",
});

api.interceptors.request.use((config) => {

  const userInfo =
    localStorage.getItem("userInfo");

  if (userInfo) {

    const token =
      JSON.parse(userInfo).token;

    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

export default api;