<template lang="pug">

.page(@click="open")
    masker(ref="masker", :show="parentshow")
    page-header
    section.container CONTENT
</template>
<script>

export default {
    data () {
        return {
            parentshow: true
        }
    },
    methods: {
        open () {
            this.$refs['masker'].open()
        }
    }
}

</script>
<style lang="stylus">
.page 
    width 100%
.container
    height 1500px
</style>



