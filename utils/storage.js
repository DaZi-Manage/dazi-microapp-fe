/*
 * @Author: 山风
 * @Date: 2024-11-08 14:06:09
 * @LastEditTime: 2024-11-10 20:40:02
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/utils/storage.js
 */
export const getToken = () => {
    try {
        var value = uni.getStorageSync('token')
        var userInfo = uni.getStorageSync('userInfo')

        if (value && userInfo) {
            return value;
        } else {
            return null;
        }
    } catch (e) {
        return null;
    }
};