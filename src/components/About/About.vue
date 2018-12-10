<template>
  <div class="About">
  	<div class="row">
  		<div class="col-4">
  			<ul class="list-group mb-5">
  				<li class="nav-link">
  					<router-link :to="{name:'historyLink'}">
  						<a href="#" class="list-group-item">历史订单</a>
  					</router-link>
  				</li>
  				<li class="nav-link">
  					<router-link :to="{name:'contactLink'}">
  						<a href="#" class="list-group-item">联系我们</a>
  					</router-link>
  				</li>
  				<li class="nav-link">
  					<router-link :to="{name:'orderLink'}">
  						<a href="#" class="list-group-item">点餐文档</a>
  					</router-link>
  				</li>
  				<li class="nav-link">
  					<router-link :to="{name:'deliveryLink'}">
  						<a href="#" class="list-group-item">快递信息</a>
  					</router-link>
  				</li>
  			</ul>
  		</div>
  		<div class="col-8">
  			<router-view></router-view>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'About',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>