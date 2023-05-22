import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ShiJing from '@/components/shijing/index'
import shijingDetail from '@/components/shijing/detail'
import SiShuWuJing from '@/components/sishuwujing/index'
import SiShuWuJingDetail from '@/components/sishuwujing/detail'
import LunYu from '@/components/lunyu/index'
import LunYuDetail from '@/components/lunyu/detail'
import HuaJianJi from '@/components/wudai/huajianji/index'
import HuaJianJiList from '@/components/wudai/huajianji/list'
import HuaJianJiDetail from '@/components/wudai/huajianji/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      children:[
        {
          path: '/shijing',
          name: 'ShiJing',
          component: ShiJing
        },
        {
          path: '/shijing/detail',
          name: 'shijingDetail',
          component: shijingDetail
        },
        {
          path: 'sishuwujing',
          name: 'SiShuWuJing',
          component: SiShuWuJing
        },
        {
          path: '/sishuwujing/detail',
          name: 'SiShuWuJingDetail',
          component: SiShuWuJingDetail
        },
        {
          path: '/lunyu',
          name: 'LunYu',
          component: LunYu
        },
        {
          path: '/lunyu/detail',
          name: 'LunYuDetail',
          component:LunYuDetail
        },
        {
          path: '/huajianji',
          name: 'HuaJianJi',
          component: HuaJianJi
        },
        {
          path: '/huajianji/list',
          name: 'HuaJianJiList',
          component: HuaJianJiList
        },
        {
          path: '/huajianji/detail',
          name: 'HuaJianJiDetail',
          component:HuaJianJiDetail
        },
        {
          path: '/nantang',
          name: 'NanTang',
          component: () => import('@/components/wudai/nantang/index')
        },
        {
          path: '/nantang/list',
          name: 'NanTangList',
          component: () => import('@/components/wudai/nantang/list')
        },
        {
          path: '/nantang/detail',
          name: 'NanTangDetail',
          component:() => import('@/components/wudai/nantang/detail')
        },
        {
          path: '/tangshi',
          name: 'TangPoetry',
          component:() => import('@/components/tangshi/index')
        },
        {
          path: '/tangshi/detail',
          name: 'TangPoetryDetail',
          component:() => import('@/components/tangshi/detail')
        },
      ]
    },
  ]
})
