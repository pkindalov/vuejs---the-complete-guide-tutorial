import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      // component: TeamList,
      components: { default: TeamList, footer: TeamsFooter },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, //can be reach on /teams/t1
      ]
    },
    // { path: '/teams', component: TeamList, alias: '/' },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('Users before enter: ');
        console.log(to, from);
        next();
      }

      // component: UsersList
    },
    // { path: '/:notFound(.*)', redirect: '/teams' }
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  }
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!!');
    next();
  } else {
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: '/team-members', params: { teamId: 't2' } });
  // }
  next();
});

router.afterEach(function (to, from) {
  console.log('Global afterEach:');
  console.log(to, from);
  //-sending analytics data to for example or
  //-to log every navigation action
  //-to log when user changes pages
  //-you can't control what the user sees here, because it is too late. The navigation is already confirmed. Because of that you don't receive next() also.

});

const app = createApp(App);
app.use(router);

app.mount('#app');
