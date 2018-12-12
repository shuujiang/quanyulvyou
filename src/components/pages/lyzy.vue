<template>
    <div class="pageBox">
        <Left></Left>
        <Right></Right>
        <ul>
            <li v-for="(item, i) in list" :key="i"></li>
        </ul>
        <div class="tankuang" v-show="show">
            <div class="lvkuang">
                <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 287.5 37.2" style="enable-background:new 0 0 287.5 37.2;" xml:space="preserve">
                    <g :style="{'fill': color}">
                        <rect x="12.7" y="11.6" class="st0" width="2.9" height="10.9" />
                        <rect x="271.9" y="11.6" class="st0" width="2.9" height="10.9" />
                        <rect x="12.8" y="11.8" class="st0" width="262" height="2.9" />
                    </g>
                </svg>
            </div>
            <div class="contBox">
                <p class="TKtitle"  :style="{'color': color}">{{obj.title}}</p>
                <div class="dizhi">
                    <span>地址：</span>
                    <span>{{obj.dizhi}}</span>
                </div>
                <div class="img"></div>
            </div>
            <div class="lvrote">
                <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 287.5 37.2" style="enable-background:new 0 0 287.5 37.2;" xml:space="preserve">
                    <g :style="{'fill': color}">
                        <rect x="12.7" y="11.6" class="st0" width="2.9" height="10.9" />
                        <rect x="271.9" y="11.6" class="st0" width="2.9" height="10.9" />
                        <rect x="12.8" y="11.8" class="st0" width="262" height="2.9" />
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
// import { copyAndClear } from '../../assets/common/js/copyAndClear.js'
import Left from './lyzy/left'
import Right from './lyzy/right'
export default {
    data(){
        return{
            show: false, 
            obj: '',
            color: '',
            list: [
				{
					name:'景点',
					type:0
				},
				{
					name:'饭店',
					type:1
				},
				{
					name:'餐馆',
					type:2
				},
				{
					name:'购物场所',
					type:3
				},
				{
					name:'星级农家乐',
					type:4
				},
				{
					name:'乡村旅游',
					type:5
				}
			]
        }
    },
    components:{
        Left,
        Right
    },
    computed: {
        ...mapState({
            viewer: state => state.viewer,
            pickId: state => state.pickId,
            clickType: state => state.clickType,
        })
    },
    watch:{
        viewer(){
            console.log(this.viewer, 66)
            this.clickFun()
        },
        clickType(){
            if(this.clickType){
                let pickId = this.pickId
                this.show = true
                console.log(pickId, 97)
                this.$store.commit('clickTypeFun', false)
                this.$store.commit('pickIdFun', '')
            }   
        },
        // pickId(){
        //     if(this.clickType){
        //         let pickId = this.pickId
        //         this.show = true
        //         console.log(pickId, 97)
        //         this.$store.commit('clickTypeFun', false)
        //         this.$store.commit('pickIdFun', '')
        //     } 
        // }
    },
    mounted(){
        console.log(this.viewer, 666)
        if(this.viewer !=''){
            this.clickFun()
            
        }
    },
    methods:{
        clickFun(){
            let _this = this
            
			this.$axios.get('./static/json/lyzy.json').then(res=>{
                let data = res.data
                // this.list = data
				console.log(data, 57)

				this.addPointFun2(data,
				[
					'./static/img/lyzy/mapIcon/jd1.png',
					'./static/img/lyzy/mapIcon/xjjd1.png',
					'./static/img/lyzy/mapIcon/cy1.png',
					'./static/img/lyzy/mapIcon/gw1.png',
					'./static/img/lyzy/mapIcon/yl1.png',
					'./static/img/lyzy/mapIcon/cs1.png',
					'./static/img/lyzy/mapIcon/jk1.png'
                ])
			})
        },
        //打点方法二
		addPointFun2(data, imgarr, x = 255, y = 0, z = 0, size = 50, speed = 4000){
			data.forEach(obj => {
				let xiangmubiaohao = obj.项目编号;
				let str = obj.地图坐标;
				let text = "";
				if (str != "") {
					let jnData = str.split(/[\n,]/g);
					let jnTran = this.tranCoor(parseFloat(jnData[0]), parseFloat(jnData[1])); 
					let imgurl = imgarr[obj.type]
					this.offsetByDistance(jnTran, xiangmubiaohao, text, imgurl);
				}
			});
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
    },
    beforeDestroy(){
        this.$store.commit('clearMap', 3)
    }
}
</script>
<style lang="stylus" scoped>
.tankuang
    width 260px
    height 270px
    z-index 10
    position absolute
    top 100px
    left 50%
    display flex
    justify-content center
    align-items cebter 
    flex-wrap wrap
    .lvkuang
        width 100%
        height 5%
    .lvrote
        width 100%
        height 5%
        transform rotate(-180deg)
    .contBox
        width 80%
        height 80%
        background-color rgba(0,12,32,0.7)
</style>