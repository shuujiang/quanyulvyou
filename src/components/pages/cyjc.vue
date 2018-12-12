<template>
    <div class="pageBox">
        <Left></Left>
        <!-- <Right></Right> -->
    </div>
</template>
<script>
import {mapState} from 'vuex'
// import { copyAndClear } from '../../assets/common/js/copyAndClear.js'
import Left from './cyjc/left'
import Right from './cyjc/right'
export default {
    components:{
        Left,
        Right
	},
	data(){
		return{
			typeList:[
				{
					name:"舒适",
					type:0,
					color:'##5bd87b'
				},
				{
					name:"适中",
					type:1,
					color:'#007aff'
				},
				{
					name:"拥挤",
					type:2,
					color:'#fe3a2a'
				}
			]
		}
	},
    computed: {
        ...mapState({
            viewer: state => state.viewer
        })
    },
    watch:{
        viewer(){
            console.log(this.viewer, 55)
            // this.clickFun()
        }
    },
    mounted(){
        console.log(this.viewer, 555)
        if(this.viewer !=''){
            // this.clickFun()
        }
    },
    methods:{
        clickFun(){
			this.$axios.get('./static/json/cyjc.json').then(res=>{
				let data = res.data
				this.addPointFun(data)
				// if(flag == 1){
					
				// }else if(flag == 2){
				// 	this.addPointFun2(data)
				// }
				
			})
        },
        tranCoor(x, y) { //坐标转换
			var m = coordtransform.bd09togcj02(x, y);
			var n = coordtransform.gcj02towgs84(m[0], m[1]);
			return n;
        },
        offsetByDistance(jnTran, xiangmubiaohao, text, imgurl, r = 255, g = 255, b = 255) {
			var image = new Image();
			let _this = this
			image.onload = _this.imageOnload(xiangmubiaohao,jnTran,image,text);
			image.src = imgurl;
        },
        imageOnload(xiangmubiaohao,jnTran,image,text){
			this.viewer.entities.add({
				id: xiangmubiaohao,
				position: Cesium.Cartesian3.fromDegrees(jnTran[0], jnTran[1], 0),
				billboard: {
					scale: 1,
					image: image,
					verticalOrigin: Cesium.VerticalOrigin.BOTTOM
				},
				label: {
					text: text,
					font: '16px sans-serif',
					backgroundColor: "rgba(0,0,0,0)",
					// backgroundColor:Cesium.Color.BLANK,
					// outlineWidth :3,
					// outlineColor :Cesium.Color.WHITE,
					showBackground: true,
					// font : '24px Helvetica',
					// fillColor : Cesium.Color.WHITE,
					outlineColor: Cesium.Color.WHITE,
					outlineWidth: 0.0,
					style: Cesium.LabelStyle.FILL,
					// style : Cesium.LabelStyle.FILL_AND_OUTLINE,
					fillColor: Cesium.Color.WHITE,
					horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
					pixelOffset: new Cesium.Cartesian2(0.0, -image.height + 17),
					scale: 1,
					sizeInMeters: true
				}	
			});
		},
    }
    
}
</script>
<style lang="stylus" scoped>

</style>
