import {
	http,
	toast
} from 'uview-plus'
import config from '@/config/index.js';



const initRequest = (vm) => {
	console.log("config ------->", config);
	
	http.setConfig((defaultConfig) => {
		defaultConfig.baseURL = config.baseUrl /* 根域名 */

		console.log("defaultConfig----->", defaultConfig);
		return defaultConfig
	})
	/**
	 * 请求拦截
	 * @param {Object} http
	 */
	http.interceptors.request.use((config) => {
		console.log('请求拦截-0---》',config );
		config.data = config.data || {}
		return config
	}, (config) => {
		console.log('请求拦截-1---》',config );
		return Promise.reject(config)
	})
	/**
	 * 响应拦截
	 * @param {Object} http 
	 */
	http.interceptors.response.use((response) => {
		
		console.log("响应拦截-0--》",response);
		const data = response.data

		// const custom = response.config?.custom
		// if (data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
		// 	// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
		// 	if (custom.toast !== false) {
		// 		toast(data.message)
		// 	}
		// 	// 如果需要catch返回，则进行reject
		// 	if (custom?.catch) {
		// 		return Promise.reject(data)
		// 	} else {
		// 		// 否则返回一个pending中的promise
		// 		return new Promise(() => {})
		// 	}
		// }
		return data || {}
	}, (response) => {
		/*  对响应错误做点什么 （statusCode !== 200）*/
		console.log("响应拦截-1--》",response);
		return Promise.reject(response)
	})



}

export default initRequest