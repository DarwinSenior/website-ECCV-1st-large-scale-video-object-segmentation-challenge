<style lang="scss" scoped>
#page-home {
  video {
    margin: auto;
    display: block;
  }
}
</style>

<template lang="pug">
#page-home.page
  section.section#display-section: .container
    .section
      .columns
        .column(v-for="sample in samples")
          img(:src="'/static/samples/'+sample+'.jpg'")
    .section
      h1.title DataSet
      div DAVIS 2016 In each video sequence a single instance is annotated.
      div DAVIS 2017 In each video sequence a single instance is annotated.
    .section
      h1.title Publication
    .section
      h1.title Preview of the Annotations
      .container
        video.is-center(controls)
          source(src="/static/DAVIS-2017-TrainVal.mp4")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class HomePage extends Vue {
  samples = ['bicycle1', 'fishtank1', 'mountain1']
}
</script>
