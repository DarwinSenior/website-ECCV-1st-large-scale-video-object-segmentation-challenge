<style lang="scss" scoped>
#not-found-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  p {
    max-width: 80%;
    font-size: 36px;
    color: #555555;
    text-align: center;
  }
}
</style>

<template lang="pug">
div#not-found-page
  p
    b-icon(icon='alert-circle' size='is-large')
    |  Page not found
  p: router-link(to='/home') return to home page
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class NotfoundPage extends Vue {
}
</script>
