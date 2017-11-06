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

app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, './dist/index.html'));
})

var server = http.createServer(app);

// Старт сервера на порту
server.listen(3900, function(){
	console.log('Server running on port: 3900');
});