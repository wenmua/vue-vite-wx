import App from './App'


// // #ifndef VUE3
// import Vue from 'vue'
// import './uni.promisify.adaptor'
// Vue.config.productionTip = false
// App.mpType = 'app'
// const app = new Vue({
// 	...App
// })
// app.$mount()
// // #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

import uviewPlus from 'uview-plus' // 引入 ui

import {
	createPinia
} from 'pinia' // 创建 pinia

import initRequest from './utils/request' // 引入请求

import { useUserStore } from './store/user' // 设置 全局 pinia

const pinia = createPinia()


export function createApp() {
	const app = createSSRApp(App)
	app.use(pinia).use(uviewPlus)
	app.config.globalProperties.$userStore = useUserStore()
	initRequest(app)
	app.config.errorHandler = (err) => {
		console.log("global main 错误提醒",err);
	  /* 处理错误 */
	}
	
	return {
		app
	}
}
// #endif