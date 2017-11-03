import Vue from 'vue';
import VueRouter from 'vue-router';

import library from '../components/library/library.vue'
import demo_models from '../components/library/demo_models.vue'
import style_library from '../components/library/style_library.vue'
import style_library_item from '../components/library/style_library_item.vue'
import photo_bank from '../components/library/photo_bank.vue'
import bank_3d from '../components/library/bank_3d.vue'

import viewer3D from '../components/viewer3D/viewer3D.vue'

Vue.use(VueRouter);

var router =  new VueRouter({
	mode: 'history', 
	routes: [
		{path: '/viewer_3D', name: 'viewer3D', component: viewer3D},
		{path: '/library', name: 'library', component: library},
		{path: '/library/demo_models', name: 'demo_models', component: demo_models},
		{path: '/library/style_library', name: 'style_library', component: style_library},
		{path: '/library/style_library/:styleId', name: 'style_library_item', component: style_library_item},
		{path: '/library/photo_bank', name: 'photo_bank', component: photo_bank},
		{path: '/library/bank_3d', name: 'bank_3d', component: bank_3d},
		{path: '/', component: library},
	]
});

export default router;