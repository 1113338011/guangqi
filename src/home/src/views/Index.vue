<template>
    <div class="mw-main">
        <div class="logo"><svg-logo></svg-logo></div>
        <div class="nav-button" @click="showNav = !showNav" :class="{ 'open': showNav }">
            <i class="top"></i>
            <i class="middle"></i>
            <i class="bottom"></i>
        </div>
        <div class="nav" :class="{ 'open': showNav }">
            <div class="menu">
                <a href="index.html">光域汽车</a>
                <a href="company.html">企业介绍</a>
                <a href="news.html">资讯动态</a>
                <a href="jion.html">招聘信息</a>
                <a href="contact.html">联系我们</a>
            </div>
            <div class="icons">
                <a href="#" class="icon icon-wx"></a>
                <a href="#" class="icon icon-wb"></a>
                <a href="#" class="icon icon-qq"></a>
            </div>
        </div>
        <div class="nav-mask" v-if="showNav"></div>
        <div v-show="loadedEnter" class="mw-main-screen-1" :class="{ 'start': startEnter }">
            <div class="slogan"><svg-slogan></svg-slogan></div>
            <div class="circle circle-1" :class="{ 'start': startEnter }"></div>
            <div class="circle circle-2" :class="{ 'start': startEnter }"></div>
            <div class="circle circle-3" :class="{ 'start': startEnter }"></div>
            <video-player class="cover" :options="videoGlobal" @canplaythrough="onCanplaythrough"></video-player>
            <div class="road">
                <div class="man"></div>
                <div class="frames" :class="{ 'start': startEnter }"></div>
                <div class="tearing" :class="{ 'start': startEnter }"></div>
                <div class="light" :class="{ 'start': startEnter }"></div>
            </div>
            <div class="road-copy" :class="{ 'show-shadow': showMask || startEnter, 'start': startEnter }">
                <div class="button" :class="{ 'disable': startEnter }" @mouseenter="hoverStart('enter')" @mouseleave="hoverStart('leave')" @click="start"></div>
                <div class="button-border" :class="{ 'start': startEnter }"></div>
            </div>
            <div class="mask" :class="{ 'show': showMask || startEnter, 'start': startEnter }"></div>
        </div>
        <div class="mw-main-screen-2" :class="{ 'start': startEnter }">
            <div class="swiper-container">
                <div class="parallax-bg" data-swiper-parallax="-150%">
                    <div class="bg-mechanic bg-mechanic-1"></div>
                    <div class="bg-mechanic bg-mechanic-2"></div>
                    <div class="bg-mechanic bg-mechanic-3"></div>
                    <div class="bg-mechanic bg-mechanic-4"></div>
                    <div class="square-bg"></div>
                </div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="svg-paste">
                            <div class="tree"></div>
                            <svg-pas class="pas"></svg-pas>
                            <svg-te></svg-te>
                            <div class="man-1">
                                <div class="point" @click="screen.one.showCont = screen.one.showCont == 'a' ? '' : 'a'"></div>
                                <div class="box" :class="{ 'show': screen.one.showCont == 'a' }">
                                    <div class="inner">{{ screen.one.a }}</div>
                                    <i class="cap-top"></i>
                                    <i class="cap-bottom"></i>
                                </div>
                            </div>
                            <div class="man-2">
                                <div class="point"@click="screen.one.showCont = screen.one.showCont == 'b' ? '' : 'b'"></div>
                                <div class="box" :class="{ 'show': screen.one.showCont == 'b' }">
                                    <div class="inner">{{ screen.one.b }}</div>
                                    <i class="cap-top"></i>
                                    <i class="cap-bottom"></i>
                                </div>
                            </div>
                            <div class="man-3">
                                <div class="point" @click="screen.one.showCont = screen.one.showCont == 'c' ? '' : 'c'"></div>
                                <div class="box" :class="{ 'show': screen.one.showCont == 'c' }">
                                    <div class="inner">{{ screen.one.c }}</div>
                                    <i class="cap-top"></i>
                                    <i class="cap-bottom"></i>
                                </div>
                            </div>
                            <div class="bicycle"></div>
                        </div>
                        <div class="dhz" ref="anidhz"></div>
                        <div class="hs" ref="anihs"></div>
                        <div class="pz" ref="anipz"></div>
                        <div class="zp" ref="anizp"></div>
                    </div>
                    <div class="swiper-slide">
                        <div class="billboard" data-swiper-parallax="-300"></div>
                        <div class="video-box">
                            <div class="flash-light" v-if="!showVideoConference"></div>
                            <div class="video" ref="videoBox" :style="{ 'width': videoConferenceWidth }" :class="{ 'open': openVideoConference }">
                                <div class="play-button" @click="handleConferenceVideo">
                                    <div class="play-button-border" :class="{ 'rotate': openVideoConference }"></div>
                                </div>
                                <video-player v-show="showVideoConference" ref="videoConferencePlayer" :options="videoConference"></video-player>
                            </div>
                            <div class="video-copy" :style="{ 'width': videoConferenceWidth }"></div>
                        </div>
                        <div class="potted"></div>
                        <div class="people-1"></div>
                        <div class="hb" ref="anihb"></div>
                        <div class="tb" ref="anitb"></div>
                    </div>
                    <div class="swiper-slide">
                        <div class="special-1">
                            <div class="bubble bubble-1"></div>
                            <div class="bubble bubble-2"></div>
                            <div class="bubble bubble-3"></div>
                            <div class="bubble bubble-4"></div>
                            <div class="bubble bubble-5"></div>
                            <div class="bubble bubble-6"></div>
                            <div class="bubble bubble-7"></div>
                            <div class="people-2"></div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="special-2">
                            <div class="top-light"></div>
                            <div class="machine-tool">
                                <div class="bp" ref="anibp"></div>
                                <div class="jcy" ref="anijcy"></div>
                                <div class="nr" ref="aninr"></div>
                            </div>
                            <div class="crane">
                                <div class="dcr" ref="anidcr"></div>
                                <div class="jp" ref="anijp"></div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="road-list">
                            <div class="list-box" ref="listBox" :style="{ 'width': listBoxWidth }">
                                <a href="#" class="item">
                                    <div class="title">轮毂造型及命名</div>
                                    <p>万年TE37：制造形式：单片锻造铝制 厂商：RAYS 。经典程度无需解释....</p>
                                </a>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                            </div>
                            <div class="people-3"></div>
                        </div>
                    </div>
                    <div class="swiper-slide">
<!--                        <div class="cdrom"></div>-->
                        <div class="cdrom-temp"></div>
                    </div>
                    <div class="swiper-slide">
                        <div class="qrcode-svg"></div>
                        <div class="end-top"></div>
                        <div class="end-bottom"></div>
                        <div class="end-light"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="progress-bar" v-if="!loadedEnter">
            <div class="progress" :style="{ width: loadedWidth + '%' }"></div>
        </div>
    </div>
</template>

<script>
    import { Swiper } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.min.css'
    export default {
        data () {
            return {
                loadedEnter: false,
                loadedWidth: 0,
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
                videoConference: {
                    autoplay: false,
                    muted: false,
                    controls: true,
                    loop: false,
                    preload: 'auto',
                    sources: [
                        {
                            type: 'video/mp4',
                            src: 'http://vjs.zencdn.net/v/oceans.mp4'
                        }
                    ],
                    bigPlayButton: false
                },
                videoConferenceWidth: '0',
                listBoxWidth: '0',
                showMask: false,
                startEnter: false,
                showVideoConference: false,
                openVideoConference: false,
                showNav: false,
                screen: {
                    one: {
                        showCont: '',
                        a: '',
                        b: '',
                        c: ''
                    }
                }
            }
        },
        created () {
            this.loadEnterImage()
            this.screen.one.a = window.dataJSON.popup1
            this.screen.one.b = window.dataJSON.popup2
            this.screen.one.c = window.dataJSON.popup3
        },
        mounted () {
            this.listenAni()
        },
        watch: {
            loadedWidth (val) {
                if (val >= 100) {
                    setTimeout(() => {
                        this.loadedEnter = true
                    }, 200)
                }
            },
            loadedEnter (val) {
                if (val) {
                    this.$nextTick(() => {
                        new Swiper('.swiper-container', {
                            speed: 800,
                            direction: 'horizontal',
                            slidesPerView: 1,
                            spaceBetween: 0,
                            mousewheel: true
                        })
                        this.videoConferenceSize()
                        this.listBoxSize()
                        window.onresize = () => {
                            this.videoConferenceSize()
                            this.listBoxSize()
                        }
                        this.animation({
                            length: 80,
                            dir: 'dhz/dhz_',
                            fps: 10,
                            ref: this.$refs.anidhz
                        })
                        this.animation({
                            length: 80,
                            dir: 'hs/hs_',
                            fps: 10,
                            ref: this.$refs.anihs
                        })
                        this.animation({
                            length: 80,
                            dir: 'pz/pz',
                            fps: 10,
                            ref: this.$refs.anipz
                        })
                        this.animation({
                            length: 80,
                            dir: 'zp/zp_',
                            fps: 10,
                            ref: this.$refs.anizp
                        })
                        this.animation({
                            length: 252,
                            dir: 'hb/hb_',
                            fps: 10,
                            ref: this.$refs.anihb
                        })
                        this.animation({
                            length: 150,
                            dir: 'tb/tb',
                            fps: 10,
                            ref: this.$refs.anitb
                        })
                        this.animation({
                            length: 200,
                            dir: 'dcr/dcr_',
                            fps: 10,
                            ref: this.$refs.anidcr
                        })
                        this.animation({
                            length: 200,
                            dir: 'jp/jp_',
                            fps: 10,
                            ref: this.$refs.anijp
                        })
                        this.animation({
                            length: 200,
                            dir: 'bp/bp_',
                            fps: 10,
                            ref: this.$refs.anibp
                        })
                        this.animation({
                            length: 200,
                            dir: 'jcy/jcy_',
                            fps: 10,
                            ref: this.$refs.anijcy
                        })
                        this.animation({
                            length: 274,
                            dir: 'nr/nr_',
                            fps: 10,
                            ref: this.$refs.aninr
                        })
                    })
                } 
            }
        },
        methods: {
            listenAni () {
                // 监听动画结束
            },
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
                        the.loadedWidth += (1 / imgsArr.length * 90)
                    }
                })
            },
            onCanplaythrough () {
                this.loadedWidth += 10
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
            handleConferenceVideo () {
                this.openVideoConference = true
                setTimeout(() => {
                    this.showVideoConference = true
                    this.$refs.videoConferencePlayer.player.play()
                }, 1400)
            },
            videoConferenceSize () {
                this.videoConferenceWidth = this.$refs.videoBox.clientHeight * 1.8 + 'px'
            },
            listBoxSize () {
                this.listBoxWidth = this.$refs.listBox.clientHeight * 1.5 + 'px'
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
            }
        }
    }
</script>

<style lang="scss">
    @import '~@/style/index'
</style>
