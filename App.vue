<script>
import request from './api/request'
import * as storage from './utils/storage.js'

export default {
	globalData: {
		system_info: {},
		user_info: {}
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
					this.globalData.system_info = {
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
										).then(res => {
											console.log('info', res)
										})
									})
									// uni.request({
									// 	url: 'http://192.168.0.102:3000/wx/login',
									// 	method: 'POST',
									// 	header: {
									// 		'Content-Type': 'application/json'
									// 	},
									// 	data: {
									// 		jsCode: res.code
									// 	},
									// 	success(login_res) {
									// 		if (login_res.data.code === 200) {
									// 			uni.setStorageSync('token', login_res.data.data)
									// 			console.log(login_res, 'login_res')

									// 			uni.request({
									// 				url: 'http://192.168.0.102:3000/wx/user/info',
									// 				method: 'POST',
									// 				header: {
									// 					'authorization': 'Bearer ' + login_res.data.data,
									// 				},
									// 				data: {
									// 					iv: data_res.iv,
									// 					encryptedData: data_res.encryptedData,
									// 				},
									// 				success(info_res) {
									// 					console.log(info_res, 'info_res')
									// 				}
									// 			})

									// 		} else {
									// 			uni.showToast({
									// 				title: '登录失败',
									// 				icon: 'none'
									// 			})
									// 		}

									// 	}
									// })
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
