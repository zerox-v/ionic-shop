import Taro from '@tarojs/taro'
import Config from './config'

const request = (url: string, params: any, method: any) => {
  let path = url.indexOf("http:") > -1 ? url : Config.APIHOST + url;
  let token = Taro.getStorageSync(Config.TOKEN_SAVE_KEY).accessToken;
  let header = {
    Authorization: token ? "Bearer " + token : ""
  }

  return new Promise((reslove, reject) => {
    Taro.request({
      url: path, data: params, method: method, header, success: (res) => {
        if (res.statusCode == 200) {
          if (res.data.state) {
            reslove && reslove(res.data.data);
          } else {
            reject && reject(res);
            Taro.showToast({ title: res.data.message });
          }

        } else {
          reject && reject(res);
          Taro.showToast({ title: res.errMsg });
        }

      }
    })
  });

}
export default {
  get(url: string, params?: any) {
    return request(url, params, "GET")
  },
  post(url: string, params?: any) {
    return request(url, params, "POST")
  },

}
