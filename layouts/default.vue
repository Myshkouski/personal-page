<template lang="pug">
  nuxt
</template>

<script>
import head from './#head'

export default {
  head
}
</script>

<style lang="sass">
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300")
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300")

  *
    box-sizing: border-box

  body, h1, h2, h3, h4, h5, h6, p
    margin: 0
    padding: 0

  @for $level from 1 through 6
    h#{$level}
      font-size: #{2.4 - ($level * .2)}rem

  body
    font-family: "Open Sans", "Source Sans Pro", sans-serif

  a
    &, &:visited
      color: unset

  p, span, i, b, textarea, input[type="text"]
    font-size: 1rem
</style>
