<style lang="scss" scoped>
#page-home {
  video {
    margin: auto;
    display: block;
  }
  .infos {
    background-color: #e44c27;
    color: white;
    border-radius: 5px;
    cursor: default;
    .tooltip {
      display: block;
    }
    .num {
      text-align: center;
      font-size: 2em;
      font-weight: bold;
    }
    .info {
      text-align: center;
    }
  }
}
</style>

<template lang="pug">
#page-home.page
  section.section#display-section: .container
    .section
      h1.title Introduction
      .columns
        .column(v-for="sample in samples")
          img(:src="'/static/samples/'+sample+'.jpg'")

      .columns
        .column(v-for="info in infos")
            .infos
              b-tooltip(:label="expandinfo(info)" type="is-light")
                .num  {{info.number}}
                .info {{info.unit}}
      p Video object segmentation, which targets at segmenting a particular object instance throughout the entire video sequence given only the object mask on the first frame, has attracted much attention from the vision community recently. However, we notice that the current datasets for video object segmentation have several limitations, i.e. limited number of videos and no separation between training and evaluation categories. To facilitate future research on this topic, we collected a large scale video segmentation datasets called Youtube-VOS (YouTube Video Object Segmentation). Our dataset contains 3,252 YouTube video clips featuring 78 categories covering common animals, vehicles, accessories and human activities. Each video clip is about 3 to 6 seconds long and often contains multiple objects, which are manually segmented by professional annotators. In addition, our test set contains 10 unique categories that do not exist in the training set and are used to evaluate the generalization ability of existing approaches on unseen categories.
      p To facilitate researches in video object segmentation in a large scale base, we will organize a workshop competition named "The 1st Large-scale Video Object Segmentation Challenge" at ECCV 2018. The competition will be based on the Youtube-VOS dataset. For details, please check out
        a(href='challenge') Challenge page
        |.

    .section
      h1.title Data Statistics
      p put a historgram of number of different categories, a histogram of video length

    .section
      h1.title Publication
    .section
      h1.title License
      p The annotations in this dataset belong to the organizers of the challenge and are licensed under a
        a(href='https://creativecommons.org/licenses/by/4.0/') Creative Commons Attribution 4.0 License
        |.
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class HomePage extends Vue {
  samples = ['bicycle1', 'fishtank1', 'mountain1']
  infos = [
    {
      number: 1000,
      unit: 'annotations',
    },
    {number: 49, unit: 'types of objects'},
    {number: 3759, unit: 'videos'},
    {number: 5, unit: 'objects per frame'},
  ]
  expandinfo(info: any) {
    return `The data set consists of ${info['number']} ${info['unit']}`
  }
}
</script>
