<template>
	<div id="photoBank">
        <div class="topTitle">
            <div class="container">
                <div class="row h-100 align-items-center">
                    <div class="col-12 col-md-6 col-lg-4">
                        <span class="bannerTop">
                            Фото банк
                        </span>
                        <span class="bannerBottom">
                            Dental photos
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mb-4">
                <photoBank_item v-for="(image_item, index) in photoBank_images" :key="index" v-bind:thumbnail="image_item.thumbnail" v-bind:itemId="image_item.id"></photoBank_item>
                <infinite-loading @infinite="getPhotos" ref="infiniteLoading">
                    <span slot="no-more"></span>
                </infinite-loading>
            </div>
        </div>
    </div>
</template>
<script>
import { baseAPI } from '../../config.js';
import InfiniteLoading from "vue-infinite-loading"
import photoBank_item from './photoBank_item.vue';

export default{
	name: 'photo_bank',
	data() {
		return {
			page: 1,
			endpoint: baseAPI + 'photo_bank',
			photoBank_images: [],
		}
	},
	components: {photoBank_item, InfiniteLoading},
	methods: {
		getPhotos($state) {
			var options = {
				params: {page: this.page}
			}
			this.$http.get(this.endpoint, options).then((response) => {
                console.log(response);
				if (response.data.photoBank_images.length) {
					this.photoBank_images = this.photoBank_images.concat(response.data.photoBank_images);
                    this.page++;
                    $state.loaded();
				} else {
                    $state.complete();
					console.log('No more data in photolibrary');
				}
		  });
		},
	},
	created: function(){
		//this.getPhotos();
	}
}  
</script>
<style>
#photoBank .topTitle{
    background-image: url(../../assets/images/photoBank_background_original.png);
    display: flex;
    width: 100%;
    margin-top: 2px;
    min-height: 180px;
    background-size: cover;
}
#photoBank .bannerTop{
    display: block;
    padding: 0.75rem 0;
    color: #fff;
    font-size: 2rem;
}
#photoBank .bannerBottom{
    display: block;
    padding: 0.75rem 0;
    color: #fff;
    font-size: 2.2rem;
    font-weight: bold;
    border-top: 2px solid #ff0000;
}
#photoBank .photoBank-item{
    cursor: pointer;
}
#photoBank .photoBank-item .cover{
    display: none;
    flex-direction: column-reverse;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(77,137,38,1) 100%);
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(77,137,38,1) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(77,137,38,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#4d8926',GradientType=0 );
    transition: all 0.3s ease;
}
#photoBank .photoBank-item:hover .cover{
    display: flex;
}
#photoBank .photoBank-item .cover .actionLink{
    color: #fff;
    font-size: 1.3rem;
    text-decoration: none;
}
#photoBank .photoBank-item .cover .actionLink:hover{
    color: #bbb;
}
</style>