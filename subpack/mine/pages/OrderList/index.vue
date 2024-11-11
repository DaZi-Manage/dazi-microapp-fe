<!--
 * @Author: 山风
 * @Date: 2024-11-10 20:59:15
 * @LastEditTime: 2024-11-11 16:58:57
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/subpack/mine/pages/OrderList/index.vue
-->
<template>
  <view class="container">
    <van-sticky :offset-top="0">
      <view class="search-box flex flex-align-center">
        <input type="text" class="clr_333 input" :value="keyword" placeholder="请输入您想搜索的活动名称" @input="bindKeyword" />
      </view>

      <view class="tab-box">
        <van-tabs :sticky="true" :swipeable="true" :active="active" :lineWidth="tab_line_width" @change="onChange">
          <van-tab title="全部" name="0"></van-tab>
          <van-tab title="已完成" name="1"></van-tab>
        </van-tabs>
      </view>
    </van-sticky>

    <view class="order-box" v-if="order_list && order_list.length">
      <view v-for="(item, index) in order_list" :key="index">
        <view class="order-item">
          <view class="flex flex-justify-between flex-align-center">
            <view class="flex flex-align-center">
              <view class="font-14 clr_666">订单号：{{ item.order_no }}</view>
              <image class="icon-12 margin-left-4" src="/static/image/common/icon-copy.svg"
                @click="copyOrderNo(item.order_no)" />
            </view>
            <view class="font-14 clr_orange">已完成</view>
          </view>
          <view class="flex margin-top-8">
            <image class="icon-60 border-radius-6 theme-back" style="flex-shrink: 0;" :src="item.activity_info.icon" />
            <view class="flex flex-1 margin-left-12">
              <view class="flex flex-1">
                <view class="font-18 clr_333 font-weight-500 ellipsis-two" style="height: max-content;">{{
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

    <view v-else>
      <EmptyBox icon="/static/image/common/no-order.svg" :title="'暂无订单'" :subtitle="'快去下单吧'" />
    </view>
  </view>
</template>

<script>
import EmptyBox from '@/components/EmptyBox/index'

export default {
  components: {
    EmptyBox
  },

  data() {
    return {
      active: 0,
      tab_line_width: 16,
      tab_list: [
        {
          name: '全部'
        },
        {
          name: '已完成'
        }
      ],
      select_tab: 0,
      list: [],
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

  onLoad() {
    // this.tab_line_width = uni.upx2px(32)

  },

  methods: {

    onChange(e) {
      this.active = +e.detail.name
      // app.globalData.orderItem = +e.detail.name
      // this.setData({
      //   orderList: [],
      //   orderStatus: +e.detail.name,
      //   page: 1,
      //   pageSize: 20,
      //   count: 0,
      // })
      // this.getOrderList()
    },

    selectTab(index) {
      this.select_tab = index
    },

    copyOrderNo(data) {
      uni.setClipboardData({
        data: data.toString(),
        success() {
          uni.showToast({
            title: "复制成功",
            icon: "none",
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
.container {
  height: 100vh;
  background: #f8f8f8;
}

.van-tabs__line {
  width: 32rpx !important;
  height: 6rpx !important;
  bottom: 12rpx !important;
  background: #4ba1f1 !important;
  border-radius: 4rpx !important;
}

.search-box {
  height: 80rpx;
  line-height: 80rpx;
  box-sizing: border-box;
  margin: 0 24rpx;
  background: #cbcbcb;
  border-radius: 48rpx;
  padding: 0 20rpx;

  .input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 28rpx;
  }

  .btn {
    width: 120rpx;
    height: 60rpx;
    line-height: 60rpx;
    color: #fff;
    background: #4ba1f1;
    font-size: 28rpx;
    font-weight: 500;
    text-align: center;
    border-radius: 32rpx;
  }
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