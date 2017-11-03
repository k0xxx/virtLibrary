<template>
	<div id="viewer3D">
        <div class="viewerPanel">

		</div>
		<div id="rendererContainer" ref="rendererContainer"></div>
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
			scene: null,
			camera: null,
			controls: null,
			directionalLight: null,
			renderer: null,
			rendererContainer: null,
			mainGroup: null,
			stlFiles: [
				{name: 'up', url: 'models/Untitled_KJYjLvT.stl'},
				{name: 'low', url: 'models/Maxillary_oAXQjqt_WJP35eg.stl'},
			],
			centerPoint: {x: 0, y: 0, z: 0, xArray: [], yArray: [], zArray: []}
		}
	},
	methods: {
		init(){
			this.scene = new THREE.Scene();
			
			//console.log(document.querySelector('#rendererContainer'));

			//this.rendererContainer = document.querySelector('#rendererContainer');
			//console.log(this.rendererContainer);
			// Обьявление камеры
			this.camera = new THREE.PerspectiveCamera(45, this.rendererContainer.clientWidth / this.rendererContainer.clientHeight, 1, 1000);
			this.camera.position.set(-75, 75, 75);
			this.camera.lookAt(this.scene.position);
	
			// Добавление осей координат (Опционально)
			var axes = new THREE.AxisHelper( 20 );
			this.scene.add(axes);

			this.renderer = new THREE.WebGLRenderer({ alpha: true });
			this.renderer.setSize( this.rendererContainer.clientWidth, this.rendererContainer.clientHeight );
			this.rendererContainer.appendChild( this.renderer.domElement );
			this.renderer.setClearColor(0x423C63, 0);
	
			// Добавление управления
			/*controls = new THREE.OrbitControls( camera, renderer.domElement );
			controls.addEventListener( 'change', render );
			controls.enableZoom = true;*/
	
			this.controls = new TrackballControls( this.camera, this.rendererContainer );
			this.controls.rotateSpeed = 4.0;
			this.controls.zoomSpeed = 4.0;
			this.controls.panSpeed = 0.8;
			this.controls.noZoom = false;
			this.controls.noPan = false;
			this.controls.staticMoving = true;
			this.controls.dynamicDampingFactor = 0.3;
			//this.controls.keys = [ 65, 83, 68 ];
			this.controls.addEventListener( 'change', this.render );
			
			//Добавление источников света
			this.addLight();

			// Добавление основной группы
			this.mainGroup = new THREE.Group();
			this.mainGroup.updateMatrixWorld(true);
			this.scene.add(this.mainGroup);
	
			// Проверка пред загруженных файлов
			if(this.stlFiles){
				for(var i=0; i<this.stlFiles.length; i++){
					this.addToMainMesh(this.stlFiles[i]);
				}
			}
		},
		addLight(){
			this.directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
			this.scene.add(this.directionalLight);

			var light = new THREE.AmbientLight( 0x282828 ); // soft white light
			this.scene.add( light );
		},
		// Добавление файла в MainMesh
		addToMainMesh(stlFile){
			var loader = new STLLoader();
			loader.load(stlFile.url, this.createNamedMesh(stlFile.name));
		},
		// Создание меша с именем
		createNamedMesh(meshName){
			console.log(this.mainGroup);
			return function(geometry) {
				console.log(geometry);
				
				geometry.computeBoundingSphere();

				var material = new THREE.MeshPhongMaterial({color: 0xFF8243, specular: 0x111111, shininess: 30});
				
				var mesh = new THREE.Mesh(geometry, material);

				console.log(this.mainGroup);

				this.mainGroup.add(mesh);

				mesh.name = meshName;
				mesh.castShadow = true;
				mesh.receiveShadow = true;
				
				/*var stlFilesList = document.getElementById('stlFilesList');
				var li = document.createElement('li');
				li.className = "stlFileItem";
				var editor = '<div class="stlFileControls">'
						+'		<a href="#" data-name="'+meshName+'" data-type="1" onclick="changeOpacity(this); return false;" class="opacity_1 active"></a>'
						+'		<a href="#" data-name="'+meshName+'" data-type="05" onclick="changeOpacity(this); return false;" class="opacity_0_5"></a>'
						+'		<a href="#" data-name="'+meshName+'" data-type="0" onclick="changeOpacity(this); return false;" class="opacity_0"></a>'
						+'	</div>'
						+'	<span class="text_on_dropdown">'+meshName+'</span>'
						+'	<a href="#" data-name="'+meshName+'" data-color="0xDB7093" onclick="changeColor(this)">Розовый</a>'
						+'	<a href="#" data-name="'+meshName+'" data-color="0xFF8243" onclick="changeColor(this)">Оранжевый</a>'
						+'	<a href="#" data-name="'+meshName+'" data-color="0x7851A9" onclick="changeColor(this)">Фиолетовый</a>'
						+'	<a href="#" data-name="'+meshName+'" onclick="deleteFile(this); return false;"><i class="fa fa-close ml-1"></i></a>';
				li.innerHTML = editor;
				stlFilesList.appendChild(li);*/

				this.render();
			};
		},
		// Ререндеринг сцены
		render() {
			this.renderer.render( this.scene, this.camera );
			this.directionalLight.position.copy( this.camera.position );
			//calcCenter();
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
		
	}
}  
</script>
<style>
#rendererContainer{
	width: 100%;
	height: 650px;
}
#rendererContainer canvas{
	background: rgb(176,174,196); /* Old browsers */
	background: -moz-radial-gradient(center, ellipse cover, rgba(176,174,196,1) 0%, rgba(66,60,99,1) 100%); /* FF3.6-15 */
	background: -webkit-radial-gradient(center, ellipse cover, rgba(176,174,196,1) 0%,rgba(66,60,99,1) 100%); /* Chrome10-25,Safari5.1-6 */
	background: radial-gradient(ellipse at center, rgba(176,174,196,1) 0%,rgba(66,60,99,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b0aec4', endColorstr='#423c63',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>