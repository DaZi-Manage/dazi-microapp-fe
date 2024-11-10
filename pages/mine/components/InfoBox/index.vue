<!--
 * @Author: 山风
 * @Date: 2024-11-10 20:43:49
 * @LastEditTime: 2024-11-10 21:06:41
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/pages/mine/components/InfoBox/index.vue
-->
<template>
  <view class="back flex flex-align-center">
    <image class="icon-70 border-radius-50" :src="userInfo.avatarUrl" />
    <view class="flex flex-column margin-left-6">
      <view>{{  userInfo.nickName }}</view>
    </view>
  </view>
</template>

<script>

export default {
  props: {
    userInfo: {
      type: Object,
      default: {}
    }
  },

  watch: {
    userInfo(nVal) {
      console.log(nVal)
    }
  }
}

</script>

<style lang="less" scoped>
.back {
  background-color: #fff;
  box-sizing: border-box;
  padding: 16rpx 24rpx;
}
</style>