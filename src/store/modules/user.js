import defaultSettings from '@/settings'
import storage from '@/utils/storage.js'
const state = {
  userInfo: storage.get('userInfo') || {},
  token: storage.get('token') || '',
  permission: storage.get('permission') || {}
}
/*mutations建议以M_开头*/
const mutations = {
  M_user_info: (state, data) => {
    state.userInfo = data
		state.token = data.access_token || data.token
    storage.set('userInfo', data)
    storage.set('token', data.access_token || data.token)
  }
}
const actions = {
  A_user_info({ commit }, data) {
    commit('M_user_info', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}