
<template lang="pug" >

.masker(v-show="showMasker", @click.stop="close")
    slot
  
</template>
<script>
export default {
    name: 'masker',
    data () {
        return {
            showMasker: false
        }
    },
    watch: {
        show (v, oldV) {
            this.showMasker = v
        }
    },
    props: {
        show: {
            default: false,
            type: Boolean
        }
    },
    methods: {
        open () {
            this.showMasker = true
        },
        close () {
            this.showMasker = false
        }
    }
}
</script>

<style lang="stylus" scoped>
.masker
    position absolute 
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0, 0, 0, .3)
    z-index 2

</style>

