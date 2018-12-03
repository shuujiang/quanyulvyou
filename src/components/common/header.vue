<template>
    <div class="header">
        <div class="box">
            <p class="title">{{ $t('navbar.title') }}</p>
            <div class="dqkl">
                <p class="name">{{ $t('navbar.dqkl') }}</p>
                <!-- <div class="value" id="dqklValue">{{dqkl}}</div> -->
                <countUp :value="dqkl" class="value"></countUp>
            </div>

            <ul class="klListBox Box">
                <li v-for="(item, i) in klList" :key="i">
                    <p>{{ $t('navbar.'+ item.type) }}</p>
                    <p>{{item.value}}</p>
                </li>
            </ul>
            <div class="runBox">
                <ul class="Box">
                    <li v-for="(item, i) in runList" :key="i">
                        <p>{{ $t('navbar.'+ item.titlt) }}</p>
                        <ul>
                            <li v-for="(aitem, a) in item.list" :key="a">
                                <span>{{$t('navbar.'+ aitem.name)}}</span>
                                <span>{{aitem.value}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <Weather class="weatherBox Box"></Weather>
        </div>
        <p @click="changeLocale" class="lanCh">{{ $t('language.name') }}</p>
    </div>
</template>
<script>
import countUp from './countUp'
import Weather from './weather'
export default {
    data() {
        return {
            dqkl: "10000",
            klList: [
                {
                    type: 'zrkl',
                    value: 18000
                },
                {
                    type: 'qrkl',
                    value: 135000
                },
                {
                    type: 'ljyk',
                    value: 5950000
                }
            ],
            runList: [
                {
                    titlt: 'wechart',
                    icon: '',
                    list: [
                        {
                            name: 'follower',
                            value: '5.3万',
                            icon: ''
                        },
                        {
                            name: 'reading',
                            value: '191.4万',
                            icon: ''
                        },
                        {
                            name: 'readers',
                            value: '411.9万',
                            icon: ''
                        },
                        {
                            name: 'FA',
                            value: '13.7万',
                            icon: ''
                        }
                    ]
                },
                {
                    titlt: 'Official',
                    icon: '',
                    list: [
                        {
                            name: 'visits',
                            value: '5039人次',
                            icon: ''
                        },
                        {
                            name: 'PV',
                            value: '3.53万',
                            icon: ''
                        }
                    ]
                },
                {
                    titlt: 'weibo',
                    icon: '',
                    list: [
                        {
                            name: 'amount',
                            value: '51.52万',
                            icon: ''
                        },
                        {
                            name: 'reading',
                            value: '25.31万',
                            icon: ''
                        }
                    ]
                },
                {
                    titlt: 'EBP',
                    icon: '',
                    list: [
                        {
                            name: 'order',
                            value: '1.93万',
                            icon: ''
                        },
                        {
                            name: 'AA',
                            value: '146.9万元',
                            icon: ''
                        }
                    ]
                }
            ]
        }
    },
    components:{
        countUp,
        Weather
    },
    mounted(){

    },
    methods:{
        changeLocale(){
            let locale = this.$i18n.locale
            locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
        }
    }
}
</script>
<style lang="stylus" scoped>
.header
    width 100%
    height 70px
    position absolute 
    z-index 30
    line-height 70px
    display flex
    justify-content space-around
    background-color rgba(0, 12, 32, 0.7)
    color #ffffff
    .box
        display flex
        width 100%
        justify-content space-between 
        .title
            flex-shrink 0
            padding-left 20px
            font-size 26px
        .dqkl
            display flex
            .name
                padding-left 20px
                padding-right 20px
                font-size 20px
            .value
                font-family 'LED'
                font-size  70px
                color #13f6fd
        .Box
            display flex
            margin 15px 0
        .klListBox
            li
                padding 0 10px
                p
                    line-height 20px
                    text-align center
        .runBox
            flex-grow 0
            flex-shrink 0
            width 600px
            overflow hidden
            .Box
                // animation name duration timing-function delay iteration-count direction fill-mode
                li
                    padding 0 10px
                    display flex
                    line-height 40px
                    flex-grow 0
                    flex-shrink 0
                    padding 0
                    ul
                        flex-grow 0
                        flex-shrink 0
                        width auto
                        display flex
                        li
                            flex-grow 0
                            flex-shrink 0
                            width auto
                            padding 0
    .lanCh
        flex-grow 0
        flex-shrink 0
        width 40px
        text-align center
        cursor pointer
</style>
