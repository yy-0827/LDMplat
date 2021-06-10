import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import login from '@/page/login'
import register from '@/page/register'
import synView from '@/page/synView'
import deviceManager from '@/page/deviceManager'
import addDevice from '@/page/addDevice'
import userManager from '@/page/userManager'
import alarmManager from '@/page/alarmManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      redirect: '/login',
      children: [{
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/register',
        name: 'register',
        component: register
      }]
    },
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect: '/blank',
      children: [{
        path: '/synView',
        name: 'synView',
        component: synView
      }, {
        path: '/deviceManager',
        name: 'deviceManager',
        component: deviceManager
      }, {
        path: '/userManager',
        name: 'userManager',
        component: userManager
      }, {
        path: '/alarmManager',
        name: 'alarmManager',
        component: alarmManager
      }, {
        path: '/addDevice',
        name: 'addDevice',
        component: addDevice
      }]
    }
  ]
})
