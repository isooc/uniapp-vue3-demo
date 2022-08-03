import config from '@/config'
import store from '@/store'

let curentUrl = ''

// 请求配置
function getRequestConfig(method, contentType) {
    let token = store.state.user.token
    let requestConfig = {
        method: method,
        header:{
            'content-type': contentType || 'application/json; charset=utf-8',
        },
        dataType: 'json',
        // responseType: 'json',
    }
    if (curentUrl !=='/wxLogin') {
        requestConfig.header.token = token || ''
    }

    return requestConfig
}

// 处理参数
function processData(apiData = {}) {
    let data = { ...apiData }
    return data
}

function request(url, data, method = 'POST', contentType) {
    curentUrl = url
    const httpUrl = config.VITE_APP_BASE_URL

    return new Promise((resolve, reject) => {
        //提示一下
        //网络请求
        uni.request({
            url: httpUrl + url, // 接口地址
            data: processData(data),
            ...getRequestConfig(method, contentType),
            success: function (res) {
                //服务器返回数据
                if(res.data && res.data.code === 200){
                    resolve(res.data); //请求成功
                } else if(res.data && res.data.code === 401){
                    uni.showToast({
                        title: '登录已过期，请重新登录',
                        icon: 'none',
                        duration: 2000
                    });
                    store.dispatch('user/A_user_info', {})
                    setTimeout(()=>{
                        uni.reLaunch({
                            url: '/pages/user/login/index'
                        })
                    }, 1500)
                    //返回错误提示信息
                    reject(res.data);
                } else {
                    console.log('==other code==', res)
                    uni.showToast({
                        title: res.data && res.data.message || '网络请求错误',
                        icon: 'none',
                        duration: 2000
                    });
                    //返回错误提示信息
                    reject(res.data);
                }
            },
            fail: function (e) {
                console.log('=fail=', e)
				uni.showToast({
				    title: '网络连接错误',
					icon: 'loading',
				    duration: 2000
				});
                reject({
                    msg: '网络出错'
                });
            }
        })
    });
}

export default function(url, data, method, contentType) {
	return request(url, data, method, contentType)
}
