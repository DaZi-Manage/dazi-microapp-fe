Component({
	data: {
		selected: 0,
		color: '#666',
		selectedColor: '#4ba1f1 ',
		list: [
			{
				pagePath: '/pages/home/index',
				iconPath: '/static/image/tabbar/menu-home-def.png',
				selectedIconPath: '/static/image/tabbar/menu-home.png',
				text: '首页'
			},
			{
				pagePath: '/pages/mine/index',
				iconPath: '/static/image/tabbar/menu-mine-def.png',
				selectedIconPath: '/static/image/tabbar/menu-mine.png',
				text: '我的'
			}
		]
	},

	methods: {
		switchTab(e) {
			const { dataset } = e.currentTarget
			
			if (dataset.index === this.data.selected) return

			wx.switchTab({
				url: dataset.path
			})
			this.setData({
				selected: dataset.index
			})
		}
	}
})