<template lang="pug">
div._
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

<style scoped lang="sass">
	._
		display: flex
		min-height: 100vh
		padding: 1rem
		flex-flow: column
		justify-content: center
		align-items: flex-end

		.link
			margin: 1rem 0
</style>
