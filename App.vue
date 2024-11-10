<script>
import request from './api/request'
import * as storage from './utils/storage.js'

export default {
	globalData: {
		systemInfo: {},
		userInfo: {}
	},

	onLaunch: function () {
		this.getSystemInfo()
	},


	methods: {
		checkLogin() {
			const token = storage.getToken()
			return !!token
		},

		getSystemInfo() {
			const capsule = uni.getMenuButtonBoundingClientRect()
			uni.getSystemInfo({
				success: (res) => {
					this.globalData.systemInfo = {
						scrollTopHeight: capsule.bottom + capsule.top - res.statusBarHeight,
						statusBarHeight: res.statusBarHeight,
						winHeight: res.screenHeight,
						winWidth: res.screenWidth,
						windowWidth: res.windowWidth,
						capsuleTop: capsule.top,
						capsuleRight: capsule.width,
						capsuleHeight: +(capsule.top - res.statusBarHeight) * 2 + capsule.height,
						placeholderHeight: +(capsule.top - res.statusBarHeight) * 2 + capsule.height + res.statusBarHeight,
						toBar: res.platform == 'android' ? 48 : 44,
						platform: res.platform,
						paddingBottom: res.screenHeight - res.safeArea.bottom,
						navBarHeight: res.platform == 'android' ? 48 : 44 + res.statusBarHeight
					}
				},
				fail: (err) => {
					console.error(err)
				},
			})
		},

		doWxLogin() {
			const that = this
			uni.showLoading({
				title: '登录中...',
			})

			return new Promise((resolve, reject) => {
				uni.getUserProfile({
					desc: '用于完善会员资料',
					success: (data_res) => {
						console.log(data_res, 'data_res')

						uni.login({
							async success(res) {
								uni.hideLoading()
								if (res.code) {
									request.post('/wx/login', {
										jsCode: res.code
									}).then(login_res => {
										uni.setStorageSync('token', login_res)
										console.log(login_res, 'login_res')

										request.post('/wx/user/info', {
											iv: data_res.iv,
											encryptedData: data_res.encryptedData,
										}
										).then(info_res => {
											console.log('info', info_res)
											uni.setStorageSync('userInfo', info_res)
										}).catch((err) => {
											console.log(err, 'err')
										})
									})
								} else {
									console.log('登录失败！' + res.errMsg)
								}
							},
							fail(err) {
								console.log(err)
							}
						})
						// resolve(dataRes)
					},
				})
			})
		}
	}
}
</script>

<style>
@import "./style/index.css";
</style>
