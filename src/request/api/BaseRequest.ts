import {AxiosStatic} from "axios";

export default class BaseRequest {
  private $axios: AxiosStatic;
  constructor(axios: AxiosStatic) {
    this.$axios = axios
  }
  /**
   * 数据格式化
   * @param {object} opts
   */
  _requestFormat(opts: any): Promise<any> {
    const method: "get" | "post" = opts.method
    const url = opts.url
    const params = method === 'post' ? opts.params : {params: opts.params}
    return new Promise(async (resolve, reject) => {
      try {
        // @ts-ignore
        let res = await this.$axios[method](url, params)
        resolve(res.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}
