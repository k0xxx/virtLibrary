<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-container-header">
                        <span>Регистрация</span>
                        <span>X</span>
                    </div>
                    <div class="modal-container-footer">
                        <button class="btn_link bg-blue rounded">
                            Сохранить >>
                        </button>
                    </div>
                    <!--<div id="closeModalRegister" class="d-flex" @click="$emit('close')">
                        <icon name="times" scale="1"></icon> 
                    </div>
                    <div class="modal-body-register p-100">
                        <div v-if="!register.isRegister">
                            <span>Пожалуйста, укажите Ваш<br>E-mail и пароль</span>
                            <form class="d-flex flex-column" v-on:submit.prevent="signup">
                                <div class="input-container"> 
                                    <label for="registerEmail" class="text-center text-w-bold">E-mail</label> 
                                    <input type="email" name="email" id="registerEmail" v-model="register.email" class="input-large" placeholder="Введите Ваш e-mail"> 
                                </div>
                                <div class="input-container">
                                    <label for="registerPassword" class="text-center text-w-bold">Пароль</label>
                                    <input type="password" name="password" id="registerPassword" v-model="register.password" class="input-large" placeholder="Введите Ваш пароль"> 
                                </div>
                                <button type="submit" class="btn-primary btn-xlarge mt-100">Зарегестрироваться</button>
                            </form>
                        </div>
                        <div v-else>
                            Вы зарегистрированы! Пожалуйста проверте свою почту для подтверждения регистрации!
                        </div>
                    </div>-->
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