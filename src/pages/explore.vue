<style lang="scss" scoped>
#page-explore {
  display: flex;
  flex-flow: row;
  height: 100%;
  .explore-sidebar {
    width: 10%;
    min-width: 200px;
    max-height: 100%;
    overflow-y: scroll;
  }
  #content {
    flex: 1;
  }
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
  explore-sidebar(
    :groups="groups"
    :group.sync='group'
    :category.sync='cat'
  )
  section.section#content
    .container.grid
      .square(
        v-for="(frames, video) in videos"
        @click="cframe=1; cvideo=video; showModal=true")
        img.demo(:src="imgurl(video, 0)")
        div.banner {{video}}

  b-modal(:active.sync="showModal")
    .container.modal
      .card: .card-content(v-if="videos[cvideo]")
        .square
          img.image(:src="imgurl(cvideo, videos[cvideo][cframe])")
          img.annotation(
            :class="{ hide: !showAnnotation }"
            :src="annotationurl(cvideo, videos[cvideo][cframe])")
        b-pagination(
          :total="videos[cvideo].length-1"
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
  cvideo = ''
  cframe = 1
  cat = 'Tennis';
  group = 'Sports';

  get videos() {
    const {group, cat} = this
    if (!group || !cat) return {}
    return this.groups[group][cat]
  }

  imgurl(video: string, frame: number) {
    return `/static/demos/${video}/images/${frame}.jpg`
  }
  annotationurl(video: string, frame: number) {
    return `/static/demos/${video}/annotations/${frame}.png`
  }

  groups: any = {
    Sports: {
      Tennis: [], Bull_riding: [], Parachuting: [],
      Snowboarding: [], Skateboarding: [], Frisbee: [],
      Motorcycling: {
        '-t-NFaw9mv0_4': genframes(145),
        '-t-NFaw9mv0_5': genframes(145),
      }, Slopestyle: [], Surfing: []
    },
    Mamals: {
      Deer: [], Tiger: [],
      Giant_panda: [], Leopard: [],
      Sheep: [], Camel: [], Ape: [],
      Fox: {
        'bfypQW7frfc_1': genframes(145),
        'bfypQW7frfc_2': genframes(145),
        'bfypQW7frfc_3': genframes(145),
        'bfypQW7frfc_5': genframes(145),
      }, Hedgehog: [],
      Monkey: {
        '0pV_HO8Om0U_1': genframes(145),
        '0pV_HO8Om0U_4': genframes(145),
      },
      Rabbit: [], Squirrel: [],
    },
    Insects: {
      Ant: [], Snail: [],
      Butterfly: {
        '02Ad3UtMz7Y_1': genframes(175),
        'aJP-eBK8kY0_1': genframes(175),
      },
      Spider: []
    },
    Birds: {
      Owl: [], Eagle: [], Goose: [],
      Parrot: [], Penguin: [],
    },
    Fish: {
      Goldfish: [], Earless_seal: [], Jellyfish: [],
      Dolphin: [], Whale: [],
    },
    Reptile: {
      Frog: [],  Reptile: [], Chameleon: [],
      Snake: [], Lizard: [], Turtle: []
    }
  }
}
</script>
