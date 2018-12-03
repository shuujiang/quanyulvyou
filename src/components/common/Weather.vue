<template>
    <ul>
        <li>
            <i></i>
        </li>
        <li v-show="show">
            <p>{{temp}}℃</p>
            <p>{{wind}}</p>
        </li>
        <li v-show="show">
            <p>{{weath}}</p>
            <p>{{airQuality}}</p>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            temp: '14~18',
            wind: '西北风3级',
            weath: "小雨",
            airQuality: '良 52'
        }
    },
    computed:{
        show(){
            let locale = this.$i18n.locale
            console.log(locale, 29)
            return locale === 'zh' ? true : false
        }
    }
}
</script>
<style lang="stylus" scoped>
.Box
    display flex
    li
        padding 0 5px
        i 
            float left
            width 40px
            height @width
            background-color red
        p
            line-height 20px
</style>

