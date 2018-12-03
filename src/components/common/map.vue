<template>
	<div>
		<div class="map" id="cesiumContainer"></div>
		<router-view/>
	</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	mounted(){
		Cesium.BingMapsApi.defaultKey = 'ArucOjRQCPXY7qrklhKLCkWG2M8JVDdSM8-1YcfjjJDDFHpNqwCiiTXo76-Sgjy4';
    	var viewer = new Cesium.Viewer('cesiumContainer', //创建地图实例
			{
				animation: false,
				baseLayerPicker: false,
				homeButton: false,
				geocoder: false,
				timeline: false,
				sceneModePicker: false,
				navigationHelpButton: false,
				infoBox: false,
				scene3DOnly: true,
				selectionIndicator: false
			});
	}
}
</script>
<style lang="stylus" scoped>
.map
	width 100%
	height 100%
</style>

