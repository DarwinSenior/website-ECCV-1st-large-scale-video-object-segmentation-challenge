<style lang="scss" scoped>
</style>

<template lang="pug">
#page-dataset
  section.section#display-section: .container
    .section
      h1.title The 1st Large-scale Video Object Segmentation Challenge
    .section
      h1.title.is-5 News
    .section
      h1.title.is-5 Time schedule
      p Test-Dev: June 2018 - Open end.

      p Test-Challenge: 18th Aug 2018 23:59 UTC - 3th Sep 2018 23:59 UTC.
    .section
      h1.title.is-5 Guideline
      p For detailed guidelines, please check our 
        a(href='/challenge/guidelines') Guidelines
        |.
    .section
      h1.title.is-5 Organizers
      .columns
        .column(v-for="organizer in organizers")
          figure.image.is-128x128
            img.is-rounded(:src="'/static/organizers/'+organizer.im_name+'.jpg'")
          p.is-size-7-desktop {{organizer.name}}
          p.is-size-7-desktop {{organizer.affiliation}}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ChallengePage extends Vue {
  organizers = [
    {name:'Ning Xu', affiliation:'Adobe Research', im_name:'Ning_Xu'},
    {name:'Linjie Yang', affiliation:'Snap Research', im_name:'LinjieYang'},
    {name:'Yuchen Fan', affiliation:'UIUC', im_name:'YuchenFan'},
  ]
}
</script>
