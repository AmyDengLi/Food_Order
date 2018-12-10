import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/About/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

//二级路由
import History from './components/About/History.vue'
import Contact from './components/About/Contact.vue'
import Order from './components/About/Order.vue'
import Delivery from './components/About/Delivery.vue'


Vue.use(Router)

export default new Router({
  routes: [
  {path:'/',component:Home,name:'homeLink'},
  {path:'/Menu.vue',component:Menu,name:'menuLink'},
  {path:'/Admin.vue',component:Admin,name:'adminLink'},
  {path:'/About',component:About,redirect:'/About/Contact.vue',name:'aboutLink',children:[
	  {path:'/About/History.vue',component:History,name:'historyLink'},
	  {path:'/About/Contact.vue',component:Contact,name:'contactLink'},
	  {path:'/About/Order.vue',component:Order,name:'orderLink'},
	  {path:'/About/Delivery.vue',component:Delivery,name:'deliveryLink'},
  ]},
  {path:'/Login.vue',component:Login,name:'loginLink'},
  {path:'/Register.vue',component:Register,name:'registerLink'},
  {path:'*',redirect:'/'}
  ],
  mode:'history',
  scrollBehavior(to,from,savedPosition){
  	if(savedPosition){
  		return savedPosition
  	}else{
  		return {x:0,y:100}
  	}
  }
})  


