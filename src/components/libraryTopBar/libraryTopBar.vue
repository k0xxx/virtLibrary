<template>
	<div id="libraryTopBar">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="d-flex justify-content-between w-100">
						<router-link class="libraryTopBar-btn" :to="{ name: 'library'}">
							<img src='../../assets/images/libraryLogo.png' alt="">
							<strong>Библиотеки</strong>
						</router-link>
						<a :href="origin + '/profile'" class="libraryTopBar-btn">
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
	name: 'libraryTopBar',
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
#libraryTopBar{
    position: fixed;
	top: 45px;
    left: 0;
    right: 0;
    width: 100%;
	height: 47px;
	background: #1d1018;
	z-index: 9999;
}
#libraryTopBar .libraryTopBar-btn{
	line-height: 45px;
    color: #cdabc0;
	text-decoration: none;
	transition: all 0.3s ease;
}
#libraryTopBar .libraryTopBar-btn:hover{
	color: #fff;
}
#libraryTopBar .libraryTopBar-btn img{
	display: inline-block;
	max-width: 100%;
	height: auto;
}
</style>