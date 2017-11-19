<template>
	<div class="row py-4">
        <router-link :to="{ name: 'surgery'}" class="col-6 col-md-4 col-lg-4 viewusion-item">
            <img src="../../assets/images/viewusion/surgery_and_implantation_logo.png" class="img-fluid" alt="">
            <div class="viewusion-item-content surgeryBg">Хирургия и <br> имплантация</div>
        </router-link>
        <router-link :to="{ name: 'orthodontics'}"  class="col-6 col-md-4 col-lg-4 viewusion-item">
            <img src="../../assets/images/viewusion/orthodontics_logo.png" class="img-fluid" alt="">
            <div class="viewusion-item-content orthodonticsBg">Ортодонтия</div>
        </router-link>
        <router-link :to="{ name: 'orthopedics'}"  class="col-6 col-md-4 col-lg-4 viewusion-item">
            <img src="../../assets/images/viewusion/orthopedics_logo.png" class="img-fluid" alt="">
            <div class="viewusion-item-content orthopedicsBg">Ортопедия, <br> протезирование</div>
        </router-link>
    </div>
</template>
<script>
//import { baseAPI } from '../../config.js';
export default{
	name: 'categories_item',
	data() {
		return {
            
		}
    },
}  
</script>
<style>

</style>