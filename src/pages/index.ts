import Vue from "vue";
import Router from "vue-router";

import HomePage from './home.vue';
import ChallengePage from './challenge.vue';
import DownloadPage from './download.vue';
import ExplorePage from './explore.vue';

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
    }, {
      path: '/download',
      name: 'download',
      component: DownloadPage,
    }, {
      path: '/explore',
      name: 'explore',
      component: ExplorePage,
    }
  ],
});

