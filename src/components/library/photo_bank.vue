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
                <div class="photoBank-item col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_1_original.png" class="img-fluid" alt="">
                    <div class="cover">
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/downloadLink.png" alt=""> Скачать</a>
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/viewLink.png" alt=""> Просмотреть</a>
                    </div>
                </div>
                <div class="photoBank-item col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_2_original.png" class="img-fluid" alt="">
                    <div class="cover">
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/downloadLink.png" alt=""> Скачать</a>
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/viewLink.png" alt=""> Просмотреть</a>
                    </div>
                </div>
                <div class="photoBank-item col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_3_original.png" class="img-fluid" alt="">
                    <div class="cover">
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/downloadLink.png" alt=""> Скачать</a>
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/viewLink.png" alt=""> Просмотреть</a>
                    </div>
                </div>
                <div class="photoBank-item col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_4_original.png" class="img-fluid" alt="">
                    <div class="cover">
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/downloadLink.png" alt=""> Скачать</a>
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/viewLink.png" alt=""> Просмотреть</a>
                    </div>
                </div>
                <div class="photoBank-item col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_5_original.png" class="img-fluid" alt="">
                    <div class="cover">
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/downloadLink.png" alt=""> Скачать</a>
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/viewLink.png" alt=""> Просмотреть</a>
                    </div>
                </div>
                <div class="photoBank-item col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_6_original.png" class="img-fluid" alt="">
                    <div class="cover">
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/downloadLink.png" alt=""> Скачать</a>
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/viewLink.png" alt=""> Просмотреть</a>
                    </div>
                </div>
                <div class="photoBank-item col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_7_original.png" class="img-fluid" alt="">
                    <div class="cover">
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/downloadLink.png" alt=""> Скачать</a>
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/viewLink.png" alt=""> Просмотреть</a>
                    </div>
                </div>
                <div class="photoBank-item col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_8_original.png" class="img-fluid" alt="">
                    <div class="cover">
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/downloadLink.png" alt=""> Скачать</a>
                        <a href="#" class="actionLink"><img src="../../assets/images/photo_bank/viewLink.png" alt=""> Просмотреть</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import { baseAPI } from '../../config.js';
export default{
	name: 'photo_bank',
	data() {
		return {
			
		}
	},
	//components: {newMessageModal},
	//props: ['contact', 'contactStatus', 'isSubscribe'],
	
}  
</script>
<style>
#photoBank .topTitle{
    background-image: url(../../assets/images/photo_bank/photoBank_background_original.png);
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