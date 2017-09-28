
<template lang="pug">
.swiper-container
	.swiper-wrapper
		.swiper-slide.menu
			.menu-button(@click="toggleMenu", :class="{'cross': open}")
				.bar
				.bar
				.bar
			.menu-content MENU
		.swiper-slide.content(@click.native="closeMenu")
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
    this.initSwiper()
  }

 
}
</script>
<style lang="stylus">
.swiper-container 
  width 100%
  height 100%
  .menu 
    min-width 100px
    width 70%
    max-width 320px
		.menu-content
			text-align center 
			font-size 18px
			background #fff
			color #fff
			width 100%
			height 100%
			display flex 
			justify-content center 
			align-items center
			background-color deepskyblue
		.menu-button 
			cursor pointer 
			transition .3s 
			background deepskyblue
			position absolute 
			margin-left 100%
			z-index 1
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
  .content 
    font-size 18px
    background #fff
    width 100%
    overflow auto
.cross 
  .bar 
    &:nth-of-type(1) 
      transform translateY(15px) rotate(-45deg)
    &:nth-of-type(2) 
      opacity 0
    &:nth-of-type(3)
      transform translateY(-15px) rotate(45deg)
</style>

