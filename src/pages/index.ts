import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './home.vue'
import ChallengePage from './challenge.vue'
import DownloadPage from './download.vue'
import ExplorePage from './explore.vue'
import WorkshopPage from './workshop.vue'
import GuidelinesPage from './guidelines.vue'
import DummyPage from './dummy.vue'
import NotFoundPage from './notfound.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      component: DummyPage,
      // component: ExplorePage,
    }, {
      path: '/challenge/challenge2018',
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
    }, {
      path: '/challenge/leaderboard',
      name: 'leaderboard',
      component: DummyPage,
    }, {
      path: '/404',
      component: NotFoundPage,
    }, {
      path: '*',
      redirect: '/404'
    },
  ],
});

