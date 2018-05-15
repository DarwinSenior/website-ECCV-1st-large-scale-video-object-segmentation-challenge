<style lang='scss'>
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  main {
    flex: 1;
    overflow: auto;
  }
  nav.tabs {
    overflow: visible;
  }
  .nav-item {
    transition: all 0.5s linear;
    &.active {
      background-color: white;
      color: #e34c26;
    }
  }
  .dropdown-item {
    color: #e34c26;
    transition: all 0.5s linear;
    &.active {
      background-color: #e34c26;
      color: white;
    }
    .submenu { width: 100%; }
  }
}
</style>
<template lang="pug">
#app
  header#nav.hero.is-primary
    .hero-body: .container
      h1.title YouTube-VOS: A Large-Scale Benchmark for Video Object Segmentation
    .hero-foot
      nav.tabs.is-full-width.is-boxed: .container
        template(v-for="item in menu")
          .dropdown.nav-item(slot='trigger'
            v-if="!item.submenu"
            :class="{active: route.includes(item.to)}")
            router-link(:to="'/'+item.to") {{ item.text }}
          b-dropdown(hoverable v-if="item.submenu")
            .nav-item(slot='trigger' :class="{active: route.includes(item.to)}")
              router-link(:to="'/'+item.to")
                | {{ item.text }}
                b-icon(icon="menu-down" size="is-small")
            b-dropdown-item(
              :disabled="subitem.disabled"
              v-for="subitem in item.submenu"
              :class="{active: route.includes(subitem.to)}")
              router-link.submenu(
                :to="'/'+item.to+'/'+subitem.to" tag="span")
                | {{ subitem.text }}

  main.section
    router-view
  // footer.footer
  //   .container
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from 'vue-property-decorator';

@Component({ name: 'app' })
export default class App extends Vue {
  menu = [
    {text: 'Home', to: 'home'},
    {
      text: 'Dataset', to: 'dataset',
      submenu: [{
        text: 'Download', 'to': 'download'
      }, {
        text: 'Explore', 'to': 'explore'
      }],
    },
    {
      text: 'Challenge 2018', to: 'challenge',
      submenu: [{
        text: 'Home', to: 'home',
      },{
        text: 'Guidelines', to: 'guidelines',
      }, {
        text: 'Leaderboard', to: 'leaderboard',
        disabled: true,
      },{
        text: 'Workshop Program', to: 'program',
        disabled: true,
      } ],
    } 
  ]
  get route() {
    return this.$route.path;
  }
}
</script>

<style>
#app {
  min-height: 100vh;

}
</style>
