<template lang="pug">
div.content-wrapper._
	h1 {{error.statusCode}}
	p {{error.message}}
	div.link
		nuxt-link(to='/') Go to homepage
</template>

<script>
import head from './#head'

export default {
  head,

  props: {
    error: {
      default () {
        return {
          statusCode: 404,
          message: 'This page could not be found'
        }
      }
    }
  },

  created() {
    console.error(this.error.statusCode, this.error.message)
  }
}
</script>

<style lang="sass" src="~/styles/global"></style>
<style scoped lang="sass">
._
  height: 100vh
  padding: 0 1rem
  justify-content: center
  align-items: flex-end

  .link
	   margin: 1rem 0
</style>
