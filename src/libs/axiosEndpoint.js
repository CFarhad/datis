import axios from "axios";

const environment = import.meta.env.MODE;

const axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  responseType: "json",
  baseURL: "/",
  withCredentials: environment === "production",
});

// axiosInstance.interceptors.request.use(
//   (request) => {
//     return request;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;