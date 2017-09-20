
<template lang="pug">
.pure-g
    .pure-u-1-1
        .navbar
            div HEADER 
</template>
<script>
export default {
  name: 'page-header'
}
</script>

<style lang="stylus" scoped>
.navbar 
    position fixed 
    left 0 
    right 0
    top 0
    background rgba(12, 24, 35, 0.64)
    height 75px
    line-height @height
</style>

