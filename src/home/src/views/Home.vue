<template>
    <div class="mw-main">
        <a href="/" class="logo"><svg-logo @click="window.location.href='/'"></svg-logo></a>
        <div class="nav-button" @click="showNav = !showNav" :class="{ 'open': showNav }">
            <i class="top"></i>
            <i class="middle"></i>
            <i class="bottom"></i>
        </div>
        <div class="nav" :class="{ 'open': showNav }">
            <div class="menu">
                <a v-for="(item, index) in nav" :key="index" :href="item.url">{{item.text}}</a>
            </div>
            <div class="icons">
                <a href="javascript:void(0);" @click="weixin ? openQrcode = weixin : ''" class="icon icon-wx">
                    <div class="popup-layout" v-if="weixin"><img :src="weixin"/></div>
                </a>
                <a :href="weibo" target="_blank" class="icon icon-wb"></a>
<!--
                <a href="javascript:void(0);" @click="qq ? openQrcode = qq : openQrcode = ''" class="icon icon-qq">
                    <div class="popup-layout" v-if="qq"><img :src="qq"/></div>
                </a>
-->
            </div>
        </div>
        <div class="nav-mask" @click="showNav = false" v-if="showNav"></div>
        <div class="progress-bar" v-if="!loadedEnter">
            <div class="progress" ref="progress" :style="{ width: loadedWidth + '%' }"></div>
        </div>
        <div v-show="loadedEnter" class="mw-main-screen-1" :class="{ 'start': startEnter }">
            <div class="slogan" v-if="status == 'after'"><svg-slogan></svg-slogan></div>
            <div class="circle circle-1" :class="{ 'start': startEnter }"></div>
            <div class="circle circle-2" :class="{ 'start': startEnter }"></div>
            <div class="circle circle-3" :class="{ 'start': startEnter }"></div>
            <video-player class="cover" :options="videoGlobal"></video-player>
            <div class="road">
                <div class="man"></div>
                <div class="frames" :class="{ 'start': startEnter }"></div>
                <div class="tearing" :class="{ 'start': startEnter }"></div>
                <div class="light" ref="lightBox" :class="{ 'start': startEnter }"></div>
            </div>
            <div class="road-copy" :class="{ 'show-shadow': !showMask || !startEnter, 'start': startEnter }">
                <div class="button" :class="{ 'disable': startEnter }" @mouseenter="hoverStart('enter')" @mouseleave="hoverStart('leave')" @click="start"></div>
                <div class="button-border" :class="{ 'start': startEnter }"></div>
            </div>
            <div class="mask" :class="{ 'show': showMask || startEnter, 'start': startEnter, 'default': !showMask && !startEnter }"></div>
        </div>
    </div>
</template>

<script>
    import { whichTransitionEvent, whichAnimationEvent } from '@/utils'
    
    export default {
        data () {
            return {
                status: '',
                loadedEnter: false,
                showNav: false,
                loadedWidth: 0,
                startEnter: false,
                showMask: false,
                nav: [],
                videoGlobal: {
                    autoplay: true,
                    muted: true,
                    controls: false,
                    loop: true,
                    preload: 'auto',
                    sources: [
                        {
                            type: 'video/mp4',
                            src: require('@/assets/video/global.mp4')
                        },
                        {
                            type: 'video/webm',
                            src: require('@/assets/video/global.webm')
                        },
                        {
                            type: 'video/ogg',
                            src: require('@/assets/video/global.ogv')
                        }
                    ]
                },
                swiperBgWidth: 0,
                swiperWidth1: 0,
                swiperWidth2: 0,
                swiperWidth3: 0,
                swiperWidth4: 0,
                swiperWidth5: 0,
                swiperWidth6: 0,
                swiperWidth7: 0,
                swiperWidth8: 0,
                showPopup: '',
                showPopupCD: '',
                popup1: '',
                popup2: '',
                popup3: '',
                popup4: '',
                popup5: '',
                openVideoConference: false,
                showVideoConference: false,
                videoConference: {
                    autoplay: false,
                    muted: false,
                    controls: true,
                    loop: false,
                    preload: 'auto',
                    sources: [],
                    bigPlayButton: false
                },
                showBigPopup: false,
                showBigPopupOpen: false,
                news: [{}, {}, {}, {}, {}, {}],
                cdlist: [],
                weixin: '',
                qq: '',
                weibo: '',
                openQrcode: '',
                qrcode: '',
                logos: []
            }
        },
        created () {
            this.status = window.dataJSON.status
            this.nav = window.dataJSON.nav
            this.popup1 = window.dataJSON.popup1
            this.popup2 = window.dataJSON.popup2
            this.popup3 = window.dataJSON.popup3
            this.popup4 = window.dataJSON.popup4
            this.popup5 = window.dataJSON.popup5
            this.cdlist = window.dataJSON.cdlist
            this.weixin = window.dataJSON.weixin ? window.dataJSON.weixin : require('@/assets/images/qrcodewx.jpg')
            this.qq = window.dataJSON.qq
            this.weibo = window.dataJSON.weibo
            this.qrcode = window.dataJSON.qrcode ? window.dataJSON.qrcode : require('@/assets/images/qrcode.png')
            this.videoConference.sources = window.dataJSON.video
            this.logos = window.dataJSON.logos
            this.loadEnterImage()
        },
        watch: {
            loadedWidth (val) {
                if (val >= 99 && !this.loadedEnter) {
                    let transitionEvent = whichTransitionEvent()
                    transitionEvent && this.$refs.progress.addEventListener(transitionEvent, () => {
                        this.loadedEnter = true
                    })
                }
            },
            startEnter (val) {
                if (val) {
                    let animationEvent = whichAnimationEvent()
                    animationEvent && this.$refs.lightBox.addEventListener(animationEvent, () => {
                        window.location.href = 'company.html'
                    })
                }
            }
        },
        methods: {
            loadEnterImage () {
                const the = this
                const imgsArr = [
                    require('@/assets/images/button-start-border.png'),
                    require('@/assets/images/button-start-hover.png'),
                    require('@/assets/images/button-start.png'),
                    require('@/assets/images/circle-1.png'),
                    require('@/assets/images/circle-2.png'),
                    require('@/assets/images/circle-3.png'),
                    require('@/assets/images/man.png'),
                    require('@/assets/images/road-bottom-light.png'),
                    require('@/assets/images/road-frames.png'),
                    require('@/assets/images/road-light.png'),
                    require('@/assets/images/road.png'),
                    require('@/assets/images/tearing.png'),
                    require('@/assets/images/video-bg-left.png'),
                    require('@/assets/images/video-bg-right.png'),
                    require('@/assets/images/video-bg-left.png'),
                ]
                
                let loaded = 0
                var imgObj = null
                imgsArr.forEach((value, index, arr) => {
                    imgObj = new Image()
                    imgObj.src = imgsArr[index]
                    imgObj.onload = function() {
                        loaded++
                        the.loadedWidth += (1 / imgsArr.length * 100)
                    }
                })
            },
            hoverStart (e) {
                if (e == 'enter') {
                    this.showMask = true
                } else if (e == 'leave') {
                    this.showMask = false
                }
            },
            start () {
                this.startEnter = true
            },
            loadImgs (imgs, fn) {
                let loaded = 0
                var loadedImgsArr = []
                var imgsArr = imgs
                var imgObj = null
                imgsArr.forEach((value, index, arr) => {
                    imgObj = new Image()
                    imgObj.src = imgsArr[index]
                    imgObj.onload = function() {
                        loaded++
                        if (loaded == imgsArr.length) {
                            fn && fn(loadedImgsArr)
                        }
                    }
                    loadedImgsArr.push(imgObj)
                })
            },
            createCanvas (config) {
                let canvas = document.createElement('canvas')
                config.parentBox.appendChild(canvas)
                let { offsetWidth, offsetHeight } = canvas.parentNode
                canvas.width = offsetWidth
                canvas.height = offsetHeight
                return canvas
            },
            ani (imgsArr, config, cb) {
                let canvas = this.createCanvas(config)
                let offsetWidth = imgsArr[0].width
                let offsetHeight = imgsArr[0].height
                let ctx = canvas.getContext('2d')
                let n = 0
                let timer = setInterval(() => {
                    //清屏
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                    //绘制图片
                    ctx.drawImage(
                        imgsArr[n],
                        0, 0, offsetWidth, offsetHeight,
                        0, 0, canvas.width, canvas.height
                    )
                    n++
                    //播放到最后一张图片
                    if (n == imgsArr.length) {
                        n = 0
                        cb && cb(timer)
                    }
                }, 1000 / config.fps)
            },
            animation (config, cb) {
                const imgs = function () {
                    let imgsArr = []
                    for (let i = 0; i < config.length; i++) {
                        let imgSrc = require(`@/assets/images/${config.dir}${i}.png`)
                        imgsArr.push(imgSrc)
                    }
                    return imgsArr
                }
                this.loadImgs(imgs(), (imgs) => {
                    this.ani(imgs, {
                        fps: config.fps,
                        parentBox: config.ref
                    }, (timer) => {
                        cb && cb(timer)
                    })
                })
            },
            handleConferenceVideo () {
                this.openVideoConference = true
                let transitionEvent = whichTransitionEvent()
                transitionEvent && this.$refs.playBtnBor.addEventListener(transitionEvent, () => {
                    this.showVideoConference = true
                    this.$refs.videoConferencePlayer.player.play()
                })
//                if (this.status == 'before') {
//                    alert('精彩内容即将奉上！')
//                } else {
//                    this.openVideoConference = true
//                    let transitionEvent = whichTransitionEvent()
//                    transitionEvent && this.$refs.playBtnBor.addEventListener(transitionEvent, () => {
//                        this.showVideoConference = true
//                        this.$refs.videoConferencePlayer.player.play()
//                    })
//                }
            },
            openBigPopup () {
                this.showBigPopup = true
                let transitionEvent = whichTransitionEvent()
                transitionEvent && this.$refs.flashBallEnd.addEventListener(transitionEvent, () => {
                    if (this.showBigPopup) {
                        this.showBigPopupOpen = true
                    }
                })
            },
            closeBigPopup () {
                this.showBigPopup = false
                this.showBigPopupOpen = false
            }
        }
    }
</script>

<style lang="scss">
    @import '~@/style/home';
</style>