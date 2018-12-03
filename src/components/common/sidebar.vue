<template>
    <ul class="sidebar">
        <li v-for="(item, i) in list" :key="i" @click="routerFun(item)">
            <i :style="{'background-image': 'url('+item.src+')'}"></i>
            <p class="name">{{ $t(item.name + '.name') }}</p>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            list: [
                {
                    name: 'cyjc',
                    path: '/cyjc',
                    src: './static/img/sidebar/navItem0.png'
                },
                {
                    name: 'lyzy',
                    path: '/lyzy',
                    src: './static/img/sidebar/navItem1.png'
                },
                {
                    name: 'ylhx',
                    path: '',
                    src: './static/img/sidebar/navItem2.png'
                },
                {
                    name: 'ykly',
                    path: '',
                    src: './static/img/sidebar/navItem3.png'
                },
                {
                    name: 'xffx',
                    path: '',
                    src: './static/img/sidebar/navItem4.png'
                },
                {
                    name: 'ylmy',
                    path: '',
                    src: './static/img/sidebar/navItem5.png'
                },
                {
                    name: 'jqhd',
                    path: '',
                    src: './static/img/sidebar/navItem6.png'
                },
                {
                    name: 'yxpg',
                    path: '',
                    src: './static/img/sidebar/navItem7.png'
                },
                {
                    name: 'ptjk',
                    path: '',
                    src: './static/img/sidebar/navItem8.png'
                }
            ]
        }
    },
    methods:{
        routerFun(val){
            this.$router.push(val.name)
        }
    }
}
</script>
<style lang="stylus" scoped>
.sidebar
    width 110px
    background-color rgba(0, 12, 32, 0.7)
    position absolute
    z-index 30
    top 50%
    left 10px
    transform translateY(-50%)
    color #ffffff
    li
        display flex
        justify-content center
        flex-wrap wrap
        border-bottom 1px dotted #ffffff
        padding 10px 5px
        cursor pointer
        i 
            float left
            width 30px
            height @width
            background-position 50% 50%
            background-size 100% 100%
            background-repeat no-repeat
        p
            width 100%
            text-align center
</style>


