import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import {store} from './store/store.js'
Vue.config.productionTip = false



axios.defaults.baseURL='https://wd3570498300skhwwm.wilddogio.com/'
Vue.prototype.http=axios

new Vue({
	router,
	store,
	components:{},
  render: h => h(App)
}).$mount('#app')

// 全局守卫router
router.beforeEach(function(to,from,next){
	let ifIfLogin=store.getters.isLogin
	if(ifIfLogin){
		next()
	}else{
		if(to.path=='/Login.vue'||to.path=='/Register.vue'){
			next()
		}else{
			alert('小主您还没有登录哦,请先登录！')
			next('./Login.vue')
		}
	}
})
