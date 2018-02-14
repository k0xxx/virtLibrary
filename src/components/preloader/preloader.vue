<template>
    <transition name="preloaderFade">
        <div class="preloader" v-if="progress != 100">
            <img src="./../../assets/images/preloader.png" class="preloaderImg" alt="">
            <span class="preloaderTotal">{{ progress }}%</span>
            <img src="./../../assets/images/preloaderSpiner.png" class="preloaderSpiner" alt="">
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Preloader',
    props: {
        progress: {
            type: [String, Number],
            default: 100
        },
    }
}
</script>


<style lang="sass">
.preloaderFade-enter-active, .preloaderFade-leave-active
    transition: opacity .5s
.preloaderFade-enter, .preloaderFade-leave-to
    opacity: 0
.preloader
    display: block
    position: fixed
    top: 50
    left: 0
    z-index: 999
    padding: 45px
    .preloaderImg
        display: block
        width: 110px
        height: 110px
    .preloaderTotal
        display: block
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        color: #fff
        font-size: 1.2rem
        transition: all 0.5s
    .preloaderSpiner
        display: block
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        width: 100%
        height: 100%
        object-fit: cover
        animation: round 1.7s infinite linear
        @keyframes round
            0%
                transform: rotate(0deg)
            100%
                transform: rotate(-360deg)
</style>
