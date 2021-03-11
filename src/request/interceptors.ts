import { ElMessage } from 'element-plus';
import { AxiosError, AxiosStatic } from 'axios';

export default {
  install(app: any, axios: AxiosStatic) {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common.withCredentials = true;

    axios.interceptors.request.use(
      config => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      res => {
        const status = res.status;
        switch (status) {
          case 200:
            return res.data;
          case 401:
            ElMessage.error('登陆超时,请重新登录！');
            break;
          case 403:
            ElMessage.error('没有权限！');
            break;
          default:
            ElMessage.error('系统维护中，稍后回来！');
            break;
        }
      },
      (error: AxiosError) => {
        if (!error.response) {
          ElMessage.error('网络异常！');
          return Promise.reject(error);
        }
        const status = error.response.status;
        switch (status) {
          case 401:
            ElMessage.error('登陆超时,请重新登录！');
            break;
          case 403:
            ElMessage.error('没有权限！');
            break;
          default:
            ElMessage.error('系统维护中，稍后回来！');
            break;
        }
        return Promise.reject(error);
      }
    );
  }
};
