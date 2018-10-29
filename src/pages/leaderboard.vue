<style lang="scss" scoped>
</style>

<template lang="pug">
#page-leaderboard

  section.section#display-section: .container.content
    .section
      h1.title Leaderboard
    .section
      h1.title.is-4 <strong>Competition Information</strong>
      table#name-perf-rank
        tr
          th Team Name
          th Overall
          th J_seen
          th J_unseen
          th F_seen
          th F_unseen
          th Rank
        tr
          td #[strong Jono]
          td #[strong 0.722 (1)]
          td #[strong 0.737 (1)]
          td #[strong 0.648 (2)]
          td #[strong 0.778 (1)]
          td #[strong 0.725 (2)]
          td #[strong 1st]
        tr
          td #[strong speeding_zZ]
          td #[strong 0.720 (2)]
          td #[strong 0.725 (3)]
          td #[strong 0.663 (1)]
          td #[strong 0.752 (3)]
          td #[strong 0.741 (1)]
          td #[strong 2nd]
        tr
          td #[strong mikirui]
          td #[strong 0.699 (3)]
          td #[strong 0.736 (2)]
          td #[strong 0.621 (4)]
          td #[strong 0.755 (2)]
          td #[strong 0.684 (4)]
          td #[strong 3rd]
        tr
          td hi.nine
          td 0.684 (4)
          td 0.706 (5)
          td 0.623 (3)
          td 0.728 (5)
          td 0.677 (5)
          td 4th
        tr
          td sunpeng
          td 0.672 (5)
          td 0.707 (4)
          td 0.598 (6)
          td 0.736 (4)
          td 0.648 (6)
          td 5th
        tr
          td random_name
          td 0.672 (6)
          td 0.672 (6)
          td 0.609 (5)
          td 0.709 (6)
          td 0.697 (3)
          td 5th
        tr
          td kduarte
          td 0.539 (7)
          td 0.594 (7)
          td 0.483 (7)
          td 0.578 (7)
          td 0.502 (7)
          td 7th
        tr
          td SnowFlower
          td 0.448 (8)
          td 0.513 (8)
          td 0.367 (8)
          td 0.494 (8)
          td 0.419 (8)
          td 8th
    .section
      h1.title.is-4 <strong>Team Information</strong>
      p Note: * means equal contribution
      table#team-report
        tr
          th Team Name
          th Team Members
          th Organization
          th Abstract
          th Technical Report
        tr
          td Jono
          td Jonathon Luiten, Paul Voigtlaender, Bastian Leibe
          td Computer Vision Group, RWTH Aachen University, Germany
          td <a href="/static/abstract/Jono.txt">Abstract</a>
          td <a href="/static/reports/Jono.pdf">Tech Report</a>
        tr
          td speeding_zZ
          td Zilong Huang*, Qiang Zhou*, Lichao Huang, Han Shen, Yongchao Gong, Chang Huang, Wenyu Liu, Xinggang Wang
          td Huazhong University of Science and Technology, Horizon Robotics
          td <a href="/static/abstract/speeding_zZ.txt">Abstract</a>
          td N/A
        tr
          td mikirui
          td Huaijia Lin*, Ruizheng Wu*, Xiaogang Xu, Xiaojuan Qi, Jiaya Jia
          td The Chinese University of Hong Kong & Tencent YouTu X-Lab
          td <a href="/static/abstract/mikirui.txt">Abstract</a>
          td <a href="/static/reports/PMSNet.pdf">Slides</a>
        tr
          td hi.nine
          td Wonjoon Goo
          td University of Texas at Austin & Preferred Networks
          td <a href="/static/abstract/hi.nine.txt">Abstract</a>
          td N/A
        tr
          td sunpeng
          td Peng Sun, Mingyu Ding, Guangliang Cheng,  Xi Li
          td Zhejiang University & Renmin University of China & Institute of Remote Sensing and Digital Earth (RADI) & Chinese Academy of Sciences (CAS)
          td <a href="/static/abstract/sunpeng.txt">Abstract</a>
          td N/A
        tr
          td random_name
          td Cunbin Gui, Qi Chen, Qili Deng
          td ByteDance AI Lab
          td <a href="/static/abstract/random_name.txt">Abstract</a>
          td N/A
        tr
          td kduarte
          td N/A
          td N/A
          td N/A
          td N/A
        tr
          td SnowFlower
          td Qiong Wang
          td Univ Rennes, INSA Rennes, CNRS, IETR (Institut d'Electronique et de Telecommunication de Rennes) - UMR 6164, F-35000 Rennes, France
          td <a href="/static/abstract/snowflower.txt">Abstract</a>
          td N/A
    

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class LeaderboardPage extends Vue {
}
</script>
