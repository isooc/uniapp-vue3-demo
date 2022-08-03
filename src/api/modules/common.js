import request from '../http.js'


export default {

	// 上传附件
    uploadFiles(data, type) {
        return request('/fileservice/ucstarftp/shareUpload', data, 'POST')
    },

	// 数字字典
	getDataDict(data) {
		return request('/admin/system/v1/sysDict/getListByCode', data, 'POST')
	},

	// 获取用户信息
	getUserInfo(data) {
		return request('/admin/system/v1/login/getCurrentUserInfo', data, 'GET')
	}
}