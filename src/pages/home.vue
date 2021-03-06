<style lang="scss" scoped>
#page-home {
  .figure {
    margin: auto;
  }
  video {
    margin: auto;
    display: block;
  }
  .section.news {
    li,p {
      font-weight: bold;
      color: #147ceb;
    }
  }
  .example {
    width: 80%;
    margin: auto;
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
  section.section#display-section: .container.content
    .section
      h1.title.is-4 YouTube-VOS

      p YouTube-VOS is the first large-scale dataset for video object segmentation. Our dataset contains 4000+ YouTube videos, 70+ common objects and densely-sampled high-quality pixel-level annotations. Some statistics of the dataset are shown below. <a href="https://arxiv.org/abs/1809.03327">More details can be found in the dataset report.</a>

    .section
      .columns
        .column(v-for="info in infos")
            .infos
              b-tooltip(:label="expandinfo(info)" type="is-light")
                .num  {{info.number}}
                .info {{info.unit}}

    .section
      p We hope that such a large-scale dataset can:
      ul
        li Overcome the data-insufficiency issue for video object segmentation as well as other low and mid-level video understanding tasks, and therefore foster more bold and complicated algorithms such as RNN, Reinforcement Learning etc.
        li Provide diverse training samples to help learn specific object characteristics in videos such as spatial-temporal coherence.
        li Provide more comprehensive evaluation results than existing datasets (For example, larger testing scale and better evaluation metrics).

      //p Video object segmentation, which targets at segmenting a particular object instance throughout the entire video sequence given only the object mask on the first frame, has attracted much attention from the vision community recently. However, we notice that the current datasets for video object segmentation have several limitations, i.e. limited number of videos and no separation between training and evaluation categories. To facilitate future research on this topic, we collected a large scale video segmentation datasets called Youtube-VOS (YouTube Video Object Segmentation). Our dataset contains 3,252 YouTube video clips featuring 78 categories covering common animals, vehicles, accessories and human activities. Each video clip is about 3 to 6 seconds long and often contains multiple objects, which are manually segmented by professional annotators. In addition, our test set contains 10 unique categories that do not exist in the training set and are used to evaluate the generalization ability of existing approaches on unseen categories.
      //p To facilitate researches in video object segmentation in a large scale base, we will organize a workshop competition named "The 1st Large-scale Video Object Segmentation Challenge" at ECCV 2018. The competition will be based on the Youtube-VOS dataset. For details, please check out
        router-link(to='/challenge/challenge2018') Challenge page
        |.


    .section.news
      h1.title.is-4 News
      ul
        li We have now released all the frames for the dataset
        li The competition is hosted on <a href="https://competitions.codalab.org/competitions/19544">codelab</a>. Please register an account on codalab to participate.
        li The training images and annotations are now available in
          router-link(to="/dataset/download")  download
          |  page. The competition guidelines can be found in
          router-link(to="/challenge/guidelines")  guidelines
          |  page.
        li We are carefully performing the final check of our dataset and will release it in mid June of 2018.
        li Check out our benchmark challenge
          router-link(to='/challenge/challenge2018')  "1st Large-scale Video Object Segmentation Challenge"
          |  which will be held in ECCV 2018!
    //.section
    //  h1.title Data Statistics
    //  p put a historgram of number of different categories, a histogram of video length


    //.section
    //  h1.title.is-4 Citation
    //  p Available soon!
    //  //p If you find our dataset is useful for your research, please cite:


    .section
      h1.title.is-4 Dataset Examples
      .columns.example
        div(v-for="sample in samples")
          img(:src="'/static/samples/'+sample+'_bike.jpg'")
          img(:src="'/static/samples/'+sample+'_fish.jpg'")
      p
        span For more examples, please
        router-link(to='/dataset/explore')  explore
        span  our dataset.


    .section
      h1.title.is-4 People
      .columns.flex-wrap
        div(v-for="organizer in organizers")
          figure.image.is-128x128
            img.is-rounded(:src="'/static/organizers/'+organizer.im_name+'.jpg'")
          p.has-text-centered
            a(:href="organizer.link") {{organizer.name}}
            br
            span {{organizer.affiliation}}

    .section
      h1.title.is-4 Citation
      | <pre><code>@article{xu2018youtube,
      | title={YouTube-VOS: A Large-Scale Video Object Segmentation Benchmark},
      | author={Xu, Ning and Yang, Linjie and Fan, Yuchen and Yue, Dingcheng and Liang, Yuchen and Yang, Jianchao and Huang, Thomas},
      | journal={arXiv preprint arXiv:1809.03327},
      | year={2018}
      | }</code></pre>

    .section
      h1.title.is-4 Contact
      p For <router-link to="/dataset/download">dataset</router-link> related questions, please feel free to contact
        a(href='mailto:ytvos@gmail.com')  ytbvos@gmail.com
        |.
      p For <router-link to="/challenge/challenge2018">challenge</router-link> related questions, you can
        | also use <a href="https://competitions.codalab.org/forums/16267/">codalab forums</a>.

    .section
      h1.title.is-4 License
      p The annotations in this dataset belong to the organizers of the challenge and are licensed under a
        a(href='https://creativecommons.org/licenses/by/4.0/')  Creative Commons Attribution 4.0 License
        |.

    .section
      h1.title.is-4 Sponsors
      .columns
        .column(v-for="sponsor in sponsors")
          figure.image.is-128x128
            img(:src="'/static/sponsors/'+sponsor.im_name")


</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class HomePage extends Vue {
  samples = ['sample1', 'sample2', 'sample3', 'sample4']
  infos = [
    {
      number: 4453,
      unit: 'Videos',
    },
    {number: 7822, unit: 'Unique Objects'},
    {number: 191378, unit: 'Human Annotations'},
    {number: 345, unit: 'Minutes'},
  ]
  expandinfo(info: any) {
    return `The data set consists of ${info['number']} ${info['unit']}`
  }

  organizers = [
    {
      name:'Ning Xu',
      affiliation:'Adobe Research',
      im_name:'NingXu',
      link: 'https://sites.google.com/view/ningxu/homepage'
    }, {
      name:'Linjie Yang',
      affiliation: 'Snap Research',
      im_name: 'LinjieYang'
    }, {
      name: 'Jianchao Yang',
      affiliation: 'Toutiao AI Lab',
      im_name: 'JianchaoYang'
    }, {
      name: 'Dingcheng Yue',
      affiliation: 'UIUC',
      im_name: 'DingchengYue'
    }, {
      name: 'Yuchen Fan',
      affiliation: 'UIUC',
      im_name: 'YuchenFan'
    }, {
      name: 'Yuchen Liang',
      affiliation: 'UIUC',
      im_name: 'YuchenLiang'
    }, {
      name: 'Thomas Huang',
      affiliation: 'UIUC',
      im_name: 'Tom'
    },
  ]

  sponsors = [
    {name:'Snapchat', im_name:'snapchat.jpg'},
    {name:'Adobe',  im_name:'adobe.png'},
    {name:'UIUC', im_name:'uiuc-alt.jpg'},
    {name:'CAS', im_name:'cas.jpg'},
  ]

}
</script>
