import Vue from 'vue';
import VueRouter from 'vue-router';

import libraryTopBar from '../components/libraryTopBar/libraryTopBar.vue'

import library from '../components/library/library.vue'
import demoModels from '../components/demoModels/demoModels.vue'
import styleLibrary from '../components/styleLibrary/styleLibrary.vue'
import styleLibrary_item from '../components/styleLibrary/styleLibrary_item.vue'
import photoBank from '../components/photoBank/photoBank.vue'
import bank3d from '../components/bank3d/bank3d.vue'
import fileDownload from './../components/fileDownload/fileDownload.vue'
import viewusionTopBar from './../components/viewusionTopBar/viewusionTopBar.vue'
import viewusion from './../components/viewusion/viewusion.vue'
import viewusion_categories from './../components/viewusion/category_all.vue'
import viewusion_surgery from './../components/viewusion/category_surgery.vue'
import viewusion_orthodontics from './../components/viewusion/category_orthodontics.vue'
import viewusion_orthopedics from './../components/viewusion/category_orthopedics.vue'
import viewusion_terapy from './../components/viewusion/category_terapy.vue'

import viewer3D from '../components/viewer3D/viewer3D.vue'
import viewerVR from '../components/viewerVR/viewerVR.vue'

Vue.use(VueRouter);

var router =  new VueRouter({
	mode: 'history', 
	routes: [
		//{path: '/profile', name: 'profile'},
		{path: '/viewusion', components: {default: viewusion, topBar: viewusionTopBar},
			children: [
				{path: '/', name: 'viewusion', component: viewusion_categories},
				{path: 'surgery', name: 'surgery', component: viewusion_surgery},
				{path: 'orthodontics', name: 'orthodontics', component: viewusion_orthodontics},
				{path: 'orthopedics', name: 'orthopedics', component: viewusion_orthopedics},
				{path: 'terapy', name: 'terapy', component: viewusion_terapy},
			]
		},
		{path: '/file_download/:type/:set', name: 'fileDownload', components: {default: fileDownload}},
		{path: '/viewer_3D/:category/:set', name: 'viewer3Dset', components: {default: viewer3D}},
		{path: '/viewer_3D', name: 'viewer3D', components: {default: viewer3D}},
		{path: '/viewer_VR/:category/:set/', name: 'viewerVRset', components: {default: viewerVR}},
		{path: '/viewer_VR', name: 'viewerVR', components: {default: viewerVR}},
		{path: '/library', name: 'library', components: {default: library, topBar: libraryTopBar}},
		{path: '/library/demo_models', name: 'demoModels', components: {default: demoModels, topBar: libraryTopBar}},
		{path: '/library/style_library/:styleName', name: 'styleLibrary_item', components: {default: styleLibrary_item, topBar: libraryTopBar}},
		{path: '/library/style_library', name: 'styleLibrary', components: {default: styleLibrary, topBar: libraryTopBar}},
		{path: '/library/photo_bank', name: 'photoBank', components: {default: photoBank, topBar: libraryTopBar}},
		{path: '/library/3d_bank', name: 'bank3d', components: {default: bank3d, topBar: libraryTopBar}},
		{path: '/', components: {default: library, topBar: libraryTopBar}},
	]
});

export default router;