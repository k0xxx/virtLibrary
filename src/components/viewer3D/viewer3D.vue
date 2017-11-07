<template>
	<div id="viewer3D">
		<div id="controls">
			<div class="container-fluid">
				<div class="row listFilesDiv">
					<div class="col-3">
						<a href="/" class="viewerLogo">
							<img src="../../assets/images/3dViewer/stl_viewer_logo.png" class="img-fluid" alt="">
							Просмотр STL файлов
						</a>    
					</div>
					<div class="col-8 text-right">
						<a href="#" v-on:click="toogleControls">Список файлов</a>
						<ul id="stlFilesList" v-bind:class="{ show : controlList }">
							<li class="stlFileItem">
								<div class="stlFileControls">
									<a href="#" class="opacity_100"></a>
									<a href="#" class="opacity_50"></a>
									<a href="#" class="opacity_0"></a>
								</div>
								<span>asd</span>
								<div class="stlFilesColor">
									<a href="#"></a>
									<a href="#"></a>
									<a href="#"></a>
									<a href="#"></a>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-1">
						<a href="/#demoModels">
							<img src="../../assets/images/3dViewer/stl_viewer_close.png" class="img-fluid" alt="">
						</a>
					</div>
				</div>
			</div>
		</div>
		<div id="rendererContainer" ref="rendererContainer">
			<div id="dentalLoader" class="loader" v-if="loadingIcon">
				<div class="dentalBotLoader">
					<div class="dentalBotLoader-loader"></div>
					<img src="../../assets/images/3dViewer/bot_loader.png" class="dentalBotLoader-image" alt="colleagial loader">
				</div>
			</div>
		</div>
    </div>
</template>
<script>
//import { baseAPI } from '../../config.js';
var isWebglEnabled = require('detector-webgl');

var THREE = require('three');
var TrackballControls = require('three-trackballcontrols');
var STLLoader = require('three-stl-loader')(THREE)

export default{
	name: 'viewer3D',
	data() {
		return {
			loadingIcon: false,
			scene: null,
			camera: null,
			controls: null,
			directionalLight: null,
			renderer: null,
			rendererContainer: null,
			mainGroup: null,
			centerPoint: {
				x: 0, y: 0, z: 0, xArray: [], yArray: [], zArray: []
			},
			
			controlList: false,
			stlFiles: [
				{name: 'up12', url: 'models/31.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'lo2w', url: 'models/32.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l3ow', url: 'models/33.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'lo4w', url: 'models/34.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l5ow', url: 'models/35.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'lo6w', url: 'models/36.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l7ow', url: 'models/37.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l8ow', url: 'models/41_1.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l9ow', url: 'models/42_1.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'lo0w', url: 'models/43_1.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l1ow', url: 'models/44_1.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l2ow', url: 'models/45_1.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l3ow', url: 'models/46_1.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l4ow', url: 'models/47_1.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},

				{name: 'l5ow', url: 'models/abat11.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l6ow', url: 'models/abat14.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l7ow', url: 'models/abat16.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l8ow', url: 'models/abat21.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l9ow', url: 'models/abat24.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'l0ow', url: 'models/abat26.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				{name: 'low1', url: 'models/bridge.stl', options: {material: 'phong', color: '#fefefe', specular: '#111111', shininess: '30'}},
				
				{name: 'low2', url: 'models/imol_16.stl', options: {material: 'phong', color: '#dcdcdc', specular: '#111111', shininess: '30'}},
				{name: 'low3', url: 'models/impl14.stl', options: {material: 'phong', color: '#dcdcdc', specular: '#111111', shininess: '30'}},
				{name: 'low4', url: 'models/impl26.stl', options: {material: 'phong', color: '#dcdcdc', specular: '#111111', shininess: '30'}},
				{name: 'low5', url: 'models/impl_21.stl', options: {material: 'phong', color: '#dcdcdc', specular: '#111111', shininess: '30'}},
				{name: 'low6', url: 'models/impl__11.stl', options: {material: 'phong', color: '#dcdcdc', specular: '#111111', shininess: '30'}},
				{name: 'low7', url: 'models/impl__24.stl', options: {material: 'phong', color: '#dcdcdc', specular: '#111111', shininess: '30'}},
				
				{name: 'low8', url: 'models/gum.stl', options: {material: 'phong', color: '#ffa8b7', specular: '#111111', shininess: '30'}},

				{name: 'low9', url: 'models/Mandibulary.stl', options: {material: 'phong', color: '#dcdcdc', specular: '#111111', shininess: 50}},
				{name: 'low0', url: 'models/skull_mesh.stl', options: {material: 'phong', color: '#efecd8', specular: '#000000', shininess: 0}},
			],
		}
	},
	methods: {
		creareLoading(){
			var loadingManager = new THREE.LoadingManager();
			loadingManager.onProgress = this.onProgress();
			/*loadingManager.onProgress('asd', (geometry) => {
				console.log('hi');
			})*/
			/*loadingManager.onStart = function(){
				console.log('asd');
			}
			loadingManager.onProgress = function ( item, loaded, total ) {
				console.log(loadingManager);
				var progress = loaded / total;
				console.log(progress);
 				if(progress == 1){
					this.loadingIcon = false;
				}
			};
			console.log(loadingManager);*/
		},
		onProgress(item, loaded, total){
			console.log('onProgress');
			var progress = loaded / total;
				console.log(progress);
		},
		init(){
			this.creareLoading();
			this.scene = new THREE.Scene();
			this.addCamera();
			//this.addAxes();
			this.addRenderer();
			this.addControls();
			this.addLight();
			this.addMainGroup();
			this.chekStlFiles();
			this.animate();
		},
		addCamera(){
			// Обьявление камеры
			this.camera = new THREE.PerspectiveCamera(45, this.rendererContainer.clientWidth / this.rendererContainer.clientHeight, 1, 1000);
			this.camera.position.set(-75, 75, 75);
			this.camera.lookAt(this.scene.position);
		},
		addAxes(){
			// Добавление осей координат (Опционально)
			var axes = new THREE.AxisHelper( 20 );
			this.scene.add(axes);
		},
		addRenderer(){
			// Обьявление области рендеринга
			this.renderer = new THREE.WebGLRenderer({ alpha: true });
			this.renderer.setSize( this.rendererContainer.clientWidth, this.rendererContainer.clientHeight );
			this.rendererContainer.appendChild( this.renderer.domElement );
			this.renderer.setClearColor(0x423C63, 0);
		},
		addControls(){
			// Добавление управления
			this.controls = new TrackballControls( this.camera, this.rendererContainer );
			console.log(this.controls);
			this.controls.rotateSpeed = 4.0;
			this.controls.zoomSpeed = 4.0;
			this.controls.panSpeed = 0.8;
			this.controls.noZoom = false;
			this.controls.noPan = false;
			this.controls.staticMoving = true;
			this.controls.dynamicDampingFactor = 0.3;
			//this.controls.keys = [ 65, 83, 68 ];
			this.controls.addEventListener( 'change', this.render );
		},
		addLight(){
			// Добавление источников света
			this.directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
			this.scene.add(this.directionalLight);
			let light = new THREE.AmbientLight( 0x282828 ); // soft white light
			this.scene.add( light );
		},
		addMainGroup(){
			// Добавление основной группы
			this.mainGroup = new THREE.Group();
			this.mainGroup.updateMatrixWorld(true);
			this.scene.add(this.mainGroup);
		},
		chekStlFiles(){
			// Проверка пред загруженных файлов
			if(this.stlFiles){
				for(var i=0; i<this.stlFiles.length; i++){
					this.addToMainMesh(this.stlFiles[i]);
				}
			}
		},
		addToMainMesh(stlFile){
			// Добавление файла в MainMesh
			const loader = new STLLoader();
			loader.load(stlFile.url, (geometry) => {
				console.log(geometry);
				geometry.computeBoundingSphere();
				
				//var material = new THREE.MeshLambertMaterial( { color: 0xff6600});
				//var material = new THREE.MeshPhongMaterial({color: 0xFF8243, specular: 0x111111, shininess: parseInt(stlFile.options.shininess), side:THREE.DoubleSide});
				//material.color.setStyle(stlFile.options.color);
				//material.specular.setStyle(stlFile.options.specular);
				var material = new THREE.MeshStandardMaterial({color: 0xeeeeee, roughness: 1, metalness: 1, side:THREE.DoubleSide});
/*{color: '#ffffff', roughness: 1, metalness: 1,
					roughnessMap: 1,
					metalnessMap: 1,
					envMap: 1,
					envMapIntensity: 1,
}*/
				var mesh = new THREE.Mesh(geometry, material);
				mesh.name = stlFile.name;
				mesh.castShadow = true;
				mesh.receiveShadow = true;
				
				this.mainGroup.add(mesh);

				this.render();
			});
		},
		calcCenter(){
			// Расчет центра всех моделей
			this.centerPoint = {x: 0, y: 0, z: 0, xArray: [], yArray: [], zArray: []};
			for(var i=0; i<this.mainGroup.children.length; i++){
				this.centerPoint.xArray.push(this.mainGroup.children[i].geometry.boundingSphere.center.x);
				this.centerPoint.yArray.push(this.mainGroup.children[i].geometry.boundingSphere.center.y);
				this.centerPoint.zArray.push(this.mainGroup.children[i].geometry.boundingSphere.center.z);
			}
			if(this.centerPoint.xArray.length){
				this.centerPoint.x = -[].reduce.call(this.centerPoint.xArray, function(p,c){return c+p;}) / this.centerPoint.xArray.length;
			}
			if(this.centerPoint.yArray.length){
				this.centerPoint.y = -[].reduce.call(this.centerPoint.yArray, function(p,c){return c+p;}) / this.centerPoint.yArray.length;
			}
			if(this.centerPoint.zArray.length){
				this.centerPoint.z = -[].reduce.call(this.centerPoint.zArray, function(p,c){return c+p;}) / this.centerPoint.zArray.length;
			}
			this.mainGroup.position.set( this.centerPoint.x, this.centerPoint.y, this.centerPoint.z );
		},
		render() {
			// Ререндеринг сцены
			this.renderer.render( this.scene, this.camera );
			this.directionalLight.position.copy( this.camera.position );
			this.calcCenter();
		},
		animate(){
			// Анимация сцены
			requestAnimationFrame( this.animate );
			this.renderer.render(this.scene, this.camera);
			this.controls.update();
		},
		resize(){
			if(this.camera && this.renderer) {
				this.camera.aspect = this.rendererContainer.clientWidth / this.rendererContainer.clientHeight;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize(this.rendererContainer.clientWidth, this.rendererContainer.clientHeight);
			}
		},
		toogleControls(){
			if(this.controlList){
				this.controlList = false;
			}else{
				this.controlList = true;
			}
		}
	},
	mounted () {
		this.rendererContainer = this.$refs.rendererContainer;
		if(!isWebglEnabled){
			console.log('webGL is not supported!');
		}
		this.init();
	},
	created: function(){
		window.addEventListener('resize', this.resize, false);
	}
}  
</script>
<style>
#controls{
    position: relative;
    background-color: #1d1018;
    height: 47px;
}
#controls .listFilesDiv > div > a{
    display: inline-block;
    padding: 0 15px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    line-height: 47px;
}

#stlFilesList{
    margin: 0;
    padding: 0;
    display: none;
    position: absolute;
    top: 45px;
    right: 0;
    left: auto;
    z-index: 1000;
    float: left;
    min-width: 12rem;
    margin: .125rem 0 0;
    padding: 0;
    font-size: 1rem;
    color: #292b2c;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
}
#stlFilesList.show{
    display: block;
}
#stlFilesList .stlFileItem {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid #ddd;
    line-height: 30px;
}
#stlFilesList .stlFileItem .stlFileControls{
    display: flex;
    flex-direction: row;
    margin-right: 0.25rem;
}
#stlFilesList .stlFileItem .stlFileControls a{
    content: '';
    display: block;
    width: 20px;
    height: 30px;
    background-size: cover;
    margin-right: 0.25rem;
}
#stlFilesList .stlFileItem .stlFileControls a.active{
    border-bottom: none !important;
}
#stlFilesList .stlFileItem .stlFileControls a.opacity_100{
    background-image: url('../../assets/images/3dViewer/zub-1.png');
}
#stlFilesList .stlFileItem .stlFileControls a.opacity_100.active{
    background-image: url('../../assets/images/3dViewer/zub-o-1.png');
}
#stlFilesList .stlFileItem .stlFileControls a.opacity_50{
    background-image: url('../../assets/images/3dViewer/zub-2.png');
}
#stlFilesList .stlFileItem .stlFileControls a.opacity_50.active{
    background-image: url('../../assets/images/3dViewer/zub-o-2.png');
}
#stlFilesList .stlFileItem .stlFileControls a.opacity_0{
    background-image: url('../../assets/images/3dViewer/zub-3.png');
}
#stlFilesList .stlFileItem .stlFileControls a.opacity_0.active{
    background-image: url('../../assets/images/3dViewer/zub-o-3.png');
}
#stlFilesList .stlFileItem .stlFilesColor{
    display: flex;
    align-items: center;
    margin-left: 5px;
}
#stlFilesList .stlFileItem .stlFilesColor a{
    display: inline-block;
    height: 15px;
    width: 15px;
    margin: 2px;
    cursor: pointer;
}
#stlFilesList .stlFileItem .stlFilesColor a.active{
    border: 2px solid #007bff;
}
#stlFilesList .stlFileItem .stlFilesColor a:nth-child(1) {
    background-color: #87CEFA;
}
#stlFilesList .stlFileItem .stlFilesColor a:nth-child(2) {
    background-color: #DB7093;
}
#stlFilesList .stlFileItem .stlFilesColor a:nth-child(3) {
    background-color: #7851A9;
}
#stlFilesList .stlFileItem .stlFilesColor a:nth-child(4) {
    background-color: #FF8243;
}


#rendererContainer{
    display: block;
    position: relative;
    width: 100%;
    height: calc(100vh - 111px);
}
#rendererContainer .loader{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
}

.dentalBotLoader{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.dentalBotLoader-loader {
    color: #34c924;
    font-size: 1.7rem;
    margin: auto;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: absolute;
    text-indent: -9999em;
    -webkit-animation: dentalBotLoaderAnim 1.3s infinite linear;
    animation: dentalBotLoaderAnim 1.3s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
@-webkit-keyframes dentalBotLoaderAnim {
    0%, 100% {box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;}
    12.5% {box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;}
    25% {box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;}
    37.5% {box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;}
    50% {box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;}
    62.5% {box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;}
    75% {box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;}
    87.5% {box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;}
}
@keyframes dentalBotLoaderAnim {
    0%, 100% {box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;}
    12.5% {box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;}
    25% {box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;}
    37.5% {box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;}
    50% {box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;}
    62.5% {box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;}
    75% {box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;}
    87.5% {box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;}
}



#rendererContainer canvas{
    background: rgb(176,174,196); /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover, rgba(176,174,196,1) 0%, rgba(66,60,99,1) 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover, rgba(176,174,196,1) 0%,rgba(66,60,99,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center, rgba(176,174,196,1) 0%,rgba(66,60,99,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b0aec4', endColorstr='#423c63',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>