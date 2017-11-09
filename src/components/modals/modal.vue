<template>
    <transition name="modal">
        <div class="modal-mask" v-on:click="$emit('close')">
            <div class="modal-wrapper">
                <div class="modal-container" v-on:click.stop>
                    <div class="modal-container-header">
                        <span>Выбор типа наряда</span>
                        <a href="#" v-on:click.stop.prevent="$emit('close')">
                            <icon name="close"></icon>
                        </a>
                    </div>
                    <div class="modal-container-body">
                        <div class="container">
                            <div class="row py-3 rigChoose-box">
                                <div class="col-4 d-flex flex-column justify-content-center align-items-center">
                                    <h5>Упрощенный</h5>
                                    <img src="./../../assets/images/modals/simpleRig.png" class="img-fluid" alt="">
                                </div>
                                <div class="col-4 d-flex flex-column justify-content-center align-items-center">
                                    <h5>Ортопедический</h5>
                                    <img src="./../../assets/images/modals/ortopedicalRig.png" class="img-fluid" alt="">
                                </div>
                                <div class="col-4 d-flex flex-column justify-content-center align-items-center">
                                    <h5>Ортодонтический</h5>
                                    <img src="./../../assets/images/modals/ortodonticRig.png" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-container-footer">
                        <!--<button class="btn_link bg-blue rounded">
                            Сохранить <icon name="angle-double-right" class="ml-1"></icon>
                        </button>-->
                        <button class="btn_link bg-blue-o rounded">
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
	name: 'modal', 
	data() {  
		return {
			
		}
	},
	methods: {
		
	}
}
</script> 
<<style>
.rigChoose-box > div:hover{
    color: #282c96;
    cursor: pointer;
}
</style>
