<template>
	<div class="photoBank-item col-6 col-md-4 col-lg-3 px-0">
        <img :src="thumbnail" class="img-fluid" alt="">
        <div class="cover">
            <router-link :to="{ name: 'fileDownload', params: { type: 'photoBank', set: itemId }}" class="actionLink">
                <img src="../../assets/images/downloadLink.png" alt=""> Скачать
            </router-link>
            <a href="#" class="actionLink" v-on:click.prevent.stop="showImgPreview = true"><img src="../../assets/images/viewLink.png" alt=""> Просмотреть</a>
        </div>
        <imgPreview v-if="showImgPreview" @close="showImgPreview = false" :imgOriginal="original"></imgPreview>
    </div>
</template>
<script>
import imgPreview from './../imgPreview/imgPreview.vue'
export default{
    name: 'photoBank_item',
    props: ['itemId', 'original', 'thumbnail'],
    components: {imgPreview},
	data() {
		return {
			showImgPreview: false,
		}
	},
}  
</script>