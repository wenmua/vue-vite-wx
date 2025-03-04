import {
	http
} from 'uview-plus'

// post请求，
export const fullSearch = (params, config = {}) => http.post('/api/common/FullSearch', params, config)

// get请求，注意：get请求的配置等，都在第二个参数中
export const getMenu = (data) => http.get('/ebapi/public_api/index', data)