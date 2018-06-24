<style lang='scss'>
#app {
  height: 100vh;
  width: 100vw;
  overflow: auto;
  /* display: flex; */
  /* flex-flow: column; */
  p, li {
    padding-bottom: 15px;
  }
  nav.tabs {
    overflow: visible;
    position: sticky;
    z-index: 20;
    top: -1px;
    background-color: #e34c26;
  }
  .nav-item {
    transition: all 0.5s linear;
    a {
      color: white;
      transition: background-color ease 0.5s;
    }
    a:hover {
      background-color: #f94118;
    }
    &.active {
      background-color: white;
      color: #e34c26;
      a {
        color: black;
      }
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
  header.hero.is-primary: .hero-body: .container
    h1.title YouTube-VOS: A Large-Scale Benchmark for Video Object Segmentation
  nav.tabs.is-full-width.is-boxed: .container.is-primary
    template(v-for="item in menu")
      .dropdown.nav-item(slot='trigger'
        v-if="!item.submenu"
        :class="{active: route.includes(item.to)}")
        router-link(:to="'/'+item.to") {{ item.text }}
      b-dropdown(hoverable v-if="item.submenu")
        .nav-item(slot='trigger' :class="{active: route.includes(item.to)}")
            a
              | {{ item.text }}
              b-icon(icon="menu-down" size="is-small")
        b-dropdown-item(
          :disabled="subitem.disabled"
          v-for="subitem in item.submenu"
          :class="{active: route.includes(subitem.to)}")
          router-link.submenu(
            v-if="!subitem.disabled"
            :to="'/'+item.to+'/'+subitem.to" tag="span")
            | {{ subitem.text }}
          span.submenu(v-if="subitem.disabled") {{subitem.text}}

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
        text: 'Download', 'to': 'download',
        disabled: false,
      }, {
        text: 'Explore', 'to': 'explore',
        disabled: true,
      }],
    },
    {
      text: 'Challenge 2018', to: 'challenge',
      submenu: [{
        text: 'ECCV Workshop', to: 'challenge2018',
      },{
        text: 'Guidelines', to: 'guidelines',
        disabled: false,
      },{
        text: 'Workshop Program', to: 'workshop',
      }, {
        text: 'Leaderboard', to: 'leaderboard',
        disabled: true,
      }, ],
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
