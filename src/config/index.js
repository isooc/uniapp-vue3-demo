//index.js
import development from './development'
import production from './production'
import uat from './uat'
import sit from './sit'

export default {
  development,
  production,
  uat,
  sit
}[import.meta.env.MODE || 'development']
