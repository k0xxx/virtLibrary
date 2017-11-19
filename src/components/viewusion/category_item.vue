<template>
	<div class="viewusion-category-item">
        <router-link :to="{ name: 'viewer3Dset', params: { type: type, set: id }}">                      
            <img :src="preview" alt="" class="img-fluid">
            <div class="viewusion-category-item-content">
                {{ title }}
            </div>
        </router-link>
    </div>
</template>
<script>
//import { baseAPI } from '../../config.js';
export default{
	name: 'category_item',
	data() {
		return {
            
		}
    },
    props: ['type', 'id', 'title', 'preview'],

}  
</script>
<style>
.viewusion-category-item{
    position: relative;
}
.viewusion-category-item > a{
    display: block;
    color: #111;
}
.viewusion-category-item-content{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    text-shadow: 0px 0px 2px #fff;
    font-size: 1.2rem;
    font-weight: bold;
    background: -moz-linear-gradient(top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%);
    background: -webkit-linear-gradient(top, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 100%);
}
.viewusion-category-item-content:hover{
    background: -moz-linear-gradient(top, rgba(255,255,255,.0.9) 0%, rgba(255,255,255,0.1) 100%);
    background: -webkit-linear-gradient(top, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.1) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.1) 100%);
}
</style>