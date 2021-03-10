import { get, post } from '../methods';
import BaseRequest from './BaseRequest';
import { ElMessage } from 'element-plus';

export default class AppRequest extends BaseRequest {
  /**
   * 获取语言包
   */
  @get('http://192.168.70.61:9999/language.json')
  async getLanguage(opts: any = {}): Promise<any> {
    const res = await this._requestFormat(opts);
    if (res.status === 200) {
      return res.data;
    } else {
      ElMessage.error('网络错误！');
      return null;
    }
  }
}
