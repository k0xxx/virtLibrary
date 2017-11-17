<template>
	<div id="bank3d">
        <div class="topTitle">
            <div class="container">
                <div class="row h-100 align-items-center">
                    <div class="col-12 col-md-6 col-lg-4">
                        <span class="bannerTop">
                            3D банк
                        </span>
                        <span class="bannerBottom">
                            Dental models
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mb-4">
                <bank3d_item v-for="(item_3d, index) in bank3d_items" :key="index" v-bind:url="item_3d.url" v-bind:itemId="item_3d.id"></bank3d_item>
                <infinite-loading @infinite="get3dItems" ref="infiniteLoading">
                    <span slot="no-more"></span>
                </infinite-loading>
            </div>
        </div>
    </div>
</template>
<script>
import { baseAPI } from '../../config.js';
import InfiniteLoading from "vue-infinite-loading"
import bank3d_item from './bank3d_item.vue';

export default{
	name: 'bank3d',
	data() {
		return {
			page: 1,
			endpoint: baseAPI + '3d_bank',
			bank3d_items: [],
		}
	},
	components: {bank3d_item, InfiniteLoading},
	methods: {
		get3dItems($state) {
			var options = {
				params: {page: this.page}
			}
			this.$http.get(this.endpoint, options).then((response) => {
                console.log(response);
				if (response.data.bank3d_items.length) {
					this.bank3d_items = this.bank3d_items.concat(response.data.bank3d_items);
                    this.page++;
                    $state.loaded();
				} else {
                    $state.complete();
					console.log('No more data in 3d bank');
				}
		  });
		},
	},
	created: function(){
		//this.get3dItems();
	}
}  
</script>
<style>
#bank3d .topTitle{
    background-image: url(../../assets/images/bank3d_background_original.png);
    display: flex;
    width: 100%;
    min-height: 100px;
    margin-top: 2px;
    min-height: 180px;
    background-size: cover;
}
#bank3d .bannerTop{
    display: block;
    padding: 0.75rem 0;
    color: #fff;
    font-size: 2rem;
}
#bank3d .bannerBottom{
    display: block;
    padding: 0.75rem 0;
    color: #fff;
    font-size: 2.2rem;
    font-weight: bold;
    border-top: 2px solid #ff0000;
}
#bank3d .bank3d-item{
    cursor: pointer;
}
#bank3d .bank3d-item .cover{
    display: none;
    flex-direction: column-reverse;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(38,82,77,1) 100%);
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(38,82,77,1) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(38,82,77,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#26524d',GradientType=0 );
    transition: all 0.3s ease;
}
#bank3d .bank3d-item:hover .cover{
    display: flex;
}
#bank3d .bank3d-item .cover .actionLink{
    color: #fff;
    font-size: 1.3rem;
    text-decoration: none;
}
#bank3d .bank3d-item .cover .actionLink:hover{
    color: #bbb;
}
</style>