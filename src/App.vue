<template lang="pug">
  .swiper-container
    .swiper-wrapper
      .swiper-slide.menu MENU
      .swiper-slide.content(@click.native="closeMenu")
        .menu-button(@click="toggleMenu", :class="{'cross': open}") 
          .bar
          .bar
          .bar
        router-view
</template>

<script>
import Swiper from 'swiper'

let swiper 
export default {
  name: 'app',
  data () {
    return {
      open: undefined
    }
  },
  methods: {
    closeMenu () {
      if (!this.open) {
        swiper.slide(0, 600, true)
        this.open = !this.open
      }
    },
    toggleMenu () {
      if (this.open) {
        swiper.slideTo(1, 600, true)          
      } else {
        swiper.slideTo(0, 600, true)          
      }
      this.open = !this.open
    },
    initSwiper () {
      let that = this
      swiper = new Swiper(this.$el, {
        slidesPerView: 'auto',
        initialSlide: 1,
        slideToClickedSlide: true,
        onSlideChangeEnd (slide) {
          that.open = that.open === undefined ? false : !that.open
        },
        loop: false
      })

    }
  },
  mounted () {
    console.log(window.swiper)
    this.initSwiper()
  }

 
}
</script>
<style>
html, body {
			position: relative;
			height: 100%;
		}
		body {
			background: #eee;
			font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
			font-size: 14px;
			color: #000;
			margin: 0;
			padding: 0;
		}
		.swiper-container {
			width: 100%;
			height: 100%;
		}
		.swiper-slide {
			text-align: center;
			font-size: 18px;
			background: #fff;

			/* Center slide text vertically */
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
		}
		.menu {
			min-width: 100px;
			width: 70%;
			max-width: 320px;

			background-color: #2C8DFB;
			color: #fff;
		}
		.content {
			width: 100%;
		}

		.menu-button {
			position: absolute;
			top: 0px; left: 0px;

			padding: 15px;

			cursor: pointer;

			-webkit-transition: .3s;
			transition: .3s;

			background-color: #2C8DFB;

			/*margin: 14px;
			border-radius: 5px;*/
		}
		.menu-button .bar:nth-of-type(1) {
			margin-top: 0px;
		}
		.menu-button .bar:nth-of-type(3) {
			margin-bottom: 0px;
		}

		.bar {
			position: relative;
			display: block;

			width: 50px;
			height: 5px;

			margin: 10px auto;
			background-color: #fff;

			border-radius: 10px;

			-webkit-transition: .3s;
			transition: .3s;
		}

		.menu-button:hover .bar:nth-of-type(1) {
			-webkit-transform: translateY(1.5px) rotate(-4.5deg);
			-ms-transform: translateY(1.5px) rotate(-4.5deg);
			transform: translateY(1.5px) rotate(-4.5deg);
		}
		.menu-button:hover .bar:nth-of-type(2) {
			opacity: .9;
		}
		.menu-button:hover .bar:nth-of-type(3) {
			-webkit-transform: translateY(-1.5px) rotate(4.5deg);
			-ms-transform: translateY(-1.5px) rotate(4.5deg);
			transform: translateY(-1.5px) rotate(4.5deg);
		}

		.cross .bar:nth-of-type(1) {
			-webkit-transform: translateY(15px) rotate(-45deg);
			-ms-transform: translateY(15px) rotate(-45deg);
			transform: translateY(15px) rotate(-45deg);
		}
		.cross .bar:nth-of-type(2) {
			opacity: 0;
		}
		.cross .bar:nth-of-type(3) {
			-webkit-transform: translateY(-15px) rotate(45deg);
			-ms-transform: translateY(-15px) rotate(45deg);
			transform: translateY(-15px) rotate(45deg);
		}
		.cross:hover .bar:nth-of-type(1) {
			-webkit-transform: translateY(13.5px) rotate(-40.5deg);
			-ms-transform: translateY(13.5px) rotate(-40.5deg);
			transform: translateY(13.5px) rotate(-40.5deg);
		}
		.cross:hover .bar:nth-of-type(2) {
			opacity: .1;
		}
		.cross:hover .bar:nth-of-type(3) {
			-webkit-transform: translateY(-13.5px) rotate(40.5deg);
			-ms-transform: translateY(-13.5px) rotate(40.5deg);
			transform: translateY(-13.5px) rotate(40.5deg);
		}
</style>

<style lang="stylus">
/*
.swiper-container 
  width 100%
  height 100%
  .menu 
    text-align center 
    font-size 18px
    background #fff
    display flex 
    justify-content center 
    align-items center
    min-width 100px
    width 70%
    max-width 320px
    background-color deepskyblue
    color #fff
  .content 
    font-size 18px
    background #fff
    width 100%
    overflow auto
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
  
*/
</style>

