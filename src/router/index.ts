import { Forth } from '../components/welcomes/Forth';
import { Third } from './../components/welcomes/Third';
import { Second } from './../components/welcomes/Second';
import { First } from './../components/welcomes/First';
import { WelcomePage } from './../pages/WelcomePage';
import { NotFoundPage } from './../pages/NotFoundPage';

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: '/welcome', component: WelcomePage,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', component: First },
      { path: '2', component: Second },
      { path: '3', component: Third },
      { path: '4', component: Forth },
    ]
  },
  { path: "/:pathMatch(.*)", component: NotFoundPage },
]
const history = createWebHashHistory()

export const router = createRouter({ history, routes })
