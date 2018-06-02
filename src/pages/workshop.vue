<style lang="scss" scoped>
#page-workshop {
  .speakers {
    .message-body {
      border-width: 0 0 0 4px;
      .left {
        margin-right: 20px;
        figure.image {
          width: 128px;
        }
      }
    }
  }
}
</style>

<template lang="pug">
#page-workshop
  section.section#display-section: .container
    .section
      h1.title Program
      h2.subtitle.has-text-grey-light ECCV2018, Munich, Germany
    .section
      h1.title.is-4 Invited Speakers (Tentatively)
      article.message.is-dark.speakers(v-for="speaker in speakers")
        .message-body.columns
          .left.column.is-narrow
            figure.image
              img(:src="'/static/speakers/'+speaker.photo+'.jpg'")
          .right.column
            p.is-size-5.has-text-weight-bold {{speaker.name}}
            p {{speaker.bio}}
    .section
      h1.title.is-4 Workshop schedule (Sep 14th afternoon)
      p To be scheduled.


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

  speakers = [{
    name: 'Jason Corso',
    bio: `Corso is an associate professor of Electrical Engineering and Computer Science at the
    University of Michigan. From 2007-14 he was a member of the Computer Science and
    Engineering faculty at SUNY Buffalo.  He is the recipient of a Google Faculty Research Award
    2015, the Army Research Office Young Investigator Award 2010, NSF CAREER award 2009,
    SUNY Buffalo Young Investigator Award 2011, a member of the 2009 DARPA Computer Science
    Study Group, and a recipient of the Link Foundation Fellowship in Advanced Simulation and
    Training 2003. Corso has authored 90+ peer-reviewed papers on topics of his research interest
    including computer vision, robot perception, data science, and medical imaging. He is an
    Associate Editor of PAMI, and a member of the AAAI, IEEE, ACM.`,
    photo: 'JasonCorso',
  }, {
    name: 'Chenliang Xu',
    bio: `Dr. Chenliang Xu is currently an Assistant Professor in the Department of Computer Science
    at the University of Rochester. He received his Ph.D. in Computer Science and Engineering at
    the University of Michigan in 2016. His research thrusts include computer vision and its relations
    to natural language, robotics, and data science. He primarily focuses on problems in video
    understanding such as video segmentation, activity recognition, and multimodal vision-and-x
    modeling. He also has broader interests in machine learning and deep learning.`,
    photo: 'ChenliangXu',
  }]
}
</script>
