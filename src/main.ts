// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import app from "./app.vue"
import './components'
import router from './pages'

new Vue({
  el: "#app",
  router,
  template: "<app/>",
  components: { app },
});
