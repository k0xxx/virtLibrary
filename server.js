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

app.route('/api/demo_models')
	.get(function(req, res){
		let demo_models_list = [
			{name: 'Демо модель 1', set: 'test1'},
			{name: 'Демо модель 2', set: 'test2'},
			{name: 'Демо модель 3', set: 'test3'},
			{name: 'Демо модель 4', set: 'test4'},
		];
		res.json({demo_models_list: demo_models_list});
	})

app.route('/api/3dViewer/demoModels/:set')
	.get(function(req, res){
		let base = 'http://localhost:3900/static/dist/';
		let demoStyles = {
			'test1': [
				{name: 'up12', url: base + 'models/31.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'lo2w', url: base + 'models/32.stl', options: {material: 'enamel', parent: 'Зубы'}},
			]
		}
		var query = demoStyles[req.params.set];
		res.json({style_3d: query, isMaterialParams: false});
	});

app.route('/api/file_download/:type/:set')
	.get(function(req, res){
		let base = 'http://localhost:3900/static/dist/';
		let downloads = {
			'1.0': [
				{title: 'up12', type: 'stl', url: base + 'models/31.stl', size: '25Mb'},
				{title: 'up13', type: 'stl', url: base + 'models/32.stl', size: '25Mb'},
			]
		}
		var query = downloads[req.params.set];
		res.json({download_list: query});
	});

app.route('/api/3dViewer/:type/:set')
	.get(function(req, res){
		let base = 'http://localhost:3900/static/dist/';
		let styles_3d = {
			'1.0': [
				{name: 'up12', url: base + 'models/31.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'lo2w', url: base + 'models/32.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'l31ow', url: base + 'models/33.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'lo4w', url: base + 'models/34.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'l5o2w', url: base + 'models/35.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'lo6w', url: base + 'models/36.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'l7o3w', url: base + 'models/37.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'l84ow', url: base + 'models/41_1.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'l95ow', url: base + 'models/42_1.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'lo0w', url: base + 'models/43_1.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'l1ow', url: base + 'models/44_1.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'l2ow', url: base + 'models/45_1.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'l3ow', url: base + 'models/46_1.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'l4ow', url: base + 'models/47_1.stl', options: {material: 'enamel', parent: 'Зубы'}},
				{name: 'Мост', url: base + 'models/bridge.stl', options: {material: 'enamel'}},
				{name: 'l5ow', url: base + 'models/abat11.stl', options: {material: 'steel', parent: 'Железо'}},
				{name: 'l6ow', url: base + 'models/abat14.stl', options: {material: 'steel', parent: 'Железо'}},
				{name: 'l7ow', url: base + 'models/abat16.stl', options: {material: 'steel', parent: 'Железо'}},
				{name: 'l8ow', url: base + 'models/abat21.stl', options: {material: 'steel', parent: 'Железо'}},
				{name: 'l9ow', url: base + 'models/abat24.stl', options: {material: 'steel', parent: 'Железо'}},
				{name: 'l0ow', url: base + 'models/abat26.stl', options: {material: 'steel', parent: 'Железо'}},
				{name: 'low2', url: base + 'models/imol_16.stl', options: {material: 'steel', parent: 'Импланты'}},
				{name: 'low3', url: base + 'models/impl14.stl', options: {material: 'steel', parent: 'Импланты'}},
				{name: 'low4', url: base + 'models/impl26.stl', options: {material: 'steel', parent: 'Импланты'}},
				{name: 'low5', url: base + 'models/impl_21.stl', options: {material: 'steel', parent: 'Импланты'}},
				{name: 'low6', url: base + 'models/impl__11.stl', options: {material: 'steel', parent: 'Импланты'}},
				{name: 'low7', url: base + 'models/impl__24.stl', options: {material: 'steel', parent: 'Импланты'}},
				{name: 'Десна', url: base + 'models/gum.stl', options: {material: 'gum'}},
				{name: 'Нижняя челюсть', url: base + 'models/Mandibulary.stl', options: {material: 'bone', opacity: 75}},
				{name: 'Череп', url: base + 'models/skull_mesh.stl', options: {material: 'bone', opacity: 45}},
			],
		};
		var query = styles_3d[req.params.set];
		res.json({style_3d: query, isMaterialParams: false});
	})

//viewusion
app.route('/api/viewusion/surgery') //surgery orthopedics terapy orthodontics
	.get(function(req, res){
		let query = [
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
				{id: '1', title: 'stl', preview: 'http://localhost:3900/static/dist/images/surgery_and_implantation_logo.png'},
			]
		res.json({category_items: query});
	});


app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, './dist/index.html'));
})

var server = http.createServer(app);

// Старт сервера на порту
server.listen(3900, function(){
	console.log('Server running on port: 3900');
});