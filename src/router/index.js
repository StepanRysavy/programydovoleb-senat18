import Vue from 'vue';
import Router from 'vue-router';
import LayoutSearch from '@/components/layout-search/do';
import LayoutDetail from '@/components/layout-detail/do';
import LayoutCandidates from '@/components/layout-candidates/do';
import LayoutRegions from '@/components/layout-regions/do';
import LayoutCandidate from '@/components/layout-candidate/do';
import store from '@/store/store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: LayoutSearch
    },
    {
      path: '/kandidati',
      name: 'List of Candidates',
      component: LayoutCandidates
    },
    {
      path: '/kandidat/:id',
      name: 'Detail of Candidate',
      component: LayoutCandidate,
      props: true,
    },
    {
      path: '/obvody',
      name: 'List of Regions',
      component: LayoutRegions
    },
    {
      path: '/obvod/:id',
      name: 'Detail',
      component: LayoutDetail,
      props: true,
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.userAuth === -1) {
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

export default router;
