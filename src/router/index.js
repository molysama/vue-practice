import Vue from 'vue'
import Router from 'vue-router'

import _ from 'lodash/core'
import {ROUTERS} from './routers.toml'

Vue.use(Router)

// 根据配置文件来创建一个路由
const createRouter = (route) => {

  // 可能含有的路由信息
  const property = ['name', 'path', 'alias', 'redirect', 'meta', 'query']
  const router = _.pick(route, property)
  
  // 加载对应的路由组件
  router.component = () => import('@/views/' + route.component)

  // 如果有子路由的话，遍历加载子路由
  router.children = _.map(route.children, createRouter)

  return router
}

const routes = _.map(ROUTERS, createRouter)

export default new Router({
  mode: 'history',
  routes
})