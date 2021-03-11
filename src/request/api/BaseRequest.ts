import { AxiosResponse, AxiosStatic, AxiosRequestConfig } from 'axios';
import { RequestConfig } from '@/interfaces/request';
export default class BaseRequest {
  private $axios: AxiosStatic;
  constructor(axios: AxiosStatic) {
    this.$axios = axios;
  }
  /**
   * 格式化接口请求
   * @param RequestConfig config
   */
  async _requestFormat(config: RequestConfig): Promise<any> {
    const requestConfig: AxiosRequestConfig = {
      url: config.url,
      method: config.method,
      ...config.opts
    };

    if (requestConfig.method !== 'get') {
      requestConfig.data = requestConfig.params;
      requestConfig.params = '';
    }
    const res: AxiosResponse = await this.$axios(requestConfig);

    return res;
  }
}
