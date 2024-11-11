<!--
 * @Author: 山风
 * @Date: 2024-11-06 15:39:51
 * @LastEditTime: 2024-11-11 15:09:35
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/pages/mine/index.vue
-->
<template>
  <view class="container">

    <view class="header" :style="'padding-top:' + navBarHeight + 'px'">

    </view>

    <view :style="'padding-top:' + navBarHeight + 'px;padding-bottom:20rpx'">
      <InfoBox :userInfo="userInfo" />

      <OrderBox />
    </view>
  </view>
</template>

<script>
import InfoBox from './components/InfoBox/index'
import OrderBox from './components/OrderBox/index'

import request from '@/api/request'

const app = getApp()

export default {
  components: {
    InfoBox,
    OrderBox
  },
  data() {
    return {
      navBarHeight: app.globalData.systemInfo.navBarHeight,

    }
  },

  computed: {
    userInfo() {
      return uni.getStorageSync('userInfo')
    }
  },

  methods: {
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

<style lang="less" scoped>
.container {
  overflow: hidden;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding-bottom: calc(env(safe-area-inset-bottom) + 50px);
}

.header {
  background: linear-gradient(180deg, orange 0%, #f8f8f8 100%);
  box-sizing: border-box;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
}
</style>