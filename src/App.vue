<template>
    <div id="libraryApp">
        <libraryTopBar></libraryTopBar>
        <router-view></router-view>
    </div>
</template>   

<script>
import libraryTopBar from './components/libraryTopBar/libraryTopBar.vue' 
import library from './components/library/library.vue'
export default {
    name: 'app', 
    components: { libraryTopBar, library },
    data () {  
        return {
   
        }
    },
}
</script>

<style lang="scss" src="./assets/styles/main.scss"></style>