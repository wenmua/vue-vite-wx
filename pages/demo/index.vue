<template>
	<view class="elian-main">
		父组件
		<Demo />
	</view>
</template>

<script setup>
	import Demo from "../common/demo.vue"
	import {
		provide,
		ref,
		version
	} from 'vue'

	console.log("version----->", version)
	let aa = ref(0)
	let bb = ref('123')
	let cc = ref(false)

	provide("demoTest", {
		aa,
		bb,
		cc
	})
</script>

<style scoped lang="scss">

</style>