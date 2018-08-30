import Vue from 'vue';
import VueAnalytics from 'vue-ua';
import Router from 'vue-router';
import Home from '@/layout/home/do';
import Company from '@/layout/company/do';
import Event from '@/layout/event/do';
import Search from '@/layout/search/do';
import Admin from '@/layout/admin/do';
import Login from '@/layout/login/do';
import Static from '@/layout/static/do';
import store from '@/store/store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      props: true,
      component: Home
    },
    {
      path: '/ev/:id',
      name: 'Event',
      props: true,
      component: Event
    },
    {
      path: '/co/:id',
      name: 'Company',
      props: true,
      component: Company
    },
    {
      path: '/c/:id',
      name: 'Search by Category',
      props: (route) => {
        return {id: route.params.id, metaType: 'category'}
      },
      component: Search
    },
    {
      path: '/t/:id',
      name: 'Search by Tag',
      props: (route) => {
        return {id: route.params.id, metaType: 'tags'}
      },
      component: Search
    },
    {
      path: '/b/:id',
      name: 'Search by Block',
      props: (route) => {
        return {id: route.params.id, metaType: 'block'}
      },
      component: Search
    },
    {
      path: '/h/:id',
      name: 'Search by House',
      props: (route) => {
        return {id: route.params.id, metaType: 'house'}
      },
      component: Search
    },
    {
      path: '/info',
      name: 'Náš Jiřák Info',
      props: (route) => {
        return {id: 'about'}
      },
      component: Static
    },
    {
      path: '/gdpr',
      name: 'GDPR',
      props: (route) => {
        return {id: 'gdpr'}
      },
      component: Static
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      props: true,
      component: Admin,
      meta: {requiresAuth: true}
    },
  ],
});

router.beforeEach((to, from, next) => {

  store.state.showFeedback = false;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.user === -1) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

Vue.use(VueAnalytics, {
  appName: 'Náš Jiřák', // Mandatory
  appVersion: '1.1.0', // Mandatory
  trackingId: 'UA-123439794-1', // Mandatory
  debug: false, // Whether or not display console logs debugs (optional)
  // vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  // ignoredViews: ['homepage'], // If router, you can exclude some routes name (case insensitive) (optional)
  trackPage: true, // Whether you want page changes to be recorded as pageviews (website) or screenviews (app), default: false
  /** globalDimensions: [ // Optional
    {dimension: 1, value: 'MyDimensionValue'},
    {dimension: 2, value: 'AnotherDimensionValue'}
  ],
  globalMetrics: [ // Optional
      {metric: 1, value: 'MyMetricValue'},
      {metric: 2, value: 'AnotherMetricValue'}
    ] */
})

export default router;
