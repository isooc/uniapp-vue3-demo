// 密码
const _ispassword = /^[a-zA-Z0-9]{6,12}$/
// 是否身份证
const _isIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
// 是否手机
const _isMobileReg = /^1[1-9]\d{9}$/
// 是否姓名
const _isName = /^[\u4e00-\u9fa5]{2,6}$/
// 统一社会信用代码
const _isUnifiedSocialCreditCode = /^[0-9A-Z]{18}$/
// 工商注册号
const _isRegisteredNo = /^[0-9]{15}$/
// 详细地址
const _isaddress = /^\s*\S((.){0,60}\S)?\s*$/
// 公司名称
const _iscompanyName = /^[\u4e00-\u9fa5`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]{6,30}$/
// 纳税识别号
const _istaxNo = /^[0-9a-zA-Z]{15,20}$/
// 开户行
const _isbankName = /^[0-9\u4e00-\u9fa5`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]{4,25}$/
// 银行账号
const _isaccountNo = /^[0-9]{6,24}$/
// 座机固话
const _istelephone = /^([0-9]{3,4}-)?[0-9]{7,8}$/
// 短信验证码
const _isCode = /^[0-9]{4}$/

// 手机号码
export function isPhone (checkVal) {
    return _isMobileReg.test(checkVal)
}
export function isIdCard (checkVal) {
    return _isIdCard.test(checkVal)
}
export function isName (checkVal) {
    return _isName.test(checkVal)
}
export function iscompanyName (checkVal) {
    return _iscompanyName.test(checkVal)
}
export function isbankName (checkVal) {
    return _isbankName.test(checkVal)
}
export function isaddress (checkVal) {
    return _isaddress.test(checkVal)
}

export function isaccountNo (checkVal) {
    return _isaccountNo.test(checkVal)
}
export function istelephone (checkVal) {
    return _istelephone.test(checkVal)
}
export function isCode (checkVal) {
    return _isCode.test(checkVal)
}
export function companyAcc (checkVal) {
    return _isRegisteredNo.test(checkVal) || _isUnifiedSocialCreditCode.test(checkVal)
}
export function	isNumber (checkVal){
	var reg = /^-?[1-9][0-9]?.?[0-9]*$/
	return reg.test(checkVal)
}


