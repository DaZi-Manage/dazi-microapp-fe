<!--
 * @Author: 山风
 * @Date: 2024-11-09 15:50:04
 * @LastEditTime: 2024-11-09 15:51:41
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/components/Navigation/index.vue
-->
<template>
  <view>
    <view
      :class="'fixed white font-16 font-weight-500 white-back head-top flex width-100 z-2000 back-size' + (extra_height ? '' : 'flex-align-center')"
      :style="'height: ' + (systemInfo.toBar + extra_height) + 'px;padding-top:' + systemInfo.statusBarHeight + 'px;background: ' + back">
      <slot></slot>
    </view>
    <view
      :style="'height: ' + systemInfo.toBar + 'px;padding-top:' + systemInfo.statusBarHeight + 'px;background-color: ' + back"
      class="width-100 back-size"></view>
  </view>
</template>

<script>
const app = getApp()

export default {

  props: {
    extra_height: {
      type: Number,
      default: 0
    },
    back: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      systemInfo: app.globalData.systemInfo,

    }
  },
  options: {
    addGlobalClass: true
  }
};
</script>

<style>
.z-2000 {
  z-index: 2000;
}

.back-size {
  background-size: 100% 100%;
}
</style>
