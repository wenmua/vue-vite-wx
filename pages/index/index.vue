<template>
	<view class="content">
		<up-button text="Other" @click="handleGoTo(1)"></up-button>
		<up-line></up-line>
		<up-button text="List" @click="handleGoTo(2)"></up-button>
		<up-line></up-line>
		<up-button text="Index" @click="handleGoTo(3)"></up-button>
		<up-line></up-line>
		<up-button text="demo" @click="handleGoTo(4)"></up-button>
		<up-line></up-line>
		<up-button text="登录" open-type="getUserInfo" @getuserinfo="getuserinfo"></up-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			handleGoTo(num) {
				let url = ''
				if (num == 1) url = '/pages/other/index'
				if (num == 2) url = '/pages/list/index'
				if (num == 4) url = '/pages/demo/index'
				uni.navigateTo({
					url: url
				})
			},
			getuserinfo(val) {
				console.log('val---->', val)
			}
		}
	}
</script>

<style>

</style>