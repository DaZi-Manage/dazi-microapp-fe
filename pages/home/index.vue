<!--
 * @Author: 山风
 * @Date: 2024-11-06 15:39:51
 * @LastEditTime: 2024-11-11 16:28:56
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/pages/home/index.vue
-->
<template>
  <view class="container">
    <image class="fixed" style="width: 100vw; height: 584rpx;top: 0;" src="/static/image/home/home-header.png" />
    <view :class="'header ' + (is_scroll ? 'theme-back' : '')"
      :style="'padding-top:' + navBarHeight + 'px;padding-bottom:20rpx'">
      <view class="search-box flex flex-align-center">
        <input type="text" class="clr_333 input" :value="keyword" placeholder="请输入您想搜索的活动名称" @input="bindKeyword" />
      </view>
    </view>

    <view :style="'padding-top:' + (navBarHeight + 50) + 'px'">
      <view v-if="count === 0">
        <EmptyBox icon="/static/image/common/no-activity.svg" :title="'暂无活动'" :subtitle="'敬请期待'" />
      </view>
      <view v-else>
        <DataList :list="list" />

        <view v-if="count && count === list.length" class="flex flex-justify-center font-12 clr_999 line-height-18">
          没有更多了</view>

        <view v-else-if="loading" class="flex flex-column flex-align-center" style="padding: 10rpx 0 14rpx;">
          <van-loading size="24" color="#999" />
          <view class="font-18 clr_999 line-height-18 margin-top-12">加载中</view>
        </view>

        <view class="width-100" style="height: 20rpx;"></view>
      </view>
    </view>

    <Modal v-model="is_show_login" :title="'请先登录'" :show_confirm="true" @confirm="doLogin">

    </Modal>
  </view>
</template>

<script>
import Modal from '@/components/ShowModal/index'
import EmptyBox from '@/components/EmptyBox/index'

import DataList from './components/DataList/index'

const app = getApp()

export default {
  components: {
    Modal,
    EmptyBox,
    DataList
  },

  data() {
    return {
      navBarHeight: app.globalData.systemInfo.navBarHeight,
      scrollTop: 0,
      is_scroll: false,
      keyword: '',
      is_show_login: false,
      loading: false,

      page_size: 10,
      page_num: 1,
      count: null,
      list: [],
      list_1: [{
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

  onPageScroll({ scrollTop }) {
    if (scrollTop <= 0 && this.is_scroll) {
      this.is_scroll = false
    } else if (scrollTop > 0 && !this.is_scroll) {
      this.is_scroll = true
    }
  },

  onPullDownRefresh() {
    this.getList()
  },

  onReachBottom() {
    if (this.count > this.list.length) {
      this.getList()
    }
  },

  methods: {
    async onShow() {
      if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
        this.$scope.getTabBar().setData({
          selected: 0
        })
      }

      if (!app.checkLogin()) {
        // this.is_show_login = true
      }

      this.getList()
    },

    doLogin() {
      app.doWxLogin().then((res) => {
        this.is_show_login = false
      })
    },

    bindKeyword(e) {
      this.keyword = e.detail.value
    },

    getList() {
      this.count = null
      if (this.loading) return
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.list = [...this.list, ...this.list_1]
        this.count = 11
        uni.stopPullDownRefresh()
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding-bottom: calc(env(safe-area-inset-bottom) + 50px);
}

.header {
  // background: linear-gradient(180deg, #4ba1f1  0%, #f8f8f8 100%);
  box-sizing: border-box;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;

  .search-box {
    height: 80rpx;
    line-height: 80rpx;
    box-sizing: border-box;
    margin: 0 24rpx;
    background: #fff;
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
}
</style>