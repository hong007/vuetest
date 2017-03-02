import Vue from 'vue'
import Router from 'vue-router'

import Frame from '../frame/subroute.vue'
import Hello from '@/components/Hello'
import userIndex from '@/components/user/index'
import userInfo from '@/components/user/info'
import userCnodeApi from '@/components/user/cnodeApi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/user',
      component: Frame,
      children: [
        {path: '/', component: userIndex},
        {path: 'info', component: userInfo},
        {path: 'cnode-api', component: userCnodeApi}
      ]
    }
  ]
})
