<template>
	<div id="styleLibrary">
        <div class="topTitle">
            <div class="container">
                <div class="row h-100 align-items-center">
                    <div class="col-12 col-md-6 col-lg-4">
                        <span class="bannerTop">
                            3D библиотека фасонов зубов
                        </span>
                        <span class="bannerBottom">
                            Pogarskiy Design library
                        </span>
                        <a href="#" class="btn_link bg-purple w-100 mb-3">Читать о библиотеке</a>
                        <a href="#" class="btn_link bg-green w-100">Предоставить ссылку для просмтра</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="styleLibraryContent">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <router-link :to="{ name: 'styleLibrary_item', params: { styleName: style.name }}" class="styleLibrary-item" v-for="(style, index) in styles_list" :key="index">
                            <img :src="style.logo" class="img-fluid" alt="">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { baseAPI } from '../../config.js';
import styleLibrary_item from './styleLibrary_item.vue';
export default{
    name: 'styleLibrary',
    data() {
		return {
			page: 1,
			endpoint: baseAPI + 'style_library',
			styles_list: [],
		}
	},
	components: {styleLibrary_item},
	methods: {
		getStyles() {
			var options = {
				params: {page: this.page}
			}
			this.$http.get(this.endpoint, options).then((response) => {
				if (response.data.styles_list.length) {
					this.styles_list = this.styles_list.concat(response.data.styles_list);
					this.page++;
				} else {
					console.log('No more data in photolibrary');
				}
		  });
		},
	},
	created: function(){
		this.getStyles();
    }
}  
</script>
<style>
#styleLibrary .topTitle{
    background-image: url(../../assets/images/styleLibrary_banner_original.png);
    display: flex;
    width: 100%;
    margin-top: 2px;
    min-height: 358px;
    background-size: cover;
    border-bottom: 3px solid #8f8f8f;
}
#styleLibrary .bannerTop{
    display: block;
    padding: 0.75rem 0;
    color: #ff00c0;
    font-size: 1.7rem;
}
#styleLibrary .bannerBottom{
    display: block;
    padding: 0.75rem 0;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    border-top: 1px solid #ff00c0;
}
#styleLibraryContent{
    background: #111;
    width: 100%;
    padding-bottom: 3rem;
}
#styleLibraryContent .styleLibrary-item{
    display: inline-block;
    width: calc(100% / 5);
    border: 2px solid #111;
}
#styleLibraryContent .styleLibrary-item:hover{
    border: 2px solid #444;
}
</style>