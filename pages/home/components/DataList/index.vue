<template>
  <view class="data-list">
    <view v-for="(item, index) in list" :key="index">
      <view class="item" @click="toGoodsDetail(item.id)">
        <image class="theme-back block border-radius-12" style="height: 300rpx;width: 100%" :src="item.icon" />
        <view style="padding: 0 20rpx;">
          <view class="clr_333 font-18 font-weight-500 margin-top-16 ellipsis-two">{{ item.name }}</view>
          <view class="flex flex-align-center flex-justify-between margin-top-10">
            <view class="clr_666 font-13 font-weight-400"><text class="theme ">{{ item.sale_num }}</text>/{{
              item.total_num }}人报名</view>
            <view class="font-11 font-weight-600">￥<text class="font-18 theme">{{ item.price }}</text></view>
          </view>
          <view class="clr_333 font-12 font-weight-400 margin-top-10 ellipsis">{{ item.desc }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        id: 1,
        icon: '',
        name: '111活动名称活动名称活动名称活动名称',
        sale_num: 100,
        total_num: 200,
        price: 123,
        desc: '111填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案'
      }, {
        id: 2,
        icon: '',
        name: '222活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称',
        sale_num: 100,
        total_num: 200,
        price: 123,
        desc: '222填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案'
      }, {
        id: 3,
        icon: '',
        name: '333活动名称活动名称活动名称活动名称活动名称活动名称活动名称',
        sale_num: 100,
        total_num: 200,
        price: 123,
        desc: '333填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案'
      }, {
        id: 4,
        icon: '',
        name: '444活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称',
        sale_num: 100,
        total_num: 200,
        price: 123,
        desc: '444填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案'
      }, {
        id: 5,
        icon: '',
        name: '555活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称',
        sale_num: 100,
        total_num: 200,
        price: 123,
        desc: '555填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案'
      }]
    }
  },

  methods: {
    toGoodsDetail(id) {
      uni.navigateTo({
        url: `/subpack/home/pages/GoodsDetail/index?id=${id}`
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