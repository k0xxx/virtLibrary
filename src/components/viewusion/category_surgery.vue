<template>
<div class="container">
	<div class="row no-gutters py-4">
        <div class="col-12 flex-column align-items-center flex-sm-row viewusion-title surgeryBg">
            <img src="../../assets/images/viewusion/surgery_and_implantation_logo.png" class="img-fluid" alt="">
            <div class="flex-column flex-sm-row viewusion-title-content">
                <span class="text-center py-3 pl-3">Хирургия</span>
                <div class="viewusion-title-otherCategories">
                    <router-link :to="{ name: 'orthodontics'}">
                        <img src="../../assets/images/viewusion/orthodontics_logo.png" class="img-fluid" alt="">
                        <span class="viewusion-title-otherCategories-title">
                            Ортодонтия
                        </span>
                    </router-link>
                    <router-link :to="{ name: 'orthopedics'}">
                        <img src="../../assets/images/viewusion/orthopedics_logo.png" class="img-fluid" alt="">
                        <span class="viewusion-title-otherCategories-title">
                            Ортопедия
                        </span>
                    </router-link>
                    <router-link :to="{ name: 'terapy'}">
                        <img src="../../assets/images/viewusion/terapy_logo.png" class="img-fluid" alt="">
                        <span class="viewusion-title-otherCategories-title">
                            Терапия
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6 col-md-4 col-lg-3 pb-4" v-for="(item, index) in viewusionItems" :key="index">
            <categoryItem :category="'viewusion_surgery'" :id="item.id" :title="item.title" :preview="item.preview" :type="item.type"></categoryItem>
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