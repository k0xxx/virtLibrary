<template>
	<div class="photoBank-item col-6 col-md-4 col-lg-3 px-0">
        <img :src="url" class="img-fluid" alt="">
        <div class="cover">
            <a href="#" class="actionLink"><img src="../../assets/images/downloadLink.png" alt=""> Скачать</a>
            <a href="#" class="actionLink"><img src="../../assets/images/viewLink.png" alt=""> Просмотреть</a>
        </div>
    </div>
</template>
<script>
export default{
    name: 'photoBank_item',
    props: ['url'],
	data() {
		return {
			
		}
	},
}  
</script>