<template>
	<div class="elian-main">
		<h1>other</h1>
		<up-button text="Other" @click="handleGoTo"></up-button>
		<up-button text="打开Sheet" @click="handleOpen"></up-button>
		{{ useCounter.count }}
		<up-button text="加" @click="useCounter.add()"></up-button>
		<up-button text="减" @click="useCounter.subtract()"></up-button>
		{{ useUser.count }}
		<up-button text="加" @click="useUser.add()"></up-button>
		<up-button text="减" @click="useUser.subtract()"></up-button>
		{{ $userStore.count }}
		<up-button text="加加" @click="$userStore.add()"></up-button>
		<up-button text="减减" @click="$userStore.subtract()"></up-button>
		<view class="">
			X:{{x}}
		</view>
		<view class="">
			Y:{{y}}
		</view>
	</div>
</template>

<script setup>
	import {
		useCounterStore
	} from "@/store/counter.js"
	import {
		useUserStore
	} from "../../store/user";
	import {
		useMouse
	} from "../../hooks/monse.js"
	const {
		x,
		y
	} = useMouse()
	let useCounter = useCounterStore()
	let useUser = useUserStore()

	console.log("x----->", x);
	console.log("y----->", y)


	const handleGoTo = () => {
		uni.navigateTo({
			url: "/pages/index/index"
		})
	}
	const handleOpen = () => {
		show.value = true
	}
	const handleConfirm = () => {
		show.value = false
	}
	const handleAdd = () => {
		useCounter.add()
	}
	const handleSubtract = () => {
		useCounter.subtract()
	}
</script>

<style scoped lang="scss">

</style>