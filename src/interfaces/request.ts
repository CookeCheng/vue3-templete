import { AxiosResponse, AxiosStatic, AxiosRequestConfig } from 'axios';

export interface RequestConfig extends AxiosRequestConfig {
  options: AxiosRequestConfig;
}
