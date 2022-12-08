import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/teams', component: TeamList },
    // { path: '/teams', component: TeamList, alias: '/' },
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    // { path: '/:notFound(.*)', redirect: '/teams' }
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);
app.use(router);

app.mount('#app');
