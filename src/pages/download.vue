<style lang="scss" scoped>
#page-download {
  .container.download {
    display: flex;
    flex-direction: row;
    margin: 30px auto;
    justify-content: center;
    width: 90%;
    span.left {
      width: 200px;
    }
    a.button {
      flex: 1;
      max-width: 300px;
    }
  }
}
</style>

<template lang="pug">
#page-download.page
  section.section
    .container

      // .section
      //   h1.title Evaluation Code
      //   .container.download
      //     a.button.is-primary(disabled)
      //       b-icon(icon="github-circle" size="is-small")
      //       span Matlab code
      //   .container.download
      //     a.button.is-primary(disabled)
      //       b-icon(icon="github-circle" size="is-small")
      //       span Python code

      .section
        h1.title Evaluation
        .container.download
          a.button.is-info(href="https://competitions.codalab.org/competitions/19544#participate-submit_results")
            b-icon(icon="cube-outline" size="is-small")
            span codalab link

      .section
        h1.title Downloads
        p Currently, download links are available through #
          a(href="https://competitions.codalab.org/competitions/19544#participate") codalab
          |  competition for challenge2018. For more details, please see the
          router-link(to="/challenge/challenge2018")  the 1st large-scale video object segmentation challenge
          |  and its
          router-link(to="/challenge/guidelines")  guidelines
          | .
        .container.download(v-for="download in downloads" v-if="false")
          span.left {{ download.text }}
          b-dropdown(:hoverable="download.annotated_frames" :disabled="!download.annotated_frames")
            a.button.is-warning(slot="trigger")
              b-icon(icon="zip-box" size="is-small")
              span Annotated frames
              b-icon(icon="menu-down")
            b-dropdown-item(v-for="link in download.annotated_frames"
              has-link position="is-bottom-left")
              a(:href="link.link" target="_blank")
                b-icon(:icon="link.icon" size="is-small")
                span {{ link.text }}
          b-dropdown(:hoverable="download.all_frames" :disabled="!download.all_frames")
            a.button.is-warning(slot="trigger")
              b-icon(icon="zip-box" size="is-small")
              span All frames
              // b-icon(icon="menu-down")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DownloadPage extends Vue {
  downloads = [{
    text: 'Training Images and Annotations',
  }, {
    text: 'Validation Images and First Frame Annotations',
  }, {
    text: 'Test Images and First Frame Annotations'
  }]
}
</script>
