import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Heroes from '@/components/Heroes';
import HeroDetail from '@/components/HeroDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: HeroDetail,
    },
  ],
});
