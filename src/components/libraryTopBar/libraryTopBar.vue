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
						<router-link class="libraryTopBar-btn" :to="{ name: 'library'}">
							<img src='../../assets/images/libraryArrow.png' alt="">
							<span class="hidden-xs-down">Вернуться в профиль</span>
						</router-link>
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

		}
	},
	//components: {newMessageModal},
	//props: ['contact', 'contactStatus', 'isSubscribe'],
	
}  
</script>
<style>
#libraryTopBar{
    height: 47px;
    background: #1d1018;
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