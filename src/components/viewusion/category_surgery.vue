<template>
<div class="container">
	<div class="row no-gutters py-4">
        <div class="col-12 viewusion-title surgeryBg">
            <img src="../../assets/images/viewusion/surgery_and_implantation_logo.png" class="img-fluid" alt="">
            <div class="viewusion-title-content">
                <span>Хирургия и <br> имплантация</span>
                <div class="viewusion-title-otherCategories">
                    <router-link :to="{ name: 'orthodontics'}">
                        <img src="../../assets/images/viewusion/orthodontics_logo.png" class="img-fluid" alt="">
                    </router-link>
                    <router-link :to="{ name: 'orthopedics'}">
                        <img src="../../assets/images/viewusion/orthopedics_logo.png" class="img-fluid" alt="">
                    </router-link>
                    <router-link :to="{ name: 'terapy'}">
                        <img src="../../assets/images/viewusion/terapy_logo.png" class="img-fluid" alt="">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-3 pb-4" v-for="(item, index) in viewusionItems" :key="index">
            <categoryItem v-bind:type="'viewusion_surgery'" v-bind:id="item.id" v-bind:title="item.title" v-bind:preview="item.preview"></categoryItem>
        </div>
    </div>
</div>
</template>
<script>
import { baseAPI } from '../../config.js';
import categoryItem from './category_item.vue'
export default{
	name: 'category_surgery',
	data() {
		return {
            endpoint: baseAPI + 'viewusion/',
            viewusionItems: [],
		}
    },
    components: {categoryItem},
    methods: {
        getViewusionItems() {
			var options = {}
			this.$http.get(this.endpoint + 'surgery', options).then((response) => {
                console.log(response.data);
                if(response.data.category_items){
                    this.viewusionItems = this.viewusionItems.concat(response.data.category_items);
                }else{
                    console.log("We can't items for this category!");
                }
		  });
		},
    },
    created: function(){
        this.getViewusionItems();
    }
}  
</script>
<style>

</style>