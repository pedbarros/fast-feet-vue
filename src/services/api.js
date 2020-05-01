import axios from "axios";
import { tokenHelper } from "@/helpers";

const axiosFF = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
});

axiosFF.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/json";
    const token = `Bearer ${tokenHelper.getToken()}`;

    if (token) {
      config.headers["Authorization"] = token;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosFF.interceptors.response.use(
  response => response,
  error => {
    // if (error.response && error.response.status === 401) {
    //   if (router.currentRoute.name !== 'SignUp' && router.currentRoute.name !== 'Login') {
    //     router.push({ name: 'Logout' });
    //   }
    // }

    return Promise.reject(error);
  }
);

export default axiosFF;
