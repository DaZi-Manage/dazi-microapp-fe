export default function InterceptorResponse(data) {
  switch (data.code) {
    case 200:
      return data.data;
    case 401:
      uni.removeStorageSync('token');
      // uni.navigateTo({
      //   url: '/pages/login/login'
      // });
      throw new Error('Token expired');
    case 423:
      wx.login()
    default:
      throw new Error(data.message);
  }
}