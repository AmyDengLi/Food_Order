<template>
  <div class="Login">
  	<div class="row mt-3">
  		<div class="col-md-12 col-lg-12">
  			<div class="card">
  				<img class="card-img-top" src="../assets/icon.png"></img>
  				<div class="card-body">
  					<form role='form' v-on:submit.prevent='onLogin'>		
				  		<!-- <div class="form-group">
				  			<label for="email">邮箱</label>
								<input type="email" name="" class="form-control" v-model="email"></input>
				  		</div> -->
				  		<div class="form-group">
				  			<label for="userName">用户名</label>
								<input type="text" name="" class="form-control" v-model="userName"></input>
				  		</div>
				  		<div class="form-group">
				  			<label for="pwd">密码</label>
								<input type="password" name="" class="form-control" v-model="pwd"></input>
				  		</div>
				  		<button class="btn btn-block btn-success" type="submit">登录</button>
				  	</form>
  				</div>
  			</div>
  		</div>
  	</div>		 	
  </div>
</template>

<script>
export default {
  name: 'Login', 
  data(){
  	return{
  		userName:'',
  		email:'',
  		pwd:''
  	}
  },
  computed:{
  	userEmail(){
  		return this.$store.getters.userEmail
  	},
  	isLogin(){
  		return this.$store.getters.isLogin
  	}
  },
  //组件内守卫，进来组件里面之前要先清空vuex里面的userEmail和isLogin以及menus
  beforeRouteEnter:(to,from,next)=>{
  	next((vm)=>{
  		vm.$store.commit('MenuItems')
  		vm.$store.commit('userLogin')
  	} )
  },
  methods:{
  	onLogin:function(){
  		this.http.get('/users.json')
  			.then((res)=>{
  				const data=res.data;
  				const usersArray=[];  //创建一个空的数组，把用户信息放到数组里面，好用filter函数进行匹配
  				for(let key in data){
  					usersArray.push(data[key]);
  				}
  				const result=usersArray.filter((users)=>{
  					return this.userName==users.userName&&this.pwd==users.pwdSet
  				})   //逐一遍历usersArray进行匹配，如果匹配成功则把正确的结果返回给数组，否则返回空数组
  				if(result.length>0){
  					this.$store.commit('userLogin',result[0].userName)  //如果登录成功则把信息保存一份到vuex中，要记得同步
  					this.$router.push({name:'homeLink'})
  				}else{
  					alert('登录邮箱未注册或者密码错误');
  					this.$store.commit('userLogin') 
  				}

  			})
  	}
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
	width: 20%;
	margin:10px auto;

}
</style>