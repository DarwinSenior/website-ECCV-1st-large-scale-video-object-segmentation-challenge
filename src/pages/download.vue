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
      .section
        h1.title Evaluation Code
        .container.download
          a.button.is-primary(disabled)
            b-icon(icon="github-circle" size="is-small")
            span Matlab code
        .container.download
          a.button.is-primary(disabled)
            b-icon(icon="github-circle" size="is-small")
            span Python code
      .section
        h1.title Evaluation Test-Dev and Test-Challenge
        .container.download
          a.button.is-info(disabled)
            b-icon(icon="cube-outline" size="is-small")
            span Test Dev and Test Challenge

      .section
        h1.title Downloads
        p To reduce data preprocessing time, we have prepared all image frames and annotations in 360p resolution. We provide download links for annotated image frames (6fps) as well as raw image frames (30fps).
        .container.download(v-for="download in downloads")
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
    text: 'Train-Val Images and Annotations',
    annotated_frames: [{
      link: 'https://drive.google.com/drive/folders/1bI5J1H3mxsIGo7Kp-pPZU8i6rnykOw7f?usp=sharing',
      text: 'Google Drive',
      icon: 'google-drive',
    }, {
      link: 'https://pan.baidu.com/s/14cEAXYqSm125TuUjLCv53Q',
      text: 'Baidu Pan',
      icon: 'cloud-download',
    }, {
      link: 'https://uillinoisedu-my.sharepoint.com/:f:/g/personal/yuchenf4_illinois_edu/EmVCEOLTPudFkx8uE8Jn6FIBJSVpt1M4WvdebW91FHvJYA?e=7DbPyT',
      text: 'One Drive',
      icon: 'onedrive',
    }]
  }, {
    text: 'Test-Dev - Images and First Frame Annotations',
  }, {
    text: 'Test-Challenge - Images and First Frame Annotations'
  }]
}
</script>
