import Vue from 'vue'
import Router from 'vue-router'

import Frame from '../frame/subroute.vue'
import Hello from '@/components/Hello'
import userIndex from '@/components/user/index'
import userInfo from '@/components/user/info'
import userCnodeApi from '@/components/user/cnodeApi'
import gMaps from '@/components/user/gmaps'
import bMaps from '@/components/user/bmaps'

import BaiduMap from 'vue-baidu-map'

import baseIndex from '@/components/base/index'
import baseData from '@/components/base/databinding'
import baseList from '@/components/base/list'
import baseUserInput from '@/components/base/userInput'
import baseOther from '@/components/base/other'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'V7IGj1FIWe5TRpqFb2H68dTiUOFYyGGi'
})

Vue.use(Router)

export default new Router({
  mode: 'history',
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
        {path: 'cnode-api', component: userCnodeApi},
        {path: 'gmaps', component: bMaps}
      ]
    },
    {
      path: '/base',
      component: Frame,
      children: [
        {path: '/', component: baseIndex},
        {path: 'databinding', component: baseData},
        {path: 'list', component: baseList},
        {path: 'userinput', component: baseUserInput},
        {path: 'other', component: baseOther}
      ]
    }
  ]
})
