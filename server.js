var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.use('/static/dist/', express.static(path.join(__dirname, '/dist')));

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/api/photo_bank')
	.get(function(req, res){
		let limit = 8;
		let start = (req.query.page * limit) - limit;
		let photosList = [
			{url: '/static/dist/demo_models/demoModel_1_original.png'},
			{url: '/static/dist/demo_models/demoModel_2_original.png'},
			{url: '/static/dist/demo_models/demoModel_3_original.png'},
			{url: '/static/dist/demo_models/demoModel_4_original.png'},
			{url: '/static/dist/demo_models/demoModel_5_original.png'},
			{url: '/static/dist/demo_models/demoModel_6_original.png'},
			{url: '/static/dist/demo_models/demoModel_7_original.png'},
			{url: '/static/dist/demo_models/demoModel_8_original.png'},
		];
		let query = photosList.slice(start, limit);
		res.json({photoBank_images: query});
	})

app.route('/api/3d_bank')
	.get(function(req, res){
		let limit = 8;
		let start = (req.query.page * limit) - limit;
		let list_3d = [
			{url: '/static/dist/demo_models/demoModel_1_original.png'},
			{url: '/static/dist/demo_models/demoModel_2_original.png'},
			{url: '/static/dist/demo_models/demoModel_3_original.png'},
			{url: '/static/dist/demo_models/demoModel_4_original.png'},
			{url: '/static/dist/demo_models/demoModel_5_original.png'},
			{url: '/static/dist/demo_models/demoModel_6_original.png'},
			{url: '/static/dist/demo_models/demoModel_7_original.png'},
			{url: '/static/dist/demo_models/demoModel_8_original.png'},
		];
		let query = list_3d.slice(start, limit);
		res.json({bank3d_items: query});
	})

app.route('/api/style_library/:item')
	.get(function(req, res){
		var styles = {
			'1.0': {
				title: '1.0',
                topBarImg: '/style_library/1.0/preview/top_bar_1.0.png',
                faceImg: '/style_library/1.0/preview/face_1.0.png',
                previewImg: '/style_library/1.0/preview/preview_1.0.jpg',
			},
			'1.1': {
				title: '1.1',
                topBarImg: '',
                faceImg: '',
                previewImg: '',
			},
			'1.2': {
				title: '1.2',
                topBarImg: '',
                faceImg: '',
                previewImg: '',
			}
		};
		var query = styles[req.params.item];
		res.json({style_item: query});
	})

app.route('/api/style_library')
	.get(function(req, res){
		let limit = 24;
		let start = (req.query.page * limit) - limit;
		let styles_list = [
			{name: '1.0', logo: '/style_library/1.0/preview/main_1.0.png'},
			{name: '1.1', logo: '/style_library/1.1.png'},
			{name: '1.2', logo: '/style_library/1.2.png'},
			{name: '1.3', logo: '/style_library/1.3.png'},
			{name: '1.4', logo: '/style_library/1.4.png'},
			{name: '2.0', logo: '/style_library/2.0.png'},
			{name: '2.1', logo: '/style_library/2.1.png'},
			{name: '2.2', logo: '/style_library/2.2.png'},
			{name: '3.0', logo: '/style_library/3.0.png'},
			{name: '3.1', logo: '/style_library/3.1.png'},
			{name: '3.2', logo: '/style_library/3.2.png'},
			{name: '3.3', logo: '/style_library/3.3.png'},
			{name: '4.0', logo: '/style_library/4.0.png'},
			{name: '4.1', logo: '/style_library/4.1.png'},
			{name: '4.2', logo: '/style_library/4.2.png'},
			{name: '5.0', logo: '/style_library/5.0.png'},
			{name: '5.1', logo: '/style_library/5.1.png'},
			{name: '5.2', logo: '/style_library/5.2.png'},
			{name: '5.3', logo: '/style_library/5.3.png'},
			{name: '5.4', logo: '/style_library/5.4.png'},
		];
		let query = styles_list.slice(start, limit);
		res.json({styles_list: query});
	})

app.route('/api/viewer_3D/:set')
	.get(function(req, res){
		let styles_3d = {
			'1.0': [
				{name: 'up12', url: 'models/31.stl', options: {material: 'enamel'}},
				{name: 'lo2w', url: 'models/32.stl', options: {material: 'enamel'}},
				{name: 'l3ow', url: 'models/33.stl', options: {material: 'enamel'}},
				{name: 'lo4w', url: 'models/34.stl', options: {material: 'enamel'}},
				{name: 'l5ow', url: 'models/35.stl', options: {material: 'enamel'}},
				{name: 'lo6w', url: 'models/36.stl', options: {material: 'enamel'}},
				{name: 'l7ow', url: 'models/37.stl', options: {material: 'enamel'}},
				{name: 'l8ow', url: 'models/41_1.stl', options: {material: 'enamel'}},
				{name: 'l9ow', url: 'models/42_1.stl', options: {material: 'enamel'}},
				{name: 'lo0w', url: 'models/43_1.stl', options: {material: 'enamel'}},
				{name: 'l1ow', url: 'models/44_1.stl', options: {material: 'enamel'}},
				{name: 'l2ow', url: 'models/45_1.stl', options: {material: 'enamel'}},
				{name: 'l3ow', url: 'models/46_1.stl', options: {material: 'enamel'}},
				{name: 'l4ow', url: 'models/47_1.stl', options: {material: 'enamel'}},
				{name: 'Мост', url: 'models/bridge.stl', options: {material: 'enamel'}},
				{name: 'l5ow', url: 'models/abat11.stl', options: {material: 'steel'}},
				{name: 'l6ow', url: 'models/abat14.stl', options: {material: 'steel'}},
				{name: 'l7ow', url: 'models/abat16.stl', options: {material: 'steel'}},
				{name: 'l8ow', url: 'models/abat21.stl', options: {material: 'steel'}},
				{name: 'l9ow', url: 'models/abat24.stl', options: {material: 'steel'}},
				{name: 'l0ow', url: 'models/abat26.stl', options: {material: 'steel'}},
				{name: 'low2', url: 'models/imol_16.stl', options: {material: 'steel'}},
				{name: 'low3', url: 'models/impl14.stl', options: {material: 'steel'}},
				{name: 'low4', url: 'models/impl26.stl', options: {material: 'steel'}},
				{name: 'low5', url: 'models/impl_21.stl', options: {material: 'steel'}},
				{name: 'low6', url: 'models/impl__11.stl', options: {material: 'steel'}},
				{name: 'low7', url: 'models/impl__24.stl', options: {material: 'steel'}},
				{name: 'Десна', url: 'models/gum.stl', options: {material: 'gum'}},
				{name: 'Нижняя челюсть', url: 'models/Mandibulary.stl', options: {material: 'bone', opacity: 75}},
				{name: 'Череп', url: 'models/skull_mesh.stl', options: {material: 'bone', opacity: 45}},
			],
		};
		var query = styles_3d[req.params.set];
		res.json({style_3d: query, isMaterialParams: false});
	})

app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, './dist/index.html'));
})

var server = http.createServer(app);

// Старт сервера на порту
server.listen(3900, function(){
	console.log('Server running on port: 3900');
});