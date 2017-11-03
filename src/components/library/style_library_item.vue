<template>
	<div id="styleLibrary_item">
        <div class="topTitle">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <span class="bannerTop">Pogarskiy Design library</span>
                        <span class="bannerBottom">Фасон № <strong>1.0</strong></span>
                    </div>
                    <div class="col-3">
                        <img src="../../assets/images/style_library/head_img_1.0.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div id="styleLibraryContent_item">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <img src="../../assets/images/style_library/face_img_1.0.png" class="img-fluid" alt="">
                    </div>
                    <div class="col-3">
                        <img src="../../assets/images/style_library/teeth_1.0.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import { baseAPI } from '../../config.js';
export default{
	name: 'style_library_item',
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
#styleLibrary_item .topTitle{
    background: #111;
    width: 100%;
    margin-top: 2px;
    border-bottom: 3px solid #8f8f8f;
    padding: 0.75rem 0;
}
#styleLibrary_item .bannerTop{
    display: block;
    color: #a3a0a0;
    font-size: 1.7rem;
}
#styleLibrary_item .bannerBottom{
    display: block;
    color: #fff;
    font-size: 1.3rem;
}
#styleLibrary_item .bannerBottom strong{
    font-size: 1.7rem;
}
#styleLibraryContent_item{
    background: #000;
}
</style>