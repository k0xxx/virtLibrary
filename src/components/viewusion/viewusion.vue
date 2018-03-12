<template>
	<div id="viewusion">
        <div class="topTitle">
            <div class="container">
                <div class="row h-100">
                    <div class="col-12 col-md-6 col-lg-4 py-4 d-flex flex-column justify-content-between">
                        <span class="bannerTop">
                            <strong>3D</strong> визуализации
                        </span>
                        <a href="#" class="btn_link bg-orange w-100" v-if="!showAbout" v-on:click.prevent.stop="showAbout = true">Читать о 3D моделях</a>
                        <a href="#" class="btn_link bg-orange w-100" v-if="showAbout" v-on:click.prevent.stop="showAbout = false">
                            <icon name="angle-double-left" class="mr-1"></icon>Вернуться
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <router-view v-if="!showAbout"></router-view>
        <div class="container" v-else>
            <div class="row py-3">
                <div class="col-12 pt-3">
                    <p>
                        3D визуализации позволяют наглядно демонстрировать разного рода стоматологические объекты, 
                        процедуры, аномалии, результаты лечения, а так же виды протезирования и реставраций. Данный 
                        функционал незаменим для работы с пациентами. Визуализации с высокой реалистичностью и 
                        детализацией демонстрирует сложные Узкоспециализированные объекты.
                    </p>
                    <p class="text-center">
                        Визуализации представлены двух типов: 3D и VR
                    </p>
                </div>
                <div class="col-12 py-3">
                    <div class="row justify-content-center">
                        <div class="col-6 col-sm-4 col-md-3 text-center">
                            <img src="./../../assets/images/demo_models/3d_icon.png" alt="" class="img-fluid">
                        </div>
                        <div class="col-6 col-sm-4 col-md-3 text-center">
                            <img src="./../../assets/images/demo_models/vr_icon.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>    
                <div class="col-12 pt-3">
                    <h4 class="text-center">3D визуализации</h4>
                    <p>
                        Данный тип визуализаций состоит из группы 3D моделей, определяющих единый объект. Каждой 
                        модели присвоены свойства, цвет и степень прозрачности, улучшающие демонстрационные свойства.
                        Функционал позволяет в онлайн режиме менять прозрачность каждого элемента и демонстрировать 
                        скрытые элементы используя zoom. 
                    </p>
                </div>
                <div class="col-12 py-3">
                    <div class="row justify-content-center">
                        <div class="col-6 col-sm-4 col-md-4 text-center">
                            <img src="./../../assets/images/demo_models/demo_preview_1.png" alt="" class="img-fluid">
                        </div>
                        <div class="col-6 col-sm-4 col-md-4 text-center">
                            <img src="./../../assets/images/demo_models/demo_preview_2.png" alt="" class="img-fluid">
                        </div>
                        <div class="col-6 col-sm-4 col-md-4 text-center">
                            <img src="./../../assets/images/demo_models/demo_preview_3.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-12 pt-3">
                    <h4 class="text-center">Схема управления мышью</h4>
                    <p>
                        Данный тип визуализаций состоит из группы 3D моделей, определяющих единый объект. Каждой 
                        модели присвоены свойства, цвет и степень прозрачности, улучшающие демонстрационные свойства.
                        Функционал позволяет в онлайн режиме менять прозрачность каждого элемента и демонстрировать 
                        скрытые элементы используя zoom. 
                    </p>
                </div>
                <div class="col-12 py-3">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-8 text-center">
                            <img src="./../../assets/images/demo_models/control_preview.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-12 pt-3">
                    <h4 class="text-center">VR визуализации</h4>
                    <p>
                        Данные визуализации позволяют в режиме виртуальной реальности с высокой фотореалистичностью 
                        демонстрировать объекты с радиусом обзора 360 градусов по горизонтали и 90 по вертикали.
                    </p>
                </div>
                <div class="col-12 py-3">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-8 text-center">
                            <img src="./../../assets/images/demo_models/vr_control_preview.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-12 py-3">
                    <p class="text-center">
                        Так же в данной визуализации можно использовать увеличение объекта и передвижение по экрану.
                    </p>
                </div>
                <div class="col-12 py-3">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-8 text-center">
                            <img src="./../../assets/images/demo_models/vr_zoom_preview.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { baseAPI } from '../../config.js';
export default{
	name: 'viewusion',
	data() {
		return {
            endpoint: baseAPI + 'demo_models/',
			showAbout: false,
            currentTab: this.$route.name,
            showViewList: false,
            demoModelsList: [],
		}
	},
    methods: {
        demoView(){
            if(this.showViewList){
                this.showViewList = false;
            }else{
                this.showViewList = true;
            }
        },
        getDemoModels() {
			this.$http.get(this.endpoint).then((response) => {
                if(response.data.demo_models_list){
                    this.demoModelsList = this.demoModelsList.concat(response.data.demo_models_list);
                }else{
                    console.log("We can't get current demo style!");
                }
		  });
		},
    },
    created: function(){
        console.log(this.currentTab);
        this.getDemoModels();
	}
	//components: {newMessageModal},
	//props: ['contact', 'contactStatus', 'isSubscribe'],
	
}  
</script>
<style>
#viewusion .topTitle{
    background-image: url(../../assets/images/viewusion_banner_original.png);
    display: flex;
    width: 100%;
    margin-top: 2px;
    min-height: 265px;
    background-size: cover;
    background-position: center center;
}
#viewusion .bannerTop{
    display: block;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    color: #3e3d3e;
    font-size: 1.7rem;
    border-bottom: 1px solid #f7941d;
}
#viewusion .viewusion-item{
    cursor: pointer;
}
#viewusion .viewusion-item-content{
    font-weight: bold;
    color: #fff;
    min-height: 180px;
    padding: 1rem 0 0 1.5rem;
    font-size: 1.2rem;
}
#viewusion .surgeryBg{
    background: #f5989d;
}
#viewusion .viewusion-item:hover .surgeryBg{
    background: #f77a81;
}
#viewusion .orthodonticsBg{
    background: #3cb878;
}
#viewusion .viewusion-item:hover .orthodonticsBg{
    background: #1fb768;
}
#viewusion .orthopedicsBg{
    background: #bd8cbf;
}
#viewusion .viewusion-item:hover .orthopedicsBg{
    background: #ba66bd;
}
#viewusion .terapyBg{
    background: #ee3344;
}
#viewusion .viewusion-item:hover .terapyBg{
    background: #ee3311;
}
#viewusion .viewusion-title{
    display: flex;
}
#viewusion .viewusion-title > img{
    height: 120px;
}
.viewusion-title-content{
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
}
.viewusion-title-otherCategories{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.viewusion-title-otherCategories a{
    display: block;
    position: relative;
}
.viewusion-title-otherCategories a span.viewusion-title-otherCategories-title{
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 14px;
    color: #fff;
    text-align: center;
    text-shadow: 0px 0px 1px #000;
}
.viewusion-title-otherCategories img{
    height: calc(120px - 2rem);
    cursor: pointer;
}
</style>