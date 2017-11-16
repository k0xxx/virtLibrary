<template>
	<div id="viewusionTopBar">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="d-flex justify-content-between w-100">
						<router-link class="viewusionTopBar-btn" :to="{ name: 'library'}">
							<img src='../../assets/images/viewusion/viewusionTopBarLogo.png' class="mr-3" alt="">
							<strong>Демонстрационные модели</strong>
						</router-link>
						<a :href="origin + '/profile'" class="viewusionTopBar-btn">
							<img src='../../assets/images/libraryArrow.png' alt="">
							<span class="hidden-xs-down">Вернуться в профиль</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
//import { baseAPI } from '../../config.js';
export default{
	name: 'viewusionTopBar',
	data() {
		return {
			origin: window.location.origin,
		}
	},
	//components: {newMessageModal},
	//props: ['contact', 'contactStatus', 'isSubscribe'],
	
}  
</script>
<style>
#viewusionTopBar{
    height: 47px;
    background: #1d1018;
}
#viewusionTopBar .viewusionTopBar-btn{
	line-height: 45px;
    color: #cdabc0;
	text-decoration: none;
	transition: all 0.3s ease;
}
#viewusionTopBar .viewusionTopBar-btn:hover{
	color: #fff;
}
#viewusionTopBar .viewusionTopBar-btn img{
	display: inline-block;
	max-width: 100%;
	height: auto;
}
</style>