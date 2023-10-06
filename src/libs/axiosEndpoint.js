import axios from "axios";
import { Cookies } from "react-cookie";

const environment = import.meta.env.MODE;

let cookies = new Cookies();

const axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  responseType: "json",
  baseURL: environment === "production" ? "" : "http://127.0.0.1:8000/",
  // withCredentials: environment === "production",
});

axiosInstance.interceptors.request.use(
  (request) => {
    const token = cookies.get("user");
    request.headers["Authorization"] = token;
    console.log(token)
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
