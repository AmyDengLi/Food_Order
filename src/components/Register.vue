<template>
  <div class="Login">
  	<div class="row mt-3">
  		<div class="col-md-12 col-lg-12">
  			<div class="card">
  				<img class="card-img-top" src="../assets/icon.png"></img>
  				<div class="card-body">
  					<form role='form' v-on:submit.prevent='onRegister'>		
  						<div class="form-group">
				  			<label for="userName">用户名</label>
								<input type="text" name="" class="form-control" v-model="userName"></input>
				  		</div>
				  		<div class="form-group">
				  			<label for="email">邮箱</label>
								<input type="email" name="" class="form-control" v-model="email"></input>
				  		</div>
				  		<div class="form-group">
				  			<label for="name">输入密码</label>
								<input type="password" name="" class="form-control" v-model="pwdSet"></input>
				  		</div>
				  		<div class="form-group">
				  			<label for="name">确定密码</label>
								<input type="password" name="" class="form-control" v-model="pwdConfirmed"></input>
				  		</div>
				  		<button class="btn btn-block btn-success" type="submit">注册</button>
				  	</form>
  				</div>
  			</div>
  		</div>
  	</div>		 	 
  </div>
</template>

<script>
export default {
  name: 'Register',
  data(){
  	return{
  		userName:'',
  		email:'',
  		pwdSet:'',
  		pwdConfirmed:''
  	}
  },
  methods:{
  	onRegister:function(){
  		// console.log('123')
  		const formData={userName:this.userName,email:this.email,pwdSet:this.pwdSet,pwdConfirmed:this.pwdConfirmed}
  		//获取注册信息，并且传递到‘野狗’上面去
  		if(this.pwdConfirmed==this.pwdSet){
  			this.http.post('/users.json',formData)
	  			// .then((res)=>{
	  			// 	console.log(res)
	  			// })
	  			.then(res=>this.$router.push({name:'loginLink'}))
	  		}else{
	  			alert('密码不一致')
	  		}
  		
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