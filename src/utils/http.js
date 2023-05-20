import axios from "axios";
const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000, //5 seconds
});

// 请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (error) => {
    return Promise.reject(error);
  }
);

export default httpInstance;
