import Vue from "vue";
import Router from "vue-router";

import HomePage from './home.vue';
import ChallengePage from './challenge.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    }, {
      path: '/challenge',
      name: 'challenge',
      component: ChallengePage,
    }
  ],
});

