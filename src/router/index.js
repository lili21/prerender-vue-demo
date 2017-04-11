import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import printerHelp from '@/components/printer-help'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/printer-help',
      name: 'printer-help',
      component: printerHelp
    }
  ]
})
