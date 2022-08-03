const getters = {
  cachedViews: (state) => state.app.cachedViews,
  test: (state) => state.app.test,
  userInfo: (state) => state.user.userInfo,
  token: (state) => state.user.token
}
export default getters