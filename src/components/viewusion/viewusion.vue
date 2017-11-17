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
        <div class="container" v-if="!showAbout">
            <div class="row py-4" v-if="!currentTab">
                <div class="col-6 col-md-4 col-lg-4 viewusion-item" v-on:click="currentTab = 'surgery'">
                    <img src="../../assets/images/viewusion/surgery_and_implantation_logo.png" class="img-fluid" alt="">
                    <div class="viewusion-item-content surgeryBg">Хирургия и <br> имплантация</div>
                </div>
                <div class="col-6 col-md-4 col-lg-4 viewusion-item" v-on:click="currentTab = 'orthodontics'">
                    <img src="../../assets/images/viewusion/orthodontics_logo.png" class="img-fluid" alt="">
                    <div class="viewusion-item-content orthodonticsBg">Ортодонтия</div>
                </div>
                <div class="col-6 col-md-4 col-lg-4 viewusion-item" v-on:click="currentTab = 'orthopedics'">
                    <img src="../../assets/images/viewusion/orthopedics_logo.png" class="img-fluid" alt="">
                    <div class="viewusion-item-content orthopedicsBg">Ортопедия, <br> протезирование</div>
                </div>
            </div>
            <div class="row no-gutters py-4" v-if="currentTab == 'surgery'">
                <div class="col-12 viewusion-title surgeryBg">
                    <img src="../../assets/images/viewusion/surgery_and_implantation_logo.png" class="img-fluid" alt="">
                    <div class="viewusion-title-content">
                        <span>Хирургия и <br> имплантация</span>
                        <div class="viewusion-title-otherCategories">
                            <img src="../../assets/images/viewusion/orthodontics_logo.png" v-on:click="currentTab = 'orthodontics'" class="img-fluid" alt="">
                            <img src="../../assets/images/viewusion/orthopedics_logo.png" v-on:click="currentTab = 'orthopedics'" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters py-4" v-if="currentTab == 'orthodontics'">
                <div class="col-12 viewusion-title orthodonticsBg">
                    <img src="../../assets/images/viewusion/orthodontics_logo.png" class="img-fluid" alt="">
                    <div class="viewusion-title-content">
                        <span>Ортодонтия</span>
                        <div class="viewusion-title-otherCategories">
                            <img src="../../assets/images/viewusion/surgery_and_implantation_logo.png" v-on:click="currentTab = 'surgery'" class="img-fluid" alt="">
                            <img src="../../assets/images/viewusion/orthopedics_logo.png" v-on:click="currentTab = 'orthopedics'" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters py-4" v-if="currentTab == 'orthopedics'">
                <div class="col-12 viewusion-title orthopedicsBg">
                    <img src="../../assets/images/viewusion/orthopedics_logo.png" class="img-fluid" alt="">
                    <div class="viewusion-title-content">
                        <span>Ортопедия, <br> протезирование</span>
                        <div class="viewusion-title-otherCategories">
                            <img src="../../assets/images/viewusion/surgery_and_implantation_logo.png" v-on:click="currentTab = 'surgery'" class="img-fluid" alt="">
                            <img src="../../assets/images/viewusion/orthodontics_logo.png" v-on:click="currentTab = 'orthodontics'" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="currentTab == 'surgery'">
                <!--<surgery_item v-for="(item_3d, index) in bank3d_items" :key="index" v-bind:url="item_3d.url" v-bind:itemId="item_3d.id"></surgery_item>-->
            </div>
        </div>
        <div class="container" v-else>
            <div class="row pt-3">
                <div class="col-12">
                    <p>
                        3D Демо модели от Pogarskiy Design были разработаны для конструирования дентальных моделей с разнообразными дефектами, 
                        которые можно использовать для обучения и создания демонстрационных моделей. Демо модели представлены в виде набора файлов 
                        в формате STL, в котором присутствуют основания моделей верхней и нижней челюсти и съемные элементы с зубами. Все элементы с 
                        зубами выполнены в вариантах полной анатомии, редуцированной форме и в состоянии обработки зуба под частичную реставрацию. 
                        Используя любой 3D  редактор, который позволяет работать с STL файлами, можно создать модель с любым дефектом, а так же 
                        отмоделировать реставрацию или протез. Материализовать данную модель можно, как в разборном виде, так и в цельном, при помощи 
                        3D печати или фрезеровки.
                    </p>
                </div>
                <div class="col-12 text-center">
                    <img src="./../../assets/images/demo_models/demoModelAbout-video.png" alt="" class="img-fluid">
                </div>    
                <div class="col-12">
                    <p>
                        Использование данных шаблонов целесообразно для разработки лабораториями или зубными техниками демонстрационных моделей 
                        и предлагаемых конструкций. Демо модели имеют классическую форму и легко форматируются в 3D пространстве, что поможет 
                        избежать подбора моделей с необходимыми клиническими случаями. Так же их можно использовать в процессе обучения и 
                        практических занятий для моделирования реставраций и тестирования материалов. Данная разработка незаменима для начала 
                        работы с 3D технологиями, начиная от моделирования и заканчивая 3D печатью.
                    </p>
                </div>
                <div class="col-6 col-md-3">
                    <img src="./../../assets/images/demo_models/demoModel_about_1.png" alt="" class="img-fluid">
                </div>
                <div class="col-6 col-md-3">
                    <img src="./../../assets/images/demo_models/demoModel_about_2.png" alt="" class="img-fluid">
                </div>
                <div class="col-6 col-md-3">
                    <img src="./../../assets/images/demo_models/demoModel_about_3.png" alt="" class="img-fluid">
                </div>
                <div class="col-6 col-md-3">
                    <img src="./../../assets/images/demo_models/demoModel_about_4.png" alt="" class="img-fluid">
                </div>
                <div class="col-12">
                    <p>
                        3D Демо модели от Pogarskiy Design позволят воссоздавать огромное количество вариантов дефектов, методом комбинации разных 
                        элементов. Такой подход может облегчить множество задач зуботехнических лабораторий, стоматологических кабинетов и 
                        обучающих центров.
                    </p>
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
            currentTab: null,
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
    padding-bottom: 1.5rem;
    color: #3e3d3e;
    font-size: 1.7rem;
    font-weight: lighter;
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
    padding: 1rem 1rem 1rem 4rem;
}
.viewusion-title-otherCategories{
    display: flex;
    align-items: center;
}
.viewusion-title-otherCategories img{
    height: calc(120px - 2rem);
    margin-left: 1rem;
    cursor: pointer;
}
</style>