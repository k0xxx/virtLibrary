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
            <router-view></router-view>
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