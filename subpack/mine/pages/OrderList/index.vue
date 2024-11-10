<!--
 * @Author: 山风
 * @Date: 2024-11-10 20:59:15
 * @LastEditTime: 2024-11-10 21:50:35
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/subpack/mine/pages/OrderList/index.vue
-->
<template>
  <view class="container">
    <van-sticky :offset-top="0">
      <view class="tab-box">
        <view class="flex inline-block" v-for="(item, index) in tab_list" :key="index">
          <view :class="'font-14 ' + (index === select_tab ? 'theme font-16' : 'clr_999')" @click="selectTab(index)">
            <view style="margin: 0 18rpx 0 20rpx;">{{ item.name }}</view>
          </view>
        </view>
      </view>

      <view class="order-box">
        <view v-for="(item, index) in order_list" :key="index">
          <view class="order-item">
            <view class="flex flex-justify-between">
              <view class="font-14 clr_666">订单号：{{ item.order_no }}</view>
              <view class="font-14" style="color: orange;">已完成</view>
            </view>
            <view class="flex margin-top-8">
              <image class="icon-60 border-radius-6 theme-back" style="flex-shrink: 0;"
                :src="item.activity_info.icon" />
              <view class="flex flex-1 margin-left-12">
                <view class="flex flex-1">
                  <view class="clr_333 font-18 font-weight-500 ellipsis-two" style="height: max-content;">{{
                    item.activity_info.name }}</view>
                </view>
                <view class="font-11 font-weight-600 margin-left-12">￥<text class="font-18 theme">{{
                  item.activity_info.price }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </van-sticky>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tab_list: [
        {
          name: '全部'
        },
        {
          name: '已完成'
        }
      ],
      select_tab: 0,
      order_list: [{
        order_no: 111111111,
        order_status: 1,
        activity_info: {
          id: 1,
          icon: '',
          name: '活动名称1活动名称1活动名称1活动名称1活动名称1活动名称1活动名称1活动名称1',
          price: 100,
        }
      }, {
        order_no: 222222222,
        order_status: 1,
        activity_info: {
          id: 2,
          icon: '',
          name: '活动名称2',
          price: 100,
        }
      }, {
        order_no: 333333333,
        order_status: 1,
        activity_info: {
          id: 3,
          icon: '',
          name: '活动名称3',
          price: 100,
        }
      }]

    }
  },

  methods: {
    selectTab(index) {
      this.select_tab = index
    },
  }
}
</script>

<style lang="less">
.container {
  background: #f8f8f8;
}

.tab-box {
  width: 100vw;
  height: 80rpx;
  line-height: 80rpx;
  background: #fff;
}

.order-box {
  box-sizing: border-box;

  .order-item {
    background: #fff;
    box-sizing: border-box;
    padding: 24rpx;
    margin-bottom: 16rpx;
  }
}
</style>