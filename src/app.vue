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
  .nav-item {
    transition: all 0.5s linear;
  }
}
</style>
<template lang="pug">
#app
  header#nav.hero.is-primary
    .hero-body: .container
      h1.title Youtube Video Object Segmentation
    .hero-foot
      nav.tabs.is-boxed.is-full-width: .container: ul
        li(v-for="item in menu"
        :class="{'is-active': route == item.to}")
          router-link.nav-item(:to='item.to') {{ item.text }}
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
    {text: 'home', to: '/'},
    {text: 'challenge', to: '/challenge'},
    {text: 'download', to: '/download'},
    {text: 'explore', to: '/explore'},
    {text: 'benchmark', to: '/benchmark'},
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
