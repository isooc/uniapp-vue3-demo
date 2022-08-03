import { createStore } from 'vuex'
import  creatPersistedState from 'vuex-persistedstate'
import getters from './getters'
//简单的方式
const modulesFiles = import.meta.globEager('./modules/*.js')
let modules = {}
// console.log(modulesFiles);
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules[moduleName] = modulesFiles[path].default
}

const vuexPersisted = creatPersistedState({
  storage: {
    getItem: key => uni.getStorageSync(key),
      setItem: (key, value) => uni.setStorageSync(key, value),
      // removeItem: key => uni.clearStorageSync(key)
      removeItem: key => {
          // console.log('-页面刷新会执行 removeItem--')
      }
  }
})

//复杂的方式
// const modulesFiles = import.meta.globEager('./modules/*.js')
// console.log(Object.keys(modulesFiles));
// const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
//   // const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const moduleName = modulePath.replace(/(.*\/)*([^.]+).*/gi, '$2')
//   const value = modulesFiles[modulePath]
//   modules[moduleName] = value.default
//   return modules
// }, {})
// console.log(modules);
export default createStore({
  modules,
  getters,
  plugins: [vuexPersisted]
})