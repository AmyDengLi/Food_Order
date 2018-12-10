import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store=new Vuex.Store({
	state:{
		menus:{},
		userName:null,
		isLogin:false
	},
	getters:{
		userName:state=>state.userName,
		isLogin:state=>state.isLogin,
	},
	mutations:{
		MenuItems(state,data){
			state.menus=data;
		},
		deleteNewPizza(state,data){
			state.menus.forEach(function(value,index){
				if(value==data){
					state.menus.splice(index,1)
				}
			})
		},
		pushNewPizza(state,data){
			state.menus.push(data)
		},
		userLogin(state,data){
			if(data){
				state.userName=data;
				state.isLogin=true;
			}else{
				state.userName=null;
				state.isLogin=false;
			}
		},
		Exit(state){
				state.isLogin=false;

		}
	},
	actions:{}
})