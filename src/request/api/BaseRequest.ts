import { AxiosStatic } from 'axios';
import { ElMessage } from 'element-plus';
export default class BaseRequest {
  private $axios: AxiosStatic;
  constructor(axios: AxiosStatic) {
    this.$axios = axios;
  }
  /**
   * 数据格式化
   * @param {object} opts
   */
  async _requestFormat(opts: any): Promise<any> {
    const method: 'get' | 'post' = opts.method;
    const url = opts.url;
    let res: any = null;
    if (method === 'get') {
      res = await this.$axios.get(url, { params: opts.params });
    } else if (method === 'post') {
      res = await this.$axios.post(url, opts.params);
    }
    if (res.status === 200) {
      return res.data;
    } else {
      ElMessage.error('网络错误！');
      return null;
    }
  }
}
