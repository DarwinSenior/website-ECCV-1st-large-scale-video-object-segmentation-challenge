<style lang="scss" scoped>
</style>

<template lang="pug">
#page-dataset
  section.section
    .container
    .section
      h1.title News

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
