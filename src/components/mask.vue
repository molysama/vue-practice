
<template lang="pug" >

.masker(v-show="showMasker", @click.stop="toggle")
    slot
  
</template>
<script>
export default {
    name: 'masker',
    model: {
        prop: 'show',
        event: 'toggle'
    },
    props: {
        show: {
            default: false,
            type: Boolean
        }
    },
    data () {
        return {
            showMasker: this.show
        }
    },
    watch: {
        show (val) {
            this.showMasker = val
        }
    },
    methods: {
        toggle () {
            const propsData = this.$options && this.$options.propsData

            // 如果父组件没有传prop，则只修改此组件内数据，否则触发v-model所绑定的事件
            if (Object.keys(propsData).length == 0) {
                this.showMasker = !this.showMasker           
            } else {
                this.$emit('toggle', !this.show)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.masker
    position fixed 
    width 100%
    height 100%
    background rgba(0, 0, 0, .3)
    z-index 999

</style>

