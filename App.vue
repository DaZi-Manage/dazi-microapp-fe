<script>
const storage = require('./utils/storage.js')

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
			const userInfo = storage.getToken()
			return !!userInfo
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
					success: (dataRes) => {
						uni.hideLoading()
						// uni.setStorageSync('userInfo', 111)

						uni.login({
							success(res) {
								if (res.code) {
									uni.request({
										url: 'http://192.168.0.102:3000/wx/login',
										method: 'POST',
										headers: {
											'Content-Type': 'application/json'
										},
										data: {
											jsCode: res.code
										},
										success(login_res) {
											if (login_res.data.code === 200) {
												// uni.setStorageSync('token', login_res.data.data)
												console.log(login_res, 'login_res')
											} else {
												uni.showToast({
													title: '登录失败',
													icon: 'none'
												})
											}

										}
									})
								} else {
									console.log('登录失败！' + res.errMsg)
								}
							}
						})

						// resolve(dataRes)
					}
				})
			})
		}
	}
}
</script>

<style>
@import "./style/index.css";
</style>
