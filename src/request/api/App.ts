import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { RequestConfig } from '@/interfaces/request';
import { get, post } from '../methods';
import BaseRequest from './BaseRequest';

export default class AppRequest extends BaseRequest {
  /**
   * 获取语言包
   */
  @get('/language.json')
  async getLanguage(requestConfig: AxiosRequestConfig = {}): Promise<any> {
    try {
      const res: AxiosResponse = await this._requestFormat(
        requestConfig as RequestConfig
      );
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
