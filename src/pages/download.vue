<style lang="scss" scoped>
#page-download {
  .container.download {
    display: flex;
    flex-direction: row;
    margin: 30px auto;
    justify-content: center;
    span.left {
      width: 200px;
    }
    a.button {
      flex: 1;
      max-width: 300px;
      span { padding-left: 5px; }
      margin: auto 20px;
    }
  }
}
</style>

<template lang="pug">
#page-download.page
  section.section
    .container
      .section
      
        h1.title Evaluation Code
        .container.download
          a.button.is-primary
            b-icon(icon="github-circle" size="is-small")
            span Matlab code
        .container.download
          a.button.is-primary
            b-icon(icon="github-circle" size="is-small")
            span Python code
  
      .section
        h1.title Evaluation Test-Dev and Test-Challenge
        .container.download
          a.button.is-info
            b-icon(icon="cube-outline" size="is-small")
            span Test Dev and Test Challenge
  
      .section
        h1.title Downloads
        p To reduce data preprocessing time, we have prepared all image frames and annotations in 360p resolution. We provide download links for annotated image frames (6fps) as well as raw image frames (30fps).
        .container.download
          span.left Train-Val - Images and Annotations
          a.button.is-warning
            b-icon(icon="zip-box" size="is-small")
            span Annotated frames
          a.button.is-warning
            b-icon(icon="zip-box" size="is-small")
            span All frames
        .container.download
          span.left Test-Dev - Images and First Frame Annotations
          a.button.is-warning
            b-icon(icon="zip-box" size="is-small")
            span Annotated frames
          a.button.is-warning
            b-icon(icon="zip-box" size="is-small")
            span All frames
        .container.download
          span.left Test-Challenge - Images and First Frame Annotations
          a.button.is-warning
            b-icon(icon="zip-box" size="is-small")
            span Annotated frames
          a.button.is-warning
            b-icon(icon="zip-box" size="is-small")
            span All frames
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DownloadPage extends Vue {
}
</script>
