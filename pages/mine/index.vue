<!--
 * @Author: 山风
 * @Date: 2024-11-06 15:39:51
 * @LastEditTime: 2024-11-08 14:41:03
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/pages/mine/index.vue
-->
<template>
  <view>
    <view>mine</view>
  </view>
</template>

<script>
export default {
 
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

<style></style>