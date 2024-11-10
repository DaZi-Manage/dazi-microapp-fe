export default function InterceptorRequest(target, url, data, config) {
  return [target.constructor.baseUrl + url, data, {
    ...config,
    header: {
      ...config?.header,
      'authorization': 'Bearer '+ uni.getStorageSync('token'),
    },
  }]
}