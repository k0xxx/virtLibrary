<template>
	<div id="libraryCat" class="container">
		<div class="row pt-4">
			<!--<div class="col-12">
				<router-link :to="{ name: 'viewer3D'}" class="btn_link bg-purple">3DViewer</router-link>
				<button type="button" v-on:click="showModal = true" class="btn_link bg-purple">Модальное окно</button>
				<modal v-if="showModal" @close="showModal = false"></modal>
			</div>-->
			<div class="col-12 col-sm-6 col-md-4 mb-4">
				<router-link class="libraryCatLink link-1" :to="{ name: 'demoModels'}">
					<img src="../../assets/images/demoModels_logo_original.png" class="img-fluid" alt="">
					<div class="libraryCatLink-shadow"></div>
					<div class="catTitle">Демо модели Pogarskiy Design</div>
				</router-link>
			</div>
			<div class="col-12 col-sm-6 col-md-4 mb-4">
				<router-link class="libraryCatLink link-2" :to="{ name: 'styleLibrary'}">
					<img src="../../assets/images/styleLibrary_logo_original.png" class="img-fluid" alt="">
					<div class="catTitle">Библиотека фасонов зубов Pogarskiy Design library</div>
					<div class="libraryCatLink-shadow"></div>
				</router-link>
			</div>
			<div class="col-12 col-sm-6 col-md-4 mb-4">
				<router-link class="libraryCatLink link-3" :to="{ name: 'photoBank'}">
					<img src="../../assets/images/photoBank_logo_original.png" class="img-fluid" alt="">
					<div class="catTitle">Фотобанк</div>
					<div class="libraryCatLink-shadow"></div>
				</router-link>
			</div>
			<div class="col-12 col-sm-6 col-md-4 mb-4">
				<router-link class="libraryCatLink link-4" :to="{ name: 'bank3d'}">
					<img src="../../assets/images/bank3d_logo_original.png" class="img-fluid" alt="">
					<div class="catTitle">Банк дентальных 3D моделей</div>
					<div class="libraryCatLink-shadow"></div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
//import { baseAPI } from '../../config.js';
//import modal from './../modals/modal.vue';
export default{
	name: 'library',
	data() {
		return {
			//showModal: false,
		}
	},
	//components: {modal},
	//props: ['contact', 'contactStatus', 'isSubscribe'],
	
}  
</script>
<style>
#libraryCat .libraryCatLink{
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: space-around;
	min-height: 360px;
	text-decoration: none;
}
#libraryCat .libraryCatLink img{
	z-index: 0;
}
#libraryCat .libraryCatLink:hover img{
	z-index: 100;
}
#libraryCat .libraryCatLink .catTitle{
	display: flex;
	align-items: center;
	min-height: 80px;
	padding: 0rem 1rem 1rem;
    font-size: 21px;
    font-weight: bold;
    color: #fff;
	z-index: 100;
}
#libraryCat .libraryCatLink .libraryCatLink-shadow{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
#libraryCat .libraryCatLink.link-1 .libraryCatLink-shadow{	
	background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(221,196,167,0) 0%, rgba(207,171,131,1) 80%, rgba(198,156,109,1) 100%);
	background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(221,196,167,0) 0%,rgba(207,171,131,1) 80%,rgba(198,156,109,1) 100%);
	background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(221,196,167,0) 0%,rgba(207,171,131,1) 80%,rgba(198,156,109,1) 100%);
}
#libraryCat .libraryCatLink.link-2{
	background: #000;
}
#libraryCat .libraryCatLink.link-2 .libraryCatLink-shadow{
	background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 0%, rgba(87,192,101,1) 80%, rgba(57,181,74,1) 100%);
	background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 0%,rgba(87,192,101,1) 80%,rgba(57,181,74,1) 100%);
	background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 0%,rgba(87,192,101,1) 80%,rgba(57,181,74,1) 100%);
}
#libraryCat .libraryCatLink.link-3 .libraryCatLink-shadow{	
	background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(131,133,190,0) 0%, rgba(79,82,163,1) 80%, rgba(48,51,147,1) 100%);
	background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(131,133,190,0) 0%,rgba(79,82,163,1) 80%,rgba(48,51,147,1) 100%);
	background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(131,133,190,0) 0%,rgba(79,82,163,1) 80%,rgba(48,51,147,1) 100%);
}
#libraryCat .libraryCatLink.link-4 .libraryCatLink-shadow{
	background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(185,185,185,0) 0%, rgba(156,156,156,1) 80%, rgba(139,139,139,1) 100%);
	background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(185,185,185,0) 0%,rgba(156,156,156,1) 80%,rgba(139,139,139,1) 100%);
	background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(185,185,185,0) 0%,rgba(156,156,156,1) 80%,rgba(139,139,139,1) 100%);
}
</style>