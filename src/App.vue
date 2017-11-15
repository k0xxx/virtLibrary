<template>
    <div id="libraryApp">
        <mainTopBar></mainTopBar>
        <router-view name="topBar"></router-view>
        <router-view></router-view>
    </div>
</template>   

<script>
import mainTopBar from './components/mainTopBar/mainTopBar.vue'
export default {
    name: 'app', 
    data () {  
        return {
   
        }
    },
    components: {mainTopBar},
}
</script>

<style lang="scss" src="./assets/styles/main.scss"></style>