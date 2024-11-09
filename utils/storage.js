/*
 * @Author: 山风
 * @Date: 2024-11-08 14:06:09
 * @LastEditTime: 2024-11-09 20:38:52
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/utils/storage.js
 */
export const getToken = () => {
  try {
      var value = uni.getStorageSync('token');
      if (value) {
          return value;
      } else {
          return null;
      }
  } catch (e) {
      console.log(e);
      return null;
  }
};