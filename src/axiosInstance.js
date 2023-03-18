import axios from "axios";
import localforage from "localforage";

const axiosInstance = axios.create({
  baseURL: "https://17a0-182-70-239-81.in.ngrok.io/api",
  timeout: 5000, // 5 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

localforage.getItem("token").then((token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
});

export default axiosInstance;
