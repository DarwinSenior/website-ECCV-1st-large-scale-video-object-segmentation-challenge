import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './home.vue'
import ChallengePage from './challenge.vue'
import DownloadPage from './download.vue'
import ExplorePage from './explore.vue'
import WorkshopPage from './workshop.vue'
import GuidelinesPage from './guidelines.vue'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home',
    }, {
      path: '/home',
      name: 'home',
      component: HomePage,
    }, {
      path: '/dataset/download',
      name: 'download',
      component: DownloadPage,
    }, {
      path: '/dataset/explore',
      name: 'explore',
      component: ExplorePage,
    }, {
      path: '/challenge',
      name: 'challenge',
      component: ChallengePage,
    }, {
      path: '/challenge/workshop',
      name: 'workshop',
      component: WorkshopPage,
    }, {
      path: '/challenge/guidelines',
      name: 'guidelines',
      component: GuidelinesPage,
    }
  ],
});

