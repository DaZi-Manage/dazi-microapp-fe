<!--
 * @Author: 山风
 * @Date: 2024-11-09 14:59:23
 * @LastEditTime: 2024-11-11 15:28:33
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/pages/home/components/DataList/index.vue
-->
<template>
  <view>
    <view class="data-list">
      <view v-for="(item, index) in list" :key="index">
        <view class="item" @click="toActivityDetail(item.id)">
          <image class="theme-back block border-radius-12" style="height: 300rpx;width: 100%" :src="item.icon" />
          <view style="padding: 0 20rpx;">
            <view class="font-18 clr_33 font-weight-500 margin-top-16 ellipsis-two">{{ item.name }}</view>
            <view class="flex flex-align-center flex-justify-between margin-top-10">
              <view class="font-13 clr_666 font-weight-400"><text class="clr_orange">{{ item.sale_num }}</text>/{{
                item.total_num }}人报名</view>
              <view class="font-11 font-weight-600">￥<text class="font-18 clr_orange">{{ item.price }}</text></view>
            </view>
            <view class="font-12 clr_333 font-weight-400 margin-top-10 ellipsis">{{ item.desc }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  },

  data() {
    return {

    }
  },

  methods: {
    toActivityDetail(id) {
      uni.navigateTo({
        url: `/subpack/home/pages/ActivityDetail/index?id=${id}`
      })
    }
  }
}
</script>

<style lang="less">
.data-list {
  box-sizing: border-box;
  padding: 24rpx;
}

.item {
  background: #fff;
  box-sizing: border-box;
  padding: 0 0 32rpx;
  border-radius: 24rpx;
  margin-bottom: 36rpx;
}
</style>