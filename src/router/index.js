import Vue from 'vue';
import VueRouter from 'vue-router';

import library from '../components/library/library.vue'
import demoModels from '../components/demoModels/demoModels.vue'
import styleLibrary from '../components/styleLibrary/styleLibrary.vue'
import styleLibrary_item from '../components/styleLibrary/styleLibrary_item.vue'
import photoBank from '../components/photoBank/photoBank.vue'
import bank3d from '../components/bank3d/bank3d.vue'

import viewer3D from '../components/viewer3D/viewer3D.vue'

Vue.use(VueRouter);

var router =  new VueRouter({
	mode: 'history', 
	routes: [
		{path: '/profile', name: 'profile'},
		{path: '/viewer_3D', name: 'viewer3D', component: viewer3D},
		{path: '/library', name: 'library', component: library},
		{path: '/library/demo_models', name: 'demoModels', component: demoModels},
		{path: '/library/style_library/:styleName', name: 'styleLibrary_item', component: styleLibrary_item},
		{path: '/library/style_library', name: 'styleLibrary', component: styleLibrary},
		{path: '/library/photo_bank', name: 'photoBank', component: photoBank},
		{path: '/library/3d_bank', name: 'bank3d', component: bank3d},
		{path: '/', component: library},
	]
});

export default router;