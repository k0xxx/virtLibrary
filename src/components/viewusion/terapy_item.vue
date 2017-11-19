<template>
	<div class="row no-gutters py-4">
        <div class="col-12 viewusion-title terapyBg">
            <img src="../../assets/images/viewusion/terapy_logo.png" class="img-fluid" alt="">
            <div class="viewusion-title-content">
                <span>Терапия</span>
                <div class="viewusion-title-otherCategories">
                    <router-link :to="{ name: 'surgery'}">
                        <img src="../../assets/images/viewusion/surgery_and_implantation_logo.png" class="img-fluid" alt="">
                    </router-link>
                    <router-link :to="{ name: 'orthodontics'}">
                        <img src="../../assets/images/viewusion/orthodontics_logo.png" class="img-fluid" alt="">
                    </router-link>
                    <router-link :to="{ name: 'orthopedics'}">
                        <img src="../../assets/images/viewusion/orthopedics_logo.png" class="img-fluid" alt="">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { baseAPI } from '../../config.js';
export default{
	name: 'terapy_item',
	data() {
		return {
            endpoint: baseAPI + 'style_library/',
		}
    },
}  
</script>
<style>

</style>