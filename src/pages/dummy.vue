<style lang="scss" scoped>
#dummypage {
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
div#dummypage
  p
    b-icon(icon='timer-sand-full' size='is-large')
    | Please wait ...
  p {{$route.path.split('/').pop()}} page will be available soon
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DummyPage extends Vue {
}
</script>
