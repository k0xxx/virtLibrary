<template>
	<div id="imgPreview">
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container text-center">
						<div id="closeModalRegister" class="d-flex" @click="$emit('close')">
							<icon name="times" scale="1"></icon> 
						</div>
						<div class="modal-body-register p-100">
							<img :src="imgOriginal" class="img-fluid" alt="">
						</div>
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
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
} 
.modal-header-register h3{
  margin: 0px !important;  
}
.modal-header-register{
  background-color: #329d81;
  color: white;
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
#closeModalRegister{
        position: absolute;
        top: 6px;
        right: 9px;
        color: white;
        cursor: pointer;  
}    
</style>