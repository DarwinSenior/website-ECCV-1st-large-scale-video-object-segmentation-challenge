<style lang="scss" scoped>
</style>

<template lang="pug">
#page-dataset
  section.section
    .container
    .section
      h1.title News

    .section

      h1.title Challenge
      h1.title.is-5 Time schedule
      p Test-Dev: June 2018 - Open end.

      p Test-Challenge: 18th Aug 2018 23:59 UTC - 3th Sep 2018 23:59 UTC.
    
      h1.title.is-5 Datasets
      li Train: 3000 sequences in XX categories.
      li Val: 200 sequences in XX categories that are the same as training set.
      li Test-Dev: 200 sequences in the XX training categories, and 100 sequences of 10 categories that are unseen in training.
      li Test-Challenge: Another 200 sequences in the XX training categories, and 100 sequences of 10 categories that are unseen in training.
      li RGB images and annotations for the labeled frames will be provided. We will also provide a download link for all image frames.
      
      h1.title.is-5 Evaluation Metric
      p Similar to previous video object segmentation challenge DAVIS, we will be using Region Jaccard (J) and Boundary F measure (F) as evaluation metric.  The overall ranking measures will be computed as the mean between J and F, both averaged over all objects. Note that we have some of the objects start appearing from the middle of videos, we will only compute the metrics after the first occurence of these objects.
      
      h1.title.is-5 Submission
      p Submission of evaluation results will be made through 
        a(href='https://competitions.codalab.org') CodaLab
        |.
      h1.title.is-5 Prizes

      h1.title.is-5 Papers
      li We will be inviting top-ranking teams to submit short technical papers. The template of the paper is the same as CVPR, but length will be limited to 6 pages including references.
      li All papers will be invited to the workshop in form of oral presentation or poster.
      li Accepted papers will be self-published in the web of the challenge.



    .section
      h1.title Workshop
      h1.title.is-5 Invited Speakers
      h1.title.is-5 Workshop program (Sep 14th afternoon)
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
export default class ChallengePage extends Vue {
organizers = [
  {name:'Ning Xu', affiliation:'Adobe Research', im_name:'Ning_Xu'},
  {name:'Linjie Yang', affiliation:'Snap Research', im_name:'LinjieYang'},
  {name:'Yuchen Fan', affiliation:'UIUC', im_name:'YuchenFan'},
  ]
}
</script>
