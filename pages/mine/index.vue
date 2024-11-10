<!--
 * @Author: 山风
 * @Date: 2024-11-06 15:39:51
 * @LastEditTime: 2024-11-08 14:41:03
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/pages/mine/index.vue
-->
<template>
  <view class="container">
    <view class="header" :style="'padding-top:' + navBarHeight + 'px;padding-bottom:20rpx'">
      <view class="flex">
        <image :src="userInfo.avatarUrl" class="w-20 h-20 rounded-full mr-2" />
        <view class="flex flex-column">
          <text>{{ getNickName }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import request from '../../api/request'

export default {
  data() {
    return {
      userInfo: {}
    }
  },

  mounted() {
    this.getUserInfo()
  },

  computed: {
    getNickName() {
      return this.userInfo.nickName === undefined ? '游客' : this.userInfo.nickName
    }
  },

  methods: {
    getUserInfo() {
      request.get('/user/info').then(res => {
        this.userInfo = res
      })
    },
    async onShow() {
      if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
        this.$scope.getTabBar().setData({
          selected: 1
        })
      }
    },
  }
}
</script>

<style  lang="less" scoped>
.container {
  background-color: #f5f4f2;
  box-sizing: border-box;
  padding-bottom: calc(env(safe-area-inset-bottom) + 50px);
}

.header {
  background: linear-gradient(180deg, #F8B316 0%, #f5f4f2 100%);
  box-sizing: border-box;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;

  .search-box {
    height: 80rpx;
    line-height: 80rpx;
    box-sizing: border-box;
    margin: 0 24rpx;
    background: #fff;
    border-radius: 48rpx;
    padding: 0 20rpx;

    .input {
      width: 100%;
      height: 100%;
      border: none;
    }

    .btn {
      width: 120rpx;
      height: 60rpx;
      line-height: 60rpx;
      color: #fff;
      background: #F8B316;
      font-size: 28rpx;
      font-weight: 500;
      text-align: center;
      border-radius: 32rpx;
    }
  }
}
</style>