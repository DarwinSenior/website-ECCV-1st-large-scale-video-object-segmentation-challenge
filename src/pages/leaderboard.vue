<style lang="scss" scoped>
</style>

<template lang="pug">
#page-leaderboard

  section.section#display-section: .container.content
    .section
      h1.title Leaderboard
    .section
      li <strong>1st</strong>: Team Jono, RWTH Aachen University.
      li <strong>2nd</strong>: Team speeding_zZ, Huazhong University of Science and Technology & Horizon Robotics.
      li <strong>3rd</strong>: Team mikirui, the Chinese University of Hong Kong & Tencent YouTu X-Lab.
      li <strong>4th</strong>: Team hi.nineare, University of Texas at Austin & Preferred Networks.
      li <strong>5th</strong>: Team sunpeng, Zhejiang University & Renmin University of China & Institute of Remote Sensing and Digital Earth (RADI) & Chinese Academy of Sciences (CAS).
      li <strong>6th</strong>: Team random_name, ByteDance AI Lab.

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class LeaderboardPage extends Vue {
}
</script>
