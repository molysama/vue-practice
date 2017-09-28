
<template lang="pug">
.page
    //- masker(v-model="parentshow")
    masker
    page-header
    section.container CONTENT
</template>

<script>
export default {
    data () {
        return {
            parentshow: true
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



