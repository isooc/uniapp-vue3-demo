export class Storage {
    constructor(keyPre = 'h5_pms_') {
        this._keyPre = keyPre
    }

    getFullKey (key) {
        return this._keyPre + key
    }

    /**
     * 设置数据
     * @param key
     * @param val
     */
    set (key, val) {
        let jsonData = JSON.stringify(val)
        return uni.setStorageSync(this.getFullKey(key), jsonData)
    }

    /**
     * 取数据
     * @param key
     */
    get (key) {
        let res = uni.getStorageSync(this.getFullKey(key))
        return res ? JSON.parse(res) : null
    }

    /**
     * 删除数据
     * @param key
     */
    remove (key) {
        return uni.removeStorageSync(this.getFullKey(key))
    }

    /**
     * 返回所有键值
     */
    keys () {
        let res = uni.getStorageInfoSync()
        return res.keys
    }

    /**
     * 清空数据
     */
    clear () {
        this.keys().forEach(key => this.remove(key))
    }

    /**
     * 查找 key
     * @param keyPre
     */
    findKey (keyPre) {
        let reg = new RegExp(keyPre, 'i')
        return this.keys().filter(key => {
            return reg.test(key)
        })
    }
}

let storage = new Storage()
export default storage
