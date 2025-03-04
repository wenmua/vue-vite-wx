<template>
	<z-paging ref="paging" v-model="dataList" @query="queryList" show-refresher-update-timee>


		<template #top>
			<view class="elian-header">top</view>
		</template>
		<template #refresher="{refresherStatus}">
			<custom-refresher :status="refresherStatus" />
		</template>
		<template #loadingMoreNoMore>
			<custom-nomore />
		</template>
		<view class="item" v-for="(item,index) in dataList" :key="index">
			<view class="item-box">
				<view class="">
					文章ID：{{item.ArticleID}}
				</view>
				<view class="">
					文章标题：{{item.title}}
				</view>
				<view class="">
					发布时间：{{item.publicdate}}
				</view>
				<view class="">
					来源地址：{{item.sourceName}}
				</view>
			</view>
		</view>
		<!-- <template #bottom>
			<view class="elian-footer">footer</view>
		</template> -->
	</z-paging>
</template>

<script setup>
	import {
		fullSearch
	} from "@/api/index"

	let paging = ref(null)
	let dataList = ref([])
	const queryList = (pageNo, pageSize) => {
		let obj = {
			"keyword": "",
			"ChannelName": "",
			"AreaID": "",
			"Pageindex": pageNo,
			"Type": 0,
		}
		uni.showLoading({
			title: "加载中",
			mask: true
		})
		fullSearch(obj).then(res => {
			console.log('res----->', res);
			paging.value.complete(res.SearchResult);
		}).catch(err => {
			console.log('err----->', err);
			paging.value.complete(false);
		}).finally(fin => {
			uni.hideLoading()
		})
	}
</script>

<style scoped lang="scss">
	.item-box {
		margin-bottom: 20px;
		background-color: pink;
	}
</style>