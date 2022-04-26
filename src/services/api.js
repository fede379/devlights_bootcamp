import axios from "axios";

const API = axios.create({
  baseURL: "https://randomuser.me/",
  timeout: 5000,
});

// Add a request interceptor
API.interceptors.request.use(
  function (config) {
    // aca se agregan todas los headers de auth
    config.headers = { ...config.headers, "X-Auth-Header": "token" };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
API.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      // server status 401 => token vencido o usuario no autenticado
      console.log("desloguear al usuario");
    }
    console.log(error);
    const newError = {
      message: "An error has ocurred",
      status: error.response.status,
      serverMessage: error.response?.data?.message,
    };
    return Promise.reject(newError);
  }
);

export { API };
