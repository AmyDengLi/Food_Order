<template>
  <div class="Menu row mt-5">
  	<div class="col-sm-12 col-md-8">
  		<table class="table">
	  		<thead>
	  			<tr>
	  				<th><strong>尺寸</strong></th>
	  				<th><strong>价格</strong></th>
	  				<th><strong>加入</strong></th>
	  			</tr>
	  		</thead>
	  		<tbody v-for='menu in menus'>
	  			<tr>
	  				<td><strong>{{menu.name}}</strong></td>
	  			</tr>
	  			<tr v-for='option in menu.options'>
	  				<td>{{option.size}}</td>
	  				<td>{{option.price+'￥'}}</td>
	  				<td><button class="btn btn-sm btn-outline-success" @click='AddCart(menu,option)'>+</button></td>
	  			</tr>
	  		</tbody>
	  	</table>
  	</div>
  	<div class="col-sm-12 col-md-4 text-center">
  		<div v-if='pizzas.length>0'>
	  		<table class="table">
	  			<thead>
	  				<tr>
	  					<th>数量</th>
	  					<th>商品</th>
	  					<th>价格</th>
	  				</tr>
	  			</thead>
	  			<tbody>
	  				<tr v-for="pizza in pizzas" :key='pizza.pizzaStyle'>
	  					<td>
	  						<a href="#" id="sub" @click='Sub(pizza)'>-</a>
	  						<a href="#" id="pizzaNum">{{pizza.pizzaNum}}</a> 
	  						<a href="#" id="add" @click='Add(pizza)'>+</a>
	  					</td>
	  					<td>{{pizza.pizzaStyle}}</td>
	  					<td>{{pizza.pizzaPrice+'￥'}}*{{pizza.pizzaNum}}</td>
	  				</tr>
	  			</tbody>
	  			<tbody style="color:red">
	  				<tr>
	  					<td>共计</td>
	  					<td></td>
	  					<td>{{total+"￥"}}</td>
	  				</tr>
	  			</tbody>
	  		</table>
	  		<button class="btn btn-block btn-success">提交</button>		
	  	</div>
	  	<div v-else>您当前购物车没有任何商品</div>
  	</div> 	 	
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data(){
  	return {
  		// menus:{
  		// 	"durian":{"name":"榴莲pizza","description":"这是喜欢吃榴莲朋友的最佳选择","options":[
  		// 		{"size":"6寸","price":"38"},
  		// 		{"size":"9寸","price":"98"}}
  		// 	]
  		// },
  		pizzas:[],
  		pizzaNum:1,
  	}
  },
  computed:{
  	total:function(){
  		let totalPrice=0;
  		this.pizzas.forEach(function(value,index){
  			totalPrice+=value.pizzaPrice*value.pizzaNum
  		})
  		return totalPrice;
  	},
  	menus(){
  		return this.$store.state.menus
  	},
    userName(){
      return this.$store.getters.userName
    }
  },
  created(){
		this.http.get('/'+this.userName+'/NewPizza.json')
			.then(res=>this.$store.commit('MenuItems',res.data))
				// this.menus=res.data; //menu应该从vuex里面拿比较好
				//从后台中获得数据，并且保存到vuex中
		},
  methods:{
  	//添加购物车,同时和Add与Sub事件要相互关联
  	AddCart:function(menu,option){
  		const that=this;
  		//主要先获得点击商品的信息价格尺寸等,不用获得按钮的标签，只需要把商品信息option通过参数传递过来就行
  		//点击的商品信息放到pizza对象中
  		const pizza={pizzaStyle:option.size+menu.name,pizzaPrice:option.price,pizzaNum:1};
  		//判断当前点击的商品信息是否出现在购物车当中,返回的是已匹配的数组
  		let result=that.pizzas.filter((item)=>{
  			return item.pizzaStyle==pizza.pizzaStyle&&item.pizzaPrice==pizza.pizzaPrice
  		});
  			//如果是已经购买的商品，只需要改商品的priceNum++
  		if(result.length>0&&result!=null){
  			that.pizzas.forEach(function(value,index){
  				if(value.pizzaStyle==pizza.pizzaStyle){
  					value.pizzaNum++
  				}
  			})
  		}else{
  			//数组表示已点击的商品汇总（即购物车），把当前的pizza对象push数组中
				that.pizzas.push(pizza);
  		}
  		
  		// console.log(pizza,that.pizzas);
  	},
  	//添加pizza数
  	Add:function(pizza){
  		const that=this;
  		console.log(pizza);
  		pizza.pizzaNum++;
  	},
  	//减少pizza数
  	Sub:function(pizza){
  		const that=this;
  		pizza.pizzaNum--;
  		//如果pizzaNum=0则从pizzas数组中删除该商品信息
  		if(pizza.pizzaNum==0){
  			that.pizzas.splice(that.pizzas.indexOf(pizza),1)
  		}
  	}
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
	display: inline-block;
	text-decoration: none;
}
#pizzaNum{
	width: 20px;
	height: 20px;
	border:1px solid;
	line-height: 20px;
	margin:0 5px;
}
</style>