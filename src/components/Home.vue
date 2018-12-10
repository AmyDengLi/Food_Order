<template>
	<div class="row">
	  <div class="Home col-sm-12" >
	  	<div class="adver">
	  		<h1>欢迎品尝!</h1>
			<h2>这里有你喜欢的榴莲pizza!</h2>
			<button class="btn btn-succes">Let's order!</button>
	  	</div>	  	
	  </div>
	</div>
</template>

<script>
export default {
  name: 'Home',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Home{
	background:url('../assets/pizza.jpg');
	height: 80vh;
	padding: 18%;
	text-align: center;
}
.adver{
	background:#eee;
	opacity: 0.8;
	padding: 20px 0;
	margin: 20px auto;
}
</style>