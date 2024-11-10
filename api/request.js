import Interceptor from './InterceptorDecorator.js'

export class Request {
  static baseUrl = 'http://192.168.0.102:3000'

  @Interceptor()
  get(url, params, config) {
    return uni.request({
      url,
      method: 'GET',
      ...params,
      ...config
    })
  }

  @Interceptor()
  post(url, data, config) {
    return uni.request({
      url,
      method: 'POST',
      data,
      ...config
    })
  }
}

export default new Request()