<template>
    <div id="libraryApp">
        <router-view name="topBar"></router-view>
        <router-view></router-view>
    </div>
</template>   

<script>
export default {
    name: 'app', 
    data () {  
        return {
   
        }
    },
}
</script>

<style lang="scss" src="./assets/styles/main.scss"></style>