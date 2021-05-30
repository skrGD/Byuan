
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { message } from "ant-design-vue"
export class Request {
  public static axiosInstance: AxiosInstance;
  public static init() {
    // 创建axios实例
    this.axiosInstance = axios.create({
      baseURL: '/api',
      timeout: 6000
    });

    // 初始化拦截器
    this.initInterceptors();
    return axios;
  }

  // 初始化拦截器
  public static initInterceptors() {
    // 设置post请求头
    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    /**
     * 请求拦截器
     * 每次请求前，如果存在token则在请求头中携带token
     */
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      },
      (error: any) => {
        console.log(error);
      },
    );


    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      // 请求成功
      (response: AxiosResponse) => {
        if (response.status === 200) {
          return response.data
          // return Promise.resolve(response.data);
        } else {
          Request.errorHandle(response);
          return Promise.reject(response);
        }
      },
      // 请求失败
      (error: any) => {
        const { response } = error;
        if (response) {
          // 请求已发出，但是不在2xx的范围
          Request.errorHandle(response);
          return Promise.reject(response.data);
        } else {
          message.error('网络连接异常,请稍后再试!');
        }
      });
  }

  /*
   * 错误状态
   * @param res 响应回调,根据不同响应进行不同操作
   */
  private static errorHandle(res: any) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        message.error('请求的资源不存在');
        break;
      default:
        message.error('连接错误');
    }
  }
}
