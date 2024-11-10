<!--
 * @Author: 山风
 * @Date: 2024-11-06 15:39:51
 * @LastEditTime: 2024-11-10 20:58:45
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/pages/mine/index.vue
-->
<template>
  <view class="container">
    <InfoBox :userInfo="userInfo" />

    <OrderBox />
  </view>
</template>

<script>
import InfoBox from './components/InfoBox/index'
import OrderBox from './components/OrderBox/index'

import request from '@/api/request'

export default {
  components: {
    InfoBox,
    OrderBox
  },
  data() {
    return {

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
  background-color: #f5f4f2;
  box-sizing: border-box;
  padding-bottom: calc(env(safe-area-inset-bottom) + 50px);
}
</style>