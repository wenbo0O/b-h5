import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve),
      meta: {
        title: "HelloWorld"
      }
    },
    {
      path: '/Friend',
      name: 'Friend',
      component: resolve => require(['@/pages/Friend'], resolve),
      meta: {
        title: "朋友浏览借界面"
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/pages/Login'], resolve),
      meta: {
        title: "登录"
      }
    },
    {
      path: '/Undertaker',
      name: 'Undertaker',
      component: resolve => require(['@/pages/Undertaker'], resolve),
      meta: {
        title: "承办人浏览借界面"
      }
    }
  ]
})
