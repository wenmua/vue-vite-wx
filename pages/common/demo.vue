<template>
	<view class="elian-main">
		<view class="">
			{{ aa }}
		</view>
		<view class="">
			{{ bb }}
		</view>
		<view class="">
			{{ cc }}
		</view>
	</view>
</template>

<script setup>
	import {
		inject,
		toRef
	} from 'vue'

	let {
		aa,
		bb,
		cc
	} = toRef(inject("demoTest"))
</script>

<style scoped lang="scss">

</style>