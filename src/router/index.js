import Vue from 'vue';
import Router from 'vue-router';
import LayoutHomepage from '@/layout/homepage/do';
import LayoutDetail from '@/layout/detail/do';
import LayoutCandidates from '@/layout/candidates/do';
import LayoutRegions from '@/layout/regions/do';
import LayoutCandidate from '@/layout/candidate/do';
import LayoutEdit from '@/layout/edit/do';
import LayoutStaticImpressum from '@/layout/static/impressum/do';
import LayoutStaticVoting from '@/layout/static/voting/do';
import LayoutStaticCookies from '@/layout/static/cookies/do';
import LayoutImage from '@/layout/image/do';
import LayoutImages from '@/layout/images/do';
import LayoutHash from '@/layout/hash/do';
import store from '@/store/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: LayoutHomepage
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: LayoutStaticImpressum
    },
    {
      path: '/hlasovani',
      name: 'Hlasování',
      component: LayoutStaticVoting
    },
    {
      path: '/cookies',
      name: 'Cookies',
      component: LayoutStaticCookies
    },
    {
      path: '/kandidati',
      name: 'List of Candidates',
      component: LayoutCandidates
    },
    {
      path: '/kandidati/:by',
      name: 'List of Candidates by Party',
      component: LayoutCandidates,
      props: true
    },
    {
      path: '/kandidat/:hash',
      name: 'Detail of Candidate',
      component: LayoutCandidate,
      props: true,
    },
    {
      path: '/kandidat/:hash/form',
      name: 'Edit Candidate',
      component: LayoutEdit,
      props: true,
    },
    {
      path: '/infografika',
      name: 'List of images',
      component: LayoutImages
    },
    {
      path: '/infografika/:hash',
      name: 'Detail of image',
      component: LayoutImage,
      props: true,
    },
    {
      path: '/hlasovani/:hash',
      name: 'Hlasovací lístek',
      component: LayoutHash,
      props: true,
    },
    {
      path: '/obvody',
      name: 'List of Regions',
      component: LayoutRegions
    },
    {
      path: '/obvod/:hash',
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
