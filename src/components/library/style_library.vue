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
                        <a href="#" class="btn_link w-100 mb-3">Читать о библиотеке</a>
                        <a href="#" class="btn_link w-100">Предоставить ссылку для просмтра</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="styleLibraryContent">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <router-link :to="{ name: 'style_library_item', params: { styleId: style.name }}" class="styleLibrary-item" v-for="style in stylesList">
                            <img :src="baseUrl + style.url" class="img-fluid" alt="">
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
	name: 'style_library',
	data() {
		return {
            baseUrl: window.location.origin,
			stylesList: [
                {name: '1.0', url: '/style_library/1.0.png'},
                {name: '1.1', url: '/style_library/1.1.png'},
                {name: '1.2', url: '/style_library/1.2.png'},
                {name: '1.3', url: '/style_library/1.3.png'},
                {name: '1.4', url: '/style_library/1.4.png'},
                {name: '2.0', url: '/style_library/2.0.png'},
                {name: '2.1', url: '/style_library/2.1.png'},
                {name: '2.2', url: '/style_library/2.2.png'},
                {name: '3.0', url: '/style_library/3.0.png'},
                {name: '3.1', url: '/style_library/3.1.png'},
                {name: '3.2', url: '/style_library/3.2.png'},
                {name: '3.3', url: '/style_library/3.3.png'},
                {name: '4.0', url: '/style_library/4.0.png'},
                {name: '4.1', url: '/style_library/4.1.png'},
                {name: '4.2', url: '/style_library/4.2.png'},
                {name: '5.0', url: '/style_library/5.0.png'},
                {name: '5.1', url: '/style_library/5.1.png'},
                {name: '5.2', url: '/style_library/5.2.png'},
                {name: '5.3', url: '/style_library/5.3.png'},
                {name: '5.4', url: '/style_library/5.4.png'},
            ],
		}
    },
    created(){
        console.log(this.baseUrl);
    }
	//components: {newMessageModal},
	//props: ['contact', 'contactStatus', 'isSubscribe'],
	
}  
</script>
<style>
#styleLibrary .topTitle{
    background-image: url(../../assets/images/style_library/styleLibrary_banner_original.png);
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