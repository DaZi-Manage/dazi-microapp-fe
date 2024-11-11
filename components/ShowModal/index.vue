<template>
  <view class="dialog-content fixed" v-if="isShowClone" :catchtouchmove="true">
    <view class="mask" @click="handleClose" v-if="close_model"></view>
    <view class="mask" v-else></view>
    <view class="content-box fixed white-back" :style="'top: ' + top + ';width: ' + width + ';'">
      <view class="relative">
        <image v-if="show_close_icon" src="/static/image/common/icon-close.svg"
          class="absolute close-icon" @click="handleClose" />
        <view class="title text-center black font-weight-600" v-if="title">
          <view class="font-16 line-height-16">{{ title }}</view>
        </view>
        <slot name="top"></slot>
        <view v-if="show_cancel && show_confirm" class="btn-box flex width-100 flex-justify-between"
          :class="{ 'inversion-button': is_inversion_button }">
          <view :class="['cancel-btn', button_bold ? 'font-weight-500' : 'font-weight-400']"
            :style="'flex: ' + left_flex" @click="handleCancel">{{ cancel_text }}</view>
          <view :class="['confirm-btn', button_bold ? 'font-weight-500' : 'font-weight-400']"
            :style="'flex: ' + right_flex" @click="handleConfirm">{{ confirm_text }}</view>
        </view>
        <view v-else-if="show_cancel || show_confirm" class="width-100 flex flex-justify-center padding-bo"
          style="padding-bottom: 36rpx">
          <view v-if="show_cancel" :class="['cancel-btn', button_bold ? 'font-weight-500' : 'font-weight-400']"
            style="width: 80%" @click="handleCancel">{{ cancel_text }}</view>
          <view v-else-if="show_confirm" :class="['confirm-btn', button_bold ? 'font-weight-500' : 'font-weight-400']"
            style="width: 80%" @click="handleConfirm">{{ confirm_text }}</view>
        </view>
        <slot name="bottom"></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    value: {
      default: false,
      type: Boolean
    },
    title: {
      type: [String, Boolean],
      default: '提示'
    },
    cancel_text: {
      default: '取消'
    },
    confirm_text: {
      default: '确认'
    },
    top: {
      default: '50%'
    },
    width: {
      default: '582rpx'
    },
    show_cancel: {
      default: false
    },
    show_confirm: {
      default: false
    },
    confirm_close: {
      default: true
    },
    close_model: {
      default: true
    },
    left_flex: {
      default: 1
    },
    right_flex: {
      default: 1
    },
    show_close_icon: {
      default: false
    },
    is_inversion_button: {
      type: Boolean,
      default: false
    },
    button_bold: {
      type: Boolean,
      default: false
    }
  },
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  computed: {
    isShowClone: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
      this.isShowClone = false
    },
    handleConfirm() {
      // if (this.confirm_close) {
      //   this.handleClose()
      // }
      this.$emit('confirm')
    },
    handleCancel() {
      this.handleClose()
      this.$emit('cancel')
    }
  }
};
</script>

<style lang="less">
.dialog-content {
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 10000;
}

.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  filter: alpha(opacity=20);
}

.title {
  box-sizing: border-box;
  padding-top: 70rpx;
  padding-bottom: 40rpx;
}

.content-box {
  box-sizing: border-box;
  width: 80%;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  margin: auto;
  border-radius: 24rpx;
  overflow: hidden;
  z-index: 10001;
}

.close-icon {
  width: 48rpx;
  height: 48rpx;
  top: 0px;
  right: 0px;
  padding: 24rpx;
  z-index: 10;
}

.btn-box {
  box-sizing: border-box;
  padding: 0 48rpx 48rpx;

  :first-child {
    margin-right: 38rpx;
  }
}

.cancel-btn {
  height: 80rpx;
  border-radius: 40rpx;
  border: 2rpx solid #dbdbdb;
  box-sizing: border-box;
  background: #fff;
  font-size: 30rpx;
  color: #454545;
  line-height: 44rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirm-btn {
  height: 80rpx;
  background-color: #4ba1f1 ;
  box-sizing: border-box;
  border-radius: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30rpx;
  color: #ffffff;
  line-height: 44rpx;
}

.inversion-button {
  .confirm-btn {
    order: 0
  }

  .cancel-btn {
    order: 1;
  }

  :first-child {
    margin-right: 0;
    margin-left: 38rpx;
  }
}

.margin-left-28 {
  margin-left: 56rpx;
}

.margin-left-23 {
  margin-left: 46rpx;
}

.margin-left-19 {
  margin-left: 38rpx;
}
</style>
