import config from '@/config'
import store from '@/store'
import { async } from 'regenerator-runtime'
 
// 上传附件/图片 */
export function uploadFiles(file) {
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            // url: config.host + '/fileservice/ucstarftp/shareUpload',
            url: config.VITE_APP_HOST + '/fileservice/ucstarftp/UcstarFileUploadServlet?action=1',
            filePath: file.path,
            header:{
                token: store.state.user.token
            },
            name: 'file',
            formData: {
                'name': file.name
            },
            success: (res) => {
                resolve(JSON.parse(res.data))
            },
            fail: (err) => {
                uni.showToast({
                    title: '上传失败',
                    icon: 'none',
                    duration: 1500 // 提示的延迟时间，单位毫秒
                })
                console.log(err)
                reject(err)
            }
        })
    })
}

// 选择图片
export function chooseImage(uploadParam = {}) {
    return new Promise((resolve, reject) => {
        uni.chooseImage({
            count: uploadParam.count || 1,
            sizeType: uploadParam.sizeType || ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: uploadParam.sourceType || ['album', 'camera'],
            success: async(files) => {
                uni.showLoading({
                    title: ''
                })
                console.log(JSON.stringify(files.tempFilePaths));
                console.log(files.tempFiles);
                let fileArr = []
                for (let i = 0; i < files.tempFiles.length; i++) {
                   let res = await uploadFiles(files.tempFiles[i])
                   fileArr.push(res)                  
                }
                resolve(fileArr)
            }
            // fail: async(files) => {
                // this.toast('图片选择失败')
                // uni.showToast({
                //     title: '图片选择失败',
                //     icon: 'none',
                //     position: 'center',
                //     duration: 500 // 提示的延迟时间，单位毫秒
                // })
            // }
        })
    })
}
