<style lang="scss" scoped>
</style>

<template lang="pug">
#page-dataset
  section.section
    .container
      p Some details of our dataset are given as follows. Our videos are crawled from the YouTube-8M dataset which is a large-scale video classification dataset. We carefully select 76 categories from the whole category set of that dataset. The selected categories cover a span of different animals, vehicles, accessories and sports, which ensure that our dataset should contain diverse objects and motion, and should be representative for everyday scenarios. We then download more than 5000 videos and use video-shot-detection algorithms to partition each video into clips. Only one clip of each video whose length is about three to six seconds is kept. We also manually verify each clip to contain the correct categories and is good to use for our task (e.g.  no scene transition). We then ask human annotators to select up to five objects of proper size and categories per video and carefully annotate them every five frames to reduce the redundancy. Note that object boundaries in our dataset are carefully traced instead of using rough polygons, thus the annotation quality can be guaranteed.

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ChallengePage extends Vue {
}
</script>
