<template>
    <div >{{num}}</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    props:['value'],
    computed:{
        num(){
            return this.value
        }
    },
    mounted(){

    }
}
</script>
<style lang="stylus" scoped>

</style>

