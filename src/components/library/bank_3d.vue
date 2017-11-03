<template>
	<div id="bank3d">
        <div class="topTitle">
            <div class="container">
                <div class="row h-100 align-items-center">
                    <div class="col-12 col-md-6 col-lg-4">
                        <span class="bannerTop">
                            3D банк
                        </span>
                        <span class="bannerBottom">
                            Dental models
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
	name: 'bank_3d',
	data() {
		return {
			
		}
	},
	//components: {newMessageModal},
	//props: ['contact', 'contactStatus', 'isSubscribe'],
	
}  
</script>
<style>
#bank3d .topTitle{
    background-image: url(../../assets/images/bank_3d/bank3d_background_original.png);
    display: flex;
    width: 100%;
    min-height: 100px;
    margin-top: 2px;
    min-height: 180px;
    background-size: cover;
}
#bank3d .bannerTop{
    display: block;
    padding: 0.75rem 0;
    color: #fff;
    font-size: 2rem;
}
#bank3d .bannerBottom{
    display: block;
    padding: 0.75rem 0;
    color: #fff;
    font-size: 2.2rem;
    font-weight: bold;
    border-top: 2px solid #ff0000;
}
#bank3d .photoBank-item{
    cursor: pointer;
}
#bank3d .photoBank-item .cover{
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
    background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(38,82,77,1) 100%);
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(38,82,77,1) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(38,82,77,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#26524d',GradientType=0 );
    transition: all 0.3s ease;
}
#bank3d .photoBank-item:hover .cover{
    display: flex;
}
#bank3d .photoBank-item .cover .actionLink{
    color: #fff;
    font-size: 1.3rem;
    text-decoration: none;
}
#bank3d .photoBank-item .cover .actionLink:hover{
    color: #bbb;
}
</style>