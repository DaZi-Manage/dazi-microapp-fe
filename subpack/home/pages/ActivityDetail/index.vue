<template>
  <view>
    <view class="navbar-content bg width-100 flex flex-align-center fixed"
      :style="'padding-top:' + systemInfo.statusBarHeight + 'px;height:' + systemInfo.navBarHeight + 'px;' + 'opacity:' + navbar_opacity">
      <view class="font-0" @click="toBack">
        <image class="icon-32" :src="arrow_black" />
      </view>
      <view class="flex flex-1 flex-align-center flex-justify-center font-17 font-weight-500 clr_333"
        style="padding-right: 64rpx;">活动详情</view>
    </view>

    <view class="navbar-content width-100 flex flex-align-center fixed"
      :style="'padding-top:' + systemInfo.statusBarHeight + 'px;height:' + systemInfo.navBarHeight + 'px;' + 'opacity:' + (1 - navbar_opacity)">
      <view class="nav-bg flex flex-align-center flex-justify-center" @click="toBack">
        <image class="icon-24" :src="arrow_white" />
      </view>
    </view>

    <swiper class="banner">
      <swiper-item v-for="(item, index) in activity_detail.banner" :key="index" :current="current" :interval="3000"
        autoplay circular :indicator-dots="true" @change="swiperChange" class="width-height-100">
        <view class="width-height-100" @click="previewImage(index)">
          <image class="width-height-100 theme-back" :src="item" />
        </view>
      </swiper-item>
    </swiper>

    <view class="detail">
      <view class="clr_333 font-14 font-weight-500 margin-top-5">{{ activity_detail.name }}</view>

      <view class="flex flex-align-center flex-justify-between margin-top-10">
        <view class="clr_666 font-13 font-weight-400"><text class="theme">{{ activity_detail.sale_num }}</text>/{{
          activity_detail.total_num }}人报名</view>
        <view class="font-11 font-weight-600">￥<text class="font-18 theme">{{ activity_detail.price }}</text></view>
      </view>

      <view id="desc" class="clr_333 font-12 font-weight-400 margin-top-10 relative"
        :class="show_desc_btn && !show_more_desc ? 'desc-box-hide' : ''">
        <text class="clr_666"
          :class="show_desc_btn && !show_more_desc ? 'ellipsis inline-block desc-hide' : 'desc-show'">{{
            activity_detail.desc }}</text>
        <template v-if="show_desc_btn">
          <view class="desc-more theme" @click="show_more_desc = !show_more_desc">
            <view style="margin-right: 2rpx;">{{ !show_more_desc ? '展开' : '收起' }}</view>
          </view>
        </template>
      </view>
    </view>

    <view class="footer flex flex-justify-between">
      <view class="text-center" style="width: 80rpx;margin: auto 20rpx;" @click="handleCall">
        <image class="icon-16" src="/static/image/common/phone.svg" />
        <view class="clr_999 font-14">电话</view>
      </view>
      <view :class="'btn ' + (is_order ? 'theme-back' : 'cb-back')">{{ is_order ? '立即下单' : '名额不足' }}</view>
    </view>
  </view>
</template>

<script>
const app = getApp()

export default {
  data() {
    return {
      systemInfo: app.globalData.systemInfo,
      navbar_opacity: 0,
      arrow_white: '/static/image/common/arrow-left-white.svg',
      arrow_black: '/static/image/common/arrow-left-black.svg',
      show_desc_btn: false,
      show_more_desc: true,
      activity_detail: {
        banner: ['/static/image/common/arrow-left-white.svg', '/static/image/common/arrow-left-black.svg', '/static/image/common/arrow-left-white.svg'],
        name: '222活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称',
        sale_num: 100,
        total_num: 200,
        price: 123,
        phone: '12345678',
        // desc:'文案填充文案填充文案填充文案'
        desc: '222填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案222填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案222填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案填充文案'
      },
      current: 0
    }
  },

  computed: {
    is_order() {
      return this.activity_detail.total_num !== this.activity_detail.sale_num
    }
  },

  onShow() {
    uni.createSelectorQuery().in(this).select('#desc').boundingClientRect(res => {
      if (res.height > 30) {
        this.show_desc_btn = true
      }
    }).exec()
  },

  onPageScroll({ scrollTop }) {
    this.scrollTop = scrollTop
    let navbar_opacity = scrollTop / 100
    if (scrollTop < 10) {
      navbar_opacity = 0
    } else if (navbar_opacity >= 1) {
      navbar_opacity = 1
    }
    this.navbar_opacity = navbar_opacity
  },

  methods: {
    toBack() {
      uni.navigateBack({
        delta: 1,
        fail: function () {
          uni.switchTab({
            url: '/pages/home/index',
          })
        },
      })
    },

    swiperChange(e) {
      this.current = e.detail.current
    },

    previewImage(current) {
      uni.previewImage({
        current,
        urls: this.activity_detail.banner
      })
    },

    handleCall() {
      uni.makePhoneCall({
        phoneNumber: this.activity_detail.phone,
      })
    },
  }
}
</script>

<style lang="less">
.navbar-content {
  padding-left: 18rpx;
  padding-right: 18rpx;
  box-sizing: border-box;

  &.fixed {
    top: 0;
    left: 0;
    z-index: 2001;
  }

  &.bg {
    background: rgba(255, 255, 255, 1);
  }

  .nav-bg {
    width: 64rpx;
    height: 64rpx;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    border: none;
    margin: 0;
    padding: 0;

    &::after {
      display: none;
    }
  }
}

.banner {
  width: 100vw;
  height: 480rpx;
}

.detail {
  box-sizing: border-box;
  padding: 16rpx 24rpx;

  .desc-box-hide {
    height: 36rpx;
    overflow: hidden;
  }

  .desc-hide {
    width: calc(100% - 92rpx);
    height: 36rpx;
  }

  .desc-show {
    height: auto;
    white-space: pre-wrap;
    word-break: break-all;
  }

  .desc-more {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 999;
    padding-left: 8rpx;
  }
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 120rpx;
  box-shadow: 0 0 20rpx #d0cfcf;
  border-top: 2rpx solid #d0cfcf;
  background: #FFFFFF;
  padding-bottom: env(safe-area-inset-bottom);

  .btn {
    width: 360rpx;
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 64rpx;
    color: #fff;
    font-size: 28rpx;
    font-weight: 500;
    margin: auto 20rpx;
  }
}
</style>