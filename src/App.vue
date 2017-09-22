<template lang="pug">
  .swiper-container
    .swiper-wrapper
      .swiper-slide.menu MENU 
      .swiper-slide.content
        .menu-button(@click="toggleMenu", :class="{'cross': cross}") 
          .bar
          .bar
          .bar
        | Content
</template>

<script>
import Swiper from 'swiper'

let swiper 
export default {
  name: 'app',
  data () {
    return {
      cross: false
    }
  },
  methods: {
    toggleMenu () {
      if (!this.cross) {
        swiper.slideTo(0, 600, true)          
      } else {
        swiper.slideTo(1, 600, true)          
      }
      this.cross = !this.cross
    },
    initSwiper () {
      swiper = new Swiper(this.$el, {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: .00000000000001,
        slideToClickedSlide: true
      })
    }
  },
  mounted () {
    this.initSwiper()
  }
 
}
</script>
<style>
html, body {
  height: 100%;
}
html, button, input, select, textarea,
.pure-g [class *= "pure-u"] {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.pure-g > div {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
<style lang="stylus">
.swiper-container 
  width 100%
  height 100%
  .swiper-slide 
    text-align center 
    font-size 18px
    background #fff
    display flex 
    justify-content center 
    align-items center
  .menu 
    min-width 100px
    width 70%
    max-width 320px
    background-color deepskyblue
    color #fff
  .content 
    width 100%
  .menu-button 
    cursor pointer 
    transition .3s 
    background deepskyblue
    position absolute 
    top 0
    left 0
    padding 15px
    &:hover 
      .bar 
        &:nth-of-type(1)
          transform translateY(1.5px) rotate(-4.5deg)
        &:nth-of-type(2)
          opacity .9
        &:nth-of-type(3)
          transform translateY(-1.5px) rotate(4.5deg)
        
    .bar 
      display block 
      width 50px 
      height 5px
      margin 10px auto
      border-radius 10px
      transition .3s
      background #fff
      &:nth-of-type(1)
        margin-top 0
      &:nth-of-type(3)
        margin-bottom 0
.cross 
  .bar 
    &:nth-of-type(1) 
      transform translateY(15px) rotate(-45deg)
    &:nth-of-type(2) 
      opacity 0
    &:nth-of-type(3)
      transform translateY(-15px) rotate(45deg)
  
</style>

