<!-- z-paging自定义的下拉刷新view -->
<template>
	<view class="refresher-container">
		<!-- 这里的图片请换成自己项目的图片 -->
		<image class="refresher-image" mode="aspectFit" src="@/static/common/refresher_loading.gif"></image>
		<text class="refresher-text">{{statusText}}</text>
	</view>
</template>

<script setup>
	import {
		computed
	} from 'vue';

	const props = defineProps({
		status: {
			type: String,
			default: '',
		},
	});
	console.log('this.status---->', props.status);
	const statusText = computed(() => {
		const statusTextMap = {
			'default': '哎呀，用点力继续下拉！',
			'release-to-refresh': '拉疼我啦，松手刷新~~',
			'loading': '正在努力刷新中...',
			'complete': '刷新成功啦~'
		};
		return statusTextMap[props.status];
	})
</script>

<style scoped>
	.refresher-container {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		height: 150rpx;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.refresher-image {
		margin-top: 10rpx;
		height: 45px;
		width: 45px;
	}

	.refresher-text {
		margin-top: 10rpx;
		font-size: 24rpx;
		color: #666666;
	}
</style>