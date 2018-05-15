<style lang="scss" scoped>
</style>

<template lang="pug">
#page-workshop
  section.section#display-section: .container    
    .section
      h1.title Program
    .section
      h1.title.is-4 Invited Speakers (Tentatively)
    .section
      h1.title.is-4 Workshop schedule (Sep 14th afternoon)
      p Will be available soon

    
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
