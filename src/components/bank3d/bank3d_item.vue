<template>
    <div class="bank3d-item col-6 col-md-4 col-lg-3 px-0">
        <img :src="url" class="img-fluid" alt="">
        <div class="cover">
            <router-link :to="{ name: 'fileDownload', params: { type: 'bank3d', set: itemId }}" class="actionLink">
                <img src="../../assets/images/downloadLink.png" alt=""> Скачать
            </router-link>
            <router-link :to="{ name: 'viewer3Dset', params: { type: 'bank3d', set: itemId }}" class="actionLink">
                <img src="../../assets/images/viewLink.png" class="img-fluid" alt=""> Просмотреть
            </router-link>
        </div>
    </div>
</template>
<script>
export default{
    name: 'bank3d_item',
    props: ['itemId', 'url'],
	data() {
		return {
			
		}
	},
}  
</script>