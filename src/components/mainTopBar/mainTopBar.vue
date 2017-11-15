<template>
	<div id="mainTopBar">
		<div class="container-fluid">
            <div class="row mainTopBar-items">
                <div class="col"><img src="./../../assets/images/LogoHeader.png" class="headerLogo img-fluid" alt="Colleagial logo"></div>

            </div>
        </div>
	</div>
</template>
<script>
//import { baseAPI } from '../../config.js';
export default{
	name: 'mainTopBar',
	data() {
		return {
            
		}
	},
	//components: {newMessageModal},
	//props: ['contact', 'contactStatus', 'isSubscribe'],
	
}  
</script>
<style>
#mainTopBar{
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    background-color: #2e2f2e;
    z-index: 1001;
    border-bottom: 1px solid #444444;
}
#mainTopBar .mainTopBar-items{
    padding: 8px 0;
}
#mainTopBar .headerLogo{
    height: 28px;
}
</style>