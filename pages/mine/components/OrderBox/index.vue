<!--
 * @Author: 山风
 * @Date: 2024-11-10 20:49:44
 * @LastEditTime: 2024-11-10 20:58:16
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/pages/mine/components/OrderBox/index.vue
-->
<template>
  <view class="order" @click="toOrderList">订单列表</view>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  methods:{
    toOrderList(){
      uni.navigateTo({
        url: '/subpack/mine/pages/OrderList/index'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.order {
  width: 100vw;
  height: 80rpx;
  line-height: 80rpx;
  background: #fff;
  padding: 0 24rpx;
  margin: 16rpx 0;
}
</style>