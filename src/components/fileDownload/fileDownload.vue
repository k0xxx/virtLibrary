<template>
	<div id="fileDownload">
        <div class="container-fluid">
            <div class="row">
                <div class="downloadBlock col-12 d-flex flex-column align-items-center justify-content-center">
                        <img src="./../../assets/images/LogoHeader.png" alt="" class="img-fluid mb-3">
                        <ul class="col-8">
                            <li class="downloadBlock-item mb-2" v-for="(file, index) in download_list" :key="index">
                                <a :href="file.url">
                                    <img src="./../../assets/images/file_download/downloadIcon_stl.png" class="img-fluid mr-3" alt="">
                                    <div class="downloadBlock-item-info">
                                        <span class="download-title">{{ file.title }}</span>
                                        <span class="download-fileInfo">{{ file.size }} Download</span>
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
	created: function(){
		this.getDownloads();
    }
}  
</script>
<style>
#fileDownload{
    width: 100%;
    height: calc(100vh - 50px);
}
#fileDownload .downloadBlock{
    background-image: url(./../../assets/images/file_download/downloadBg.png);
    background-size: cover;
    min-height: calc(100vh - 50px);
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