<template>
    <div id="viewerVR">
		<div class="controls">
			<div class="viewerVRlogo">
				<img src="./../../assets/images/viewerVRLogo.png" alt="">
			</div>
			<div class="viewerTitle" v-if="viewerTite">
				{{ viewerTite }}
			</div>
			<a href="#" class="viewerVRclose" v-on:click.prevent.stop="goBack">
				<icon name="close" scale="2"></icon>
			</a>
		</div>
		
        <div id="viewerVR-container" ref="vrContainer">
			<preloader :progress="isProgress"></preloader>
			<wattermark></wattermark>
			<img class="viewerVR-container-img" v-if="isLoaded" :src="currentSlide" v-bind:style="{transform: 'scale('+zoom.current+')'}">
			<!-- <div class="mooover" :style="{'top': nextActionY+'px', 'left': nextActionX+'px', width: minSwipeX*2+'px', height: minSwipeY*2+'px'}"></div> -->
		</div>
  </div>
</template>

<script>
import { baseAPI } from '../../config.js';
import preloader from './../preloader/preloader.vue'
import wattermark from './../wattermark/wattermark.vue'

export default {
    name: 'ViewerVR',
	components: { preloader, wattermark },
    data(){
        return {
			isLoaded: false,
			isProgress: 100,
			endpoint: baseAPI + 'viewer_vr/',
			VR: null,
			mousedown: false,
			dragStartX: 0,
			dragStartY: 0,
			nextActionX: 0,
			nextActionY: 0,
			prevActionX: 0, 
			prevActionY: 0,
			minSwipeX: 10,
			minSwipeY: 10,
			zoom: {
				min: 1,
				max: 1.7,
				switch: 0.2,
				current: 1,
			},
			
			viewerTite: '',
			viewerFolder: '',
			xCount: 0,
        	yCount: 0,
			
			slideX: 0,
			slideY: 0,
			
			prevSlide: '',
			
			imgArray: {},
			promiseArray: [],
			promiseArrayCount: 0,

			currentSlide: '0_0.jpg',

			mooveList: [],

			mouseScreenX: 0,
			mouseScreenY: 0,
        }
	},
	computed: {
		slideSrc(){
			return 'slide_' + this.slideY + '_' + this.slideX;
		},
	},
    methods: {	
		moover(){
			let src = this.viewerFolder + '0_0.jpg' 
			if(!this.prevSlide) { this.prevSlide = src }
			// console.log(this.slideSrc)
			if(this.imgArray[this.slideSrc]){
				src = this.imgArray[this.slideSrc].src;
				this.prevSlide = src;
			}else{
				src = this.prevSlide;
			}
			// console.log(src)
			this.currentSlide = src
		},
        init(){
			let arr = {}
			for(var y = 0; y<= this.yCount; y++){
				for(var x = 0; x <= this.xCount; x++){
					arr[y + '_' + x] = this.viewerFolder + y + '_' + x + '.jpg'
				}
			}
			
			Object.keys(arr).map((key, index) => {
				this.promiseArray.push(this.imgLoader(key, arr[key]))
			});

			this.isLoaded = true
			this.currentSlide = this.viewerFolder + '0_0.jpg'
			this.isProgress = 0
			this.promiseArrayCount = 0

			Promise.all(this.promiseArray).then(results => {
				//  this.isLoaded = true
			});
		},
		imgLoader(id, src){
			let promise = new Promise((resolve, reject) => {
				let img = new Image();
				img.src=src;
				img.onload = () =>{
					this.progressCounter(++this.promiseArrayCount); 
					this.imgArray['slide_'+id] = img
					resolve({key: id, img: img})
				};
				img.onerror=function(){ reject() };
			});
			return promise
		},
		progressCounter(count){
			this.isProgress = ((count / this.promiseArray.length) * 100).toFixed()
		},
		moveLeft(){
			if(this.slideX < this.xCount){
				this.slideX++
			}else if(this.slideX == this.xCount){
				this.slideX = 0
			}
		},
		moveRight(){
			if(this.slideX > 0){
				this.slideX--
			}else if(this.slideX == 0){
				this.slideX = this.xCount
			}
		},
		moveDown(){
			if(this.slideY < this.yCount){
				this.slideY++
			}
		},
		moveUp(){
			if(this.slideY > 0){
				this.slideY--
			}
		},
		handleMousedown(e){
			if (!e.touches) { e.preventDefault() }
			
			this.mousedown = true
			this.dragStartX = ("ontouchstart" in window) ? e.touches[0].clientX : e.clientX
			this.dragStartY = ("ontouchstart" in window) ? e.touches[0].clientY : e.clientY

			// console.log(this.dragStartX)
			// console.log(this.dragStartY)

			this.nextActionX = this.dragStartX - this.minSwipeX;
			this.backActionX = this.dragStartX + this.minSwipeX;

			this.nextActionY = this.dragStartY - this.minSwipeY;
			this.backActionY = this.dragStartY + this.minSwipeY;
        },
        handleMouseup(){
			this.mousedown = false
        },
        handleMousemove(e){
            if (!this.mousedown) {
                return
            }

			const eventPosX = ("ontouchstart" in window) ? e.touches[0].clientX : e.clientX
			const eventPosY = ("ontouchstart" in window) ? e.touches[0].clientY : e.clientY
			
			this.mouseScreenX = eventPosX
			this.mouseScreenY = eventPosY
			
			const deltaX = (this.dragStartX - eventPosX)
			const deltaY = (this.dragStartY - eventPosY)

			//console.log(eventPosX)
			//console.log(this.backActionX)

			if(eventPosX <= this.nextActionX){
				this.nextActionX = this.nextActionX - this.minSwipeX
				this.backActionX = this.backActionX - this.minSwipeX
				// console.log(this.nextActionX + '-' + eventPosX + '-' + this.backActionX)
				// console.log(this.nextActionY + '-' + eventPosY + '-' + this.backActionY)
				if(eventPosY <= this.nextActionY + ((this.minSwipeY*2) / 4)){
					// console.log('moove top-left')
					this.nextActionY = this.nextActionY - this.minSwipeY
					this.backActionY = this.backActionY - this.minSwipeY
					this.moveUp()
					this.moveLeft()
				}else if(eventPosY >= this.backActionY - ((this.minSwipeY*2) / 4)){
					// console.log('moove bottom-left')
					this.nextActionY = this.nextActionY + this.minSwipeY
					this.backActionY = this.backActionY + this.minSwipeY
					this.moveDown()
					this.moveLeft()
				}else{
					// console.log('moove left')
					this.moveLeft()
				}
			}else if(eventPosX >= this.backActionX){
				this.nextActionX = this.nextActionX + this.minSwipeX
				this.backActionX = this.backActionX + this.minSwipeX
				// console.log(this.nextActionX + '-' + eventPosX + '-' + this.backActionX)
				// console.log(this.nextActionY + '-' + eventPosY + '-' + this.backActionY)
				if(eventPosY <= this.nextActionY + ((this.minSwipeY*2) / 4)){
					// console.log('moove top-left')
					this.nextActionY = this.nextActionY - this.minSwipeY
					this.backActionY = this.backActionY - this.minSwipeY
					this.moveUp()
					this.moveRight()
				}else if(eventPosY >= this.backActionY - ((this.minSwipeY*2) / 4)){
					// console.log('moove bottom-left')
					this.nextActionY = this.nextActionY + this.minSwipeY
					this.backActionY = this.backActionY + this.minSwipeY
					this.moveDown()
					this.moveRight()
				}else{
					// console.log('moove right')
					this.moveRight()
				}
			}else if(eventPosY <= this.nextActionY){
				this.nextActionY = this.nextActionY - this.minSwipeY
				this.backActionY = this.backActionY - this.minSwipeY
				this.moveUp()
				//console.log(this.nextActionY + '-' + eventPosY + '-' + this.backActionY)
				// console.log('moveup')
			}else if(eventPosY >= this.backActionY){
				this.nextActionY = this.nextActionY + this.minSwipeY
				this.backActionY = this.backActionY + this.minSwipeY
				this.moveDown()
				// console.log(this.nextActionY + '-' + eventPosY + '-' + this.backActionY)
				// console.log('movedown')
			}

			this.moover()
		},
		handleWheel(e){
			e = e || window.event;
			e.preventDefault ? e.preventDefault() : (e.returnValue = false);
			
			if(Math.sign(e.deltaY) == 1){
				if(this.zoom.current > this.zoom.min){
					this.zoom.current = this.zoom.current - this.zoom.switch
				}
			}else{
				if(this.zoom.current <= this.zoom.max){
					this.zoom.current = this.zoom.current + this.zoom.switch
				}
			}
		},
		goBack(){
			this.$router.go(-1);
		},
		loadRemoteFiles(){
			this.$http.get(this.endpoint + this.$route.params.set).then((response) => {
				// console.log(response);
				if(response.data.title){
					this.viewerTite = response.data.title
				}
				if (response.data.folder) {
					this.viewerFolder = response.data.folder + '/'
					this.xCount = response.data.frames.x
					this.yCount = response.data.frames.y
					this.init();
				} else {
					// console.log(response.data);
				}
			});
		},
	},
	mounted(){
        if (!this.$isServer) {
            if ("ontouchstart" in window) {
                this.$refs.vrContainer.addEventListener("touchstart", this.handleMousedown)
                this.$refs.vrContainer.addEventListener("touchend", this.handleMouseup)
				this.$refs.vrContainer.addEventListener("touchmove", this.handleMousemove)
				this.$refs.vrContainer.addEventListener("wheel", this.handleWheel)
            } else {
                this.$refs.vrContainer.addEventListener("mousedown", this.handleMousedown)
                this.$refs.vrContainer.addEventListener("mouseup", this.handleMouseup)
				this.$refs.vrContainer.addEventListener("mousemove", this.handleMousemove)
				this.$refs.vrContainer.addEventListener("wheel", this.handleWheel)
            }
			setTimeout(() => {
				let scrollHeight = this.$refs.vrContainer.scrollHeight
				let elHeight = this.$refs.vrContainer.offsetHeight
				window.scrollTo(0, (scrollHeight - elHeight) / 2)
			}, 1000)
        }
    },
    destroyed() {
   
    },
    created(){
		this.loadRemoteFiles();
    }
}
</script>

<style lang="sass">
#viewerVR
	.controls
		display: flex
		position: fixed
		top: 45px
		left: 0
		right: 0
		align-items: center
		justify-content: space-between
		background-color: #12123d
		padding: 0 0.5rem
		height: 50px
		border-bottom: 2px solid #494a8f
		z-index: 9
		.viewerVRlogo
			display: flex
			align-items: center
			justify-content: center
			height: inherit
			img
				display: block
				height: 30px
		.viewerTitle
			color: #fff
			font-size: 1.2rem
		.viewerVRclose
			display: flex
			align-items: center
			justify-content: center
			height: inherit
			color: #fff

#viewerVR-container
	height: calc(100vh - 95px)
	// overflow-x: hidden
	margin-top: 95px
	position: relative
	.viewerVR-container-img
		display: block
		width: 100%
		// height: 100%
		object-fit: cover
	.mooover
		display: block
		position: fixed
		top: 20px
		left: 20px
		width: 40px
		height: 40px
		border: 1px solid transparent
</style>
