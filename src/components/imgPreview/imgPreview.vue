<template>
	<div id="imgPreview">
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					
						<div class="closeImgPreview" @click="$emit('close')">
							<icon name="times" scale="2"></icon> 
						</div>
						<div class="modal-body-preview">
							<img :src="imgOriginal" class="img-fluid" alt="">
						</div>
					
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
//import { baseAPI } from '../../config.js';

export default{
    name: 'imgPreview',
    props: ['imgOriginal'],
	data() {
		return {
			
		}
	},
	methods: {
		
	},
}  
</script>
<style>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}
.modal-wrapper {
  width: 600px;
  transition: all .3s ease;
} 
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.closeImgPreview{
  position: fixed;
  top: 15px;
  right: 15px;
  color: white;
  cursor: pointer; 
}    
</style>