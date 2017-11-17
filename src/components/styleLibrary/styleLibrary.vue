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
                        <a href="#" class="btn_link bg-purple w-100 mb-3" v-if="!showAbout" v-on:click.prevent.stop="showAbout = true">Читать о библиотеке</a>
                        <a href="#" class="btn_link bg-purple w-100 mb-3" v-if="showAbout" v-on:click.prevent.stop="showAbout = false">
                            <icon name="angle-double-left" class="mr-1"></icon>Вернуться к фасонам
                        </a>
                        <a href="#" class="btn_link bg-green w-100" v-on:click.prevent.stop="showGlobalLink = true">Предоставить ссылку для просмотра</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="globalLink" v-if="showGlobalLink">
            <div class="container py-3">
                <div class="row justify-content-center">
                    <div class="col-10 globalLinkInput">
                        <p>Воспользуйтесь ссылкой для просмотра основного изображения незарегистрированными пользователями</p>
                        <div class="input-group">
                            <input type="text" class="form-control" @focus="$event.target.select()" ref='globalLinkInput' v-model="globalLink" placeholder="Ссылка для просмотра">
                            <button class="btn btn-secondary" type="button" title="Скопировать в буфер обмена" v-on:click="globalLinkToClipboard">
                                Получить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="styleLibraryContent">
            <div class="container">
                <div class="row">
                    <div class="col-12" v-if="!showAbout">
                        <router-link :to="{ name: 'styleLibrary_item', params: { styleName: style.name }}" class="styleLibrary-item" v-for="(style, index) in styles_list" :key="index">
                            <img :src="style.logo" class="img-fluid" alt="">
                        </router-link>
                    </div>
                    <div class="col-12 pt-3 aboutBlock" v-else>
                        <p>3D библиотека фасонов зубов от Pogarskiy Design является уникальной и состоит из 20-и разнообразных фасонов. Все фасоны 
                        представлены в виде DSD шаблонов и в 3D формате. Такая система использования 2D и 3D шаблонов способна обеспечить 
                        качественное планирование визуальной презентации и мокапов с дальнейшим проектированием постоянных конструкций.
                        Все исходные файлы систематизированы в базе данных и имеют удобный интерфейс для просмотра и скачивания на 
                        сайте colleagial.org. Использование данной системы обеспечивает предсказуемость конечного результата работы и помогает 
                        синхронизировать работу специалистов, учитывая пожелания пациентов. Такой подход позволяет полноценно участвовать врачу 
                        стоматологу в процессе проектирования ортопедических конструкций и реставраций. Так же визуальная часть поможет пациенту 
                        ознакомиться с конечным результатом работы еще до ее начала, и внести свои пожелания, прежде чем конструкция будет 
                        выполнена. Схема работы с библиотекой Pogarskiy Design library  заключатся в нескольких простых шагах:</p>
                        <ol>
                            <li>просмотр фасонов, предоставление пациенту ссылки для просмотра фасонов;</li>
                            <li>утверждение выбранного фасона зубов;</li>
                            <li>скачивание DSD шаблона выбранного фасона в нужном формате, и проведение DSD планирования;</li>
                            <li>скачивание выбранного фасона в 3D формате и проектирование мокапа с дальнейшей разработкой ортопедической 
                                конструкции или реставрации.</li>
                        </ol>
                        <p>Уникальность данной системы заключается в использовании 3D технологий на всех этапах разработки библиотеки. Вся 
                        работа начиналась с разработки 3D моделей, при этом визуальная часть является результатом 3D рендеринга, а именно создания 
                        фотореалистичных изображений из 3D моделей. Данный подход позволил не привязываться к исходной форме зубов, 
                        полученной методом сбора информации от клинических случаев. Все фасоны редактировались и создавались без привязки к 
                        изображениям, а позже создавалась визуальная часть. Такая методика позволила создать максимальное разнообразие 
                        корректных форм зубов, а так же выполнить DSD шаблоны в нескольких цветах и световых решениях. Фасоны нуждаются 
                        в минимальной коррекции, так как уже была произведена техническая доводка формы. Более того все фасоны в 
                        пространственном формате имеют не только детализированную форму, а и поверхность, которая так же создавалась 
                        независимо от исходных материалов.</p>
                        <div class="text-center">
                            <img src="./../../assets/images/style_library/about_footer.png" class="img-fluid" alt="">
                        </div>
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
            showAbout: false,
			page: 1,
            endpoint: baseAPI + 'style_library',
            showGlobalLink: false,
            globalLink: 'https://colleagial.org/files/view/b0c7a957-23fb-4ca0-92d6-ecbcdd12754e/',
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
                console.log(response);
				if (response.data.styles_list.length) {
					this.styles_list = this.styles_list.concat(response.data.styles_list);
					this.page++;
				} else {
					console.log('No more data in photolibrary');
				}
		    });
        },
        globalLinkToClipboard(){
            this.$refs.globalLinkInput.focus();
            document.execCommand("Copy");
        }
	},
	created: function(){
		this.getStyles();
    }
}  
</script>
<style>
#styleLibrary{
    padding-top: 46px;
}
#styleLibrary .topTitle{
    background-image: url(../../assets/images/styleLibrary_banner_original.png);
    display: flex;
    width: 100%;
    margin-top: 2px;
    min-height: 358px;
    background-size: cover;
    border-bottom: 3px solid #8f8f8f;
    background-position: center center;
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
#globalLink{
    background: #111;
    border-bottom: 3px solid #8f8f8f;
}
#globalLink p {
     color: #de8eca;
}
#globalLink .globalLinkInput input,
#globalLink .globalLinkInput button{
    background: #333;
    color: #fff;
    border-radius: 0;
    border-color: #777;
}
#styleLibrary .globalLinkInput button:hover{
    background: #5a5a5a;
    cursor: pointer;
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
@media (max-width: 768px){
    #styleLibraryContent .styleLibrary-item{
        width: calc(100% / 4);
    }
}
@media (max-width: 576px){
    #styleLibraryContent .styleLibrary-item{
        width: calc(100% / 3);
    }
}
@media (max-width: 340px){
    #styleLibraryContent .styleLibrary-item{
        width: calc(100% / 2);
    }
}

#styleLibraryContent .styleLibrary-item:hover{
    border: 2px solid #444;
}
#styleLibraryContent .aboutBlock{
    color: #fff;
}
#styleLibraryContent .aboutBlock ol{
    padding-left: 2rem;
}
</style>