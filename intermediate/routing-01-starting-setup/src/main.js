import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './pages/TeamsList';
import UsersList from './pages/UsersList';
import TeamMembers from './components/teams/TeamMembers';
// import NotFound from './pages/nav/NotFound';
import TeamsFooter from './pages/TeamsFooter';
import UsersFooter from './pages/UsersFooter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      // component: TeamsList,
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ], // /teams/t1
    },
    // { path: '/teams', component: TeamsList, alias: '/' },
    // { path: '/users', component: UsersList },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from), next();
      },
    },
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    // { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savePosition) {
    console.log(to, from, savePosition);
    if (savePosition) {
      return savePosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  next();
});

router.afterEach((to, from) => {
  //sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
