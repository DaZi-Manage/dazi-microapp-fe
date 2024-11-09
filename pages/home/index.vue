<!--
 * @Author: 山风
 * @Date: 2024-11-06 15:39:51
 * @LastEditTime: 2024-11-09 20:05:50
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/pages/home/index.vue
-->
<template>
  <view class="container">
    <view class="header" :style="'padding-top:' + navBarHeight + 'px;padding-bottom:20rpx'">
      <view class="search-box flex flex-align-center">
        <input type="text" class="clr_333 input" :value="keyword" placeholder="请输入搜索内容" @input="bindKeyword" />
        <!-- <view class="btn">搜索</view> -->
      </view>
    </view>

    <view :style="'padding-top:' + (navBarHeight + 50) + 'px'">
      <DataList />
    </view>
  </view>
</template>

<script>
import DataList from './components/DataList/index'
const app = getApp()
export default {
  components: {
    DataList
  },
  data() {
    return {
      navBarHeight: app.globalData.system_info.navBarHeight,
      keyword: '',

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
        uni.showModal({
          content: '请先登录',
          success: (res) => {
            if (res.confirm) {
              app.doWxLogin().then((res) => {
                console.log(res, 'res')
              })
            }
          },
        })
      }
    },

    bindKeyword(e) {
      this.keyword = e.detail.value
    },
  }
}
</script>

<style lang="less" scoped>
.container {
  background-color: #f5f4f2;
  box-sizing: border-box;
  padding-bottom: calc(env(safe-area-inset-bottom) + 50px);
}

.header {
  background: linear-gradient(180deg, #F8B316 0%, #f5f4f2 100%);
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
    }

    .btn {
      width: 120rpx;
      height: 60rpx;
      line-height: 60rpx;
      color: #fff;
      background: #F8B316;
      font-size: 28rpx;
      font-weight: 500;
      text-align: center;
      border-radius: 32rpx;
    }
  }
}
</style>