<template>
	<div id="app">
		<Header></Header>
		<Sidebar></Sidebar>
		<router-view/>
	</div>
</template>

<script>
import Header from './components/common/header'
import Sidebar from './components/common/sidebar'
export default {
	name: 'App',
	components:{
		Header,
		Sidebar
	}
}
</script>

<style lang="stylus">
html,
body
	width 100%
	height 100%
	margin 0
	padding 0
#app 
	font-family 'Avenir', Helvetica, Arial, sans-serif
	width 100%
	height 100%
	position relative
</style>
