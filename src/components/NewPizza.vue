<template>
	<div class="NewPizza">
		<form class="form-horizontal" role='form'>
			<h3 class="text-muted my-5">添加新的Pizza:</h3>
			<div class="form-group row">
				<label class="control-label col-sm-1" for="name">品种</label>
				<div class="col-sm-11">
					<input type="text" name="" class="form-control" v-model='name'>
				</div>
			</div>
			<div class="form-group row">
				<label class="control-label col-sm-1" for="description">描述</label>
				<div class="col-sm-11">
					<textarea name="" class="form-control" v-model='description'></textarea>
				</div>
			</div>
			<h5>选项1:</h5>
			<div class="form-group row">
				<label class="control-label col-sm-1" for="sizeOne">尺寸</label>
				<div class="col-sm-11">
					<input type="text" name="" class="form-control" v-model='sizeOne'>
				</div>
			</div>
			<div class="form-group row">
				<label class="control-label col-sm-1" for="priceOne">价格</label>
				<div class="col-sm-11">
					<input type="text" name="" class="form-control" v-model='priceOne'>
				</div>
			</div>
			<h5>选项2:</h5>
			<div class="form-group row">
				<label class="control-label col-sm-1" for="sizeTwo">尺寸</label>
				<div class="col-sm-11">
					<input type="text" name="" class="form-control" v-model='sizeTwo'>
				</div>
			</div>
			<div class="form-group row">
				<label class="control-label col-sm-1" for="priceTwo">价格</label>
				<div class="col-sm-11">
					<input type="text" name="" class="form-control" v-model='priceTwo'>
				</div>
			</div>
		</form>
		<button class="btn btn-block btn-success" @click='addNewPizza'>添加</button>
	</div>
</template>

<script>
	export default{
		name:'NewPizza',
		data(){
			return{
				name:'',
				description:'',
				sizeOne:'',
				priceOne:'',
				sizeTwo:'',
				priceTwo:'',
			}
		},
	  computed:{
	  	userName(){
	  		return this.$store.getters.userName
	  	},
	  },
		methods:{
			addNewPizza(){
				//第一步：将新的pizza放到和菜单中一样格式的对象中
				let NewPizza={"name":this.name,"description":this.description,"options":[
					{"size":this.sizeOne,"price":this.priceOne},
					{"size":this.sizeTwo,"price":this.priceTwo}
				]};
				// 第二步：请求数据，把数据传递给后台中，同时vuex也要同步
				this.http.post('/'+this.userName+'/NewPizza.json',NewPizza)
					// .then(res=>this.$router.push({name:"menuLink"}));
					.then(res=>this.$store.commit('pushNewPizza',NewPizza))
			}
		}
			
		
	}
</script>