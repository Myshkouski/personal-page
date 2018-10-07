<template lang="pug">
div._
	Ripple(
		v-for="(tracker, index) in trackers"
		:key="index"
		:ripple="tracker.final.element"
		)
</template>

<script type="text/javascript">
import Ripple from '~/components/ripple'
// import getElementRect from '~/helpers/getElementRect'

import {
  add as addEventListeners
} from '~/helpers/eventListeners'

export default {
  components: {
    Ripple
  },

  props: {
    trackers: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>
  ._
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    width: 100%
    height: 100%
    transform-style: preserve-3d
</style>
