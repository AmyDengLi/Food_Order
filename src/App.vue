<template>
  <div id="app">
  	<Header></Header>
  	<router-view></router-view>
  </div>
</template>


<script>
import Header from './components/Header.vue'
export default{
	components:{
		Header
	},
	computed:{
		isLogin(){
  		return this.$store.getters.isLogin
  	}
	},
	
}
</script>
<style>
#app{
	width: 65%;
	margin: 0 auto;
}
</style>
