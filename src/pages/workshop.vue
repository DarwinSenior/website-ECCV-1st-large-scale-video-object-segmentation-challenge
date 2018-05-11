<style lang="scss" scoped>
</style>

<template lang="pug">
#page-workshop
  .section
    h1.title Workshop
    h1.title.is-5 Invited Speakers
    h1.title.is-5 Workshop Program (Sep 14th afternoon)
    p Will be available soon

  .section
    h1.title Organizers
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
export default class WorkshopPage extends Vue {

  organizers = [
    {name:'Ning Xu', affiliation:'Adobe Research', im_name:'Ning_Xu'},
    {name:'Linjie Yang', affiliation:'Snap Research', im_name:'LinjieYang'},
    {name:'Yuchen Fan', affiliation:'UIUC', im_name:'YuchenFan'},
  ]
}
</script>
