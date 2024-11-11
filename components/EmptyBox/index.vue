<!--
 * @Author: 山风
 * @Date: 2024-11-11 13:47:00
 * @LastEditTime: 2024-11-11 13:57:08
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/components/EmptyBox/index.vue
-->
<template>
  <view class="empty-box flex flex-align-center flex-justify-center flex-column" :style="'padding-top:' + top + 'rpx'">
    <image class="icon margin-bottom-12" :src="icon" />
    <view>{{ title }}</view>
    <view class="margin-top-4">{{ subtitle }}</view>
  </view>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: '96'
    },
    title: {
      type: String,
      default: '暂无活动'
    },
    subtitle: {
      type: String,
      default: '正在筹备中，敬请期待'
    }
  },
}
</script>

<style lang="less" scoped>
.empty-box {
  font-weight: 400;
  font-size: 26rpx;
  color: #999999;
  line-height: 36rpx;
  padding-bottom: 190rpx;
}

.icon {
  width: 240rpx;
  height: 240rpx;
}
</style>