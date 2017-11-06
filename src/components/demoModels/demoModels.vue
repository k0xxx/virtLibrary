<template>
	<div id="demoModels">
        <div class="topTitle">
            <div class="container">
                <div class="row h-100 align-items-center">
                    <div class="col-12 col-md-6 col-lg-4">
                        <span class="bannerTop">
                            Обучающие и демонстрационные 3D модели
                        </span>
                        <span class="bannerBottom">
                            Demo Models <br> Pogarskiy Design
                        </span>
                        <a href="#" class="btn_link bg-purple w-100">Читать о 3D моделях</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mb-4">
                <div class="col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_1_original.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_2_original.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_3_original.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_4_original.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_5_original.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_6_original.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_7_original.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 col-md-4 col-lg-3 px-0">
                    <img src="../../assets/images/demo_models/demoModel_8_original.png" class="img-fluid" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-sm-8 col-md-6 mx-auto">
                    <a href="#" class="btn_link bg-green w-100">Просмотреть демо модели</a>
                </div>
                <div class="col-10 col-sm-8 col-md-6 mx-auto">
                    <a href="#" class="btn_link bg-purple w-100">Скачать демо модели в STL архивом</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import { baseAPI } from '../../config.js';
export default{
	name: 'demoModels',
	data() {
		return {
			
		}
	},
	//components: {newMessageModal},
	//props: ['contact', 'contactStatus', 'isSubscribe'],
	
}  
</script>
<style>
#demoModels .topTitle{
    background-image: url(../../assets/images/demo_models/demoModel_banner_original.png);
    display: flex;
    width: 100%;
    margin-top: 2px;
    min-height: 320px;
    background-size: cover;
}
#demoModels .bannerTop{
    display: block;
    padding: 0.75rem 0;
    color: #fcace8;
    font-size: 1.7rem;
    font-weight: lighter;
    border-bottom: 1px solid #fcace8;
}
#demoModels .bannerBottom{
    display: block;
    padding: 0.75rem 0;
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
}
</style>