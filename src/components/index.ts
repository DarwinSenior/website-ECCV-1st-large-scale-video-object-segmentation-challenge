import Vue from 'vue'

import '../assets/theme.scss'
import '../assets/main.scss'

import Buefy from 'buefy'

import ExploreSidebar from './explore-sidebar.vue'

Vue.use(Buefy)
Vue.component('explore-sidebar', ExploreSidebar)
