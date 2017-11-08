<template>
	<div id="styleLibrary_item">
        <div class="topTitle">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-8 col-md-6">
                        <span class="bannerTop">Pogarskiy Design library</span>
                        <span class="bannerBottom">Фасон № <strong>{{ styleItem.title }}</strong></span>
                    </div>
                    <div class="col-3 col-sm-4 col-md-4 offset-md-2">
                        <img :src="styleItem.topBarImg" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div id="styleLibraryContent_item">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <img :src="styleItem.faceImg" class="img-fluid" alt="">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 col-sm-6 mb-sm-3">
                                    <a href="#" class="btn_link bg-purple w-100"><img src="../../assets/images/downloadLink.png" class="img-fluid" alt=""> Скачать</a>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <router-link :to="{ name: 'viewer3Dset', params: { set: styleItem.title }}" class="btn_link bg-green w-100">
                                        <img src="../../assets/images/viewLink.png" class="img-fluid" alt=""> Просмотреть
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 offset-1">
                        <img :src="styleItem.previewImg" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { baseAPI } from '../../config.js';
export default{
	name: 'style_library_item',
	data() {
		return {
            currentStyle: this.$route.params.styleName,
            endpoint: baseAPI + 'style_library/',
            styleItem: {
                title: '',
                topBarImg: '',
                faceImg: '',
                previewImg: '',
            },
		}
    },
	methods: {
		getStyleItem() {
			var options = {}
			this.$http.get(this.endpoint + this.currentStyle, options).then((response) => {
                if(response.data.style_item){
                    console.log(response.data.style_item);
                    this.styleItem.title = response.data.style_item.title;
                    this.styleItem.topBarImg = response.data.style_item.topBarImg;
                    this.styleItem.faceImg = response.data.style_item.faceImg;
                    this.styleItem.previewImg = response.data.style_item.previewImg;
                }else{
                    console.log("We can't get current style!");
                }
		  });
		},
	},
	created: function(){
		this.getStyleItem();
	}
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
    height: calc(100vh - 250px);
}
</style>