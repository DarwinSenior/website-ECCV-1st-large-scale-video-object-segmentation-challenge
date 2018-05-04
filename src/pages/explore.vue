<style lang="scss" scoped>
#page-explore {
  .container.grid {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    .square {
      margin: 10px;
      position: relative;
      height: 200px;
      width: 300px;
      overflow: hidden;
      cursor: pointer;
      img.demo {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
      }
      .banner {
        display: block;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        color: white;
        font-size: larger;
        text-align: center;
        vertical-align: middle;
        transform: translateY(100%);
        transition: transform 0.5s ease;
      }
      &:hover {
        .banner {
          transform: translateY(0);
        }
      }
    }
  }
  .container.modal {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .square {
      position: relative;
      width: 600px;
      height: 400px;
      margin-bottom: 10px;
      img {
        position: absolute;
        height: 100%;
        width: 100%;
      }
      .annotation {
        opacity: 0.5;
        transition: opacity 0.5s ease;
      }
      .annotation.hide {
        opacity: 0;
      }
    }
  }
}
</style>

<template lang="pug">
#page-explore.explore
  section.section
    .container.grid
      .square(
        v-for="(frames, video) in videos"
        @click="cframe=1; cvideo=video; showModal=true")
        img.demo(:src="imgurl(video, 0)")
        div.banner {{video}}

  b-modal(:active.sync="showModal")
    .container.modal
      .card: .card-content
        .square
          img.image(:src="imgurl(cvideo, videos[cvideo][cframe])")
          img.annotation(
            :class="{ hide: !showAnnotation }"
            :src="annotationurl(cvideo, videos[cvideo][cframe])")
        b-pagination(
          :total="videos[cvideo].length"
          :current.sync="cframe"
          order="is-centered"
          :per-page="1"
          )
        .line
          b-switch(v-model='showAnnotation') annotation
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

function genframes(x: number) {
  const frames = [];
  for (let i = 0; i < x; i += 5) frames.push(i);
  return frames;
}

@Component
export default class ExplorePage extends Vue {
  showModal = false
  showAnnotation = true
  videos = {
    bull: genframes(175),
    butterfly: genframes(175),
    camel: genframes(175),
    chameleon: genframes(175)
  }
  cvideo = 'bull'
  cframe = 1

  imgurl(video: string, frame: number) {
    return `/static/demos/${video}_images/${frame}.jpg`
  }
  annotationurl(video: string, frame: number) {
    return `/static/demos/${video}_annotations/${frame}.png`
  }
}
</script>
