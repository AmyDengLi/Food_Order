<template>
  <div class="Admin row">
    <div class="col-sm-12 col-md-8">
    	<NewPizza></NewPizza>
    </div>	
    <div class="col-sm-12 col-md-4">
    	<h4 class="text-muted my-5">菜单</h4>
    	<table class="table text-center">
    		<thead>
    			<tr>
    				<th>品种</th>
    				<th>删除</th>
    			</tr>
    		</thead>
    		<tbody>
    			<tr v-for='item in NewPizzas' :key="item.name">
    				<td>{{item.name}}</td>
    				<td><button class="btn btn-sm btn-outline-danger" @click='removePizza(item)'>X</button></td>
    			</tr>
    		</tbody>

    	</table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza.vue'
export default {
  name: 'Admin',
  components:{
  	NewPizza,
  },
  data(){
  	return{
  		// NewPizzas:[],
  	}
  },
  computed:{
    //从vuex中拿到menus数据
    NewPizzas(){
      return this.$store.state.menus
    },
    userName(){
      return this.$store.getters.userName
    },
  },
  created:function(){
    let array=[];
  	this.http.get('/'+this.userName+'/NewPizza.json')
  		.then((res)=>{
  			let data=res.data;
  			for(let key in data){
  				data[key].id=key;   //给每一个pizza对象添加一个id信息
  				array.push(data[key])  
  			}
        this.$store.commit('MenuItems',array) //数据同步，同步更改vuex中menus
  		})
    
  },
  methods:{
  	//删除该pizza信息,同时后台也要删除
  	removePizza(item){
      fetch('https://wd3570498300skhwwm.wilddogio.com/NewPizza/'+item.id+'.json',{
        method:'DELETE',
        headers:{
          'Content-type':'application/json'
        }
      })
        .then(res=>res.json)
        .then(data=>{
          this.$store.commit('deleteNewPizza',item)  //不同步到vuex中的话，那就只能刷新之后才能展示数据删除的结果
        })
        .catch(err=>console.log(err))
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Admin{
	margin:40px auto;
}
</style>