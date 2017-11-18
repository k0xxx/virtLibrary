<template>
	<div id="fileDownload">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-8 col-lg-6">
                        <img src="./../../assets/images/file_download/downloadLogo.png" alt="" class="img-fluid download-logo mb-3">
                        <ul class="downloadBlock w-100">
                            <li class="downloadBlock-item mb-2" v-for="(file, index) in download_list" :key="index">
                                <a :href="file.url" v-bind:download="file.title">
                                    <div class="fileIcon" v-bind:class="file.type"></div>
                                    <div class="downloadBlock-item-info">
                                        <span class="download-title">{{ file.title }}</span>
                                        <span class="download-fileInfo">{{ file.size | formatBytes }} Download</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { baseAPI } from '../../config.js';
export default{
    name: 'fileDownload',
    data() {
		return {
            downloadType: this.$route.params.type,
			downloadSet: this.$route.params.set,
			endpoint: baseAPI + 'file_download/',
			download_list: [],
		}
	},
	methods: {
		getDownloads() {
			this.$http.get(this.endpoint + this.downloadType + '/' +this.downloadSet).then((response) => {
                console.log(response);
				if (response.data.download_list.length) {
					this.download_list = this.download_list.concat(response.data.download_list);
				} else {
					console.log('No more data in downloads');
				}
		    });
		},
    },
    filters: {
        formatBytes: function (bytes) {
            if(bytes == 0) return '0 Bytes';
            var k = 1024,
                dm = 2,
                sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
    },
	created: function(){
		this.getDownloads();
    }
}  
</script>
<style>
#fileDownload{
    width: 100%;
    background-image: url(./../../assets/images/file_download/downloadBg.png);
    position: fixed;
    background-size: cover;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    padding-top: 5rem;
}
#fileDownload .download-logo{
    height: 70px;
}
#fileDownload .downloadBlock .downloadBlock-item a{
    display: flex;
    background: #fff;
    padding: 0.5rem 1rem;
    border: 2px solid #817F7E;
    border-radius: 0.75em;
}
#fileDownload .downloadBlock .downloadBlock-item a:hover{
    background: #eee;
}
#fileDownload .downloadBlock .downloadBlock-item .fileIcon{
    display: block;
    position: relative;
    width: 57px;
    height: 68px;
    margin-right: 1rem;
    background-size: cover;
}
#fileDownload .downloadBlock .downloadBlock-item .fileIcon:after{
    display: none;
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: -5px;
    right: -10px;
    background-size: cover;
}
#fileDownload .downloadBlock .downloadBlock-item:hover .fileIcon:after{
    display: block;
}

#fileDownload .downloadBlock .downloadBlock-item .fileIcon.stl{
    background-image: url(./../../assets/images/file_download/downloadIcon_stl.png);
}
#fileDownload .downloadBlock .downloadBlock-item .fileIcon.stl:after{
    background-image: url(./../../assets/images/file_download/download_stl.png);
}

#fileDownload .downloadBlock .downloadBlock-item .fileIcon.rar{
    background-image: url(./../../assets/images/file_download/downloadIcon_rar.png);
}
#fileDownload .downloadBlock .downloadBlock-item .fileIcon.rar:after{
    background-image: url(./../../assets/images/file_download/download_rar.png);
}

#fileDownload .downloadBlock .downloadBlock-item .fileIcon.zip{
    background-image: url(./../../assets/images/file_download/downloadIcon_zip.png);
}
#fileDownload .downloadBlock .downloadBlock-item .fileIcon.zip:after{
    background-image: url(./../../assets/images/file_download/download_zip.png);
}

#fileDownload .downloadBlock .downloadBlock-item .fileIcon.pptx{
    background-image: url(./../../assets/images/file_download/downloadIcon_pptx.png);
}
#fileDownload .downloadBlock .downloadBlock-item .fileIcon.pptx:after{
    background-image: url(./../../assets/images/file_download/download_pptx.png);
}

#fileDownload .downloadBlock .downloadBlock-item .fileIcon.psd{
    background-image: url(./../../assets/images/file_download/downloadIcon_psd.png);
}
#fileDownload .downloadBlock .downloadBlock-item .fileIcon.psd:after{
    background-image: url(./../../assets/images/file_download/download_psd.png);
}

#fileDownload .downloadBlock .downloadBlock-item .fileIcon.jpg{
    background-image: url(./../../assets/images/file_download/downloadIcon_jpg.png);
}
#fileDownload .downloadBlock .downloadBlock-item .fileIcon.jpg:after{
    background-image: url(./../../assets/images/file_download/download_jpg.png);
}

#fileDownload .downloadBlock .downloadBlock-item .fileIcon.png{
    background-image: url(./../../assets/images/file_download/downloadIcon_png.png);
}
#fileDownload .downloadBlock .downloadBlock-item .fileIcon.png:after{
    background-image: url(./../../assets/images/file_download/download_png.png);
}

#fileDownload .downloadBlock .downloadBlock-item .downloadBlock-item-info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.25rem 0;
}
#fileDownload .downloadBlock .downloadBlock-item .downloadBlock-item-info .download-title{
    color: #5B5753;
    font-weight: bold;
}
#fileDownload .downloadBlock .downloadBlock-item .downloadBlock-item-info .download-fileInfo{
    color: #817F7E;
}
</style>