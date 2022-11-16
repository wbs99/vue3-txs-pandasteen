import { Forth } from '../components/welcomes/Forth';
import { Third } from './../components/welcomes/Third';
import { Second } from './../components/welcomes/Second';
import { First } from './../components/welcomes/First';
import { WelcomePage } from './../pages/WelcomePage';
import { NotFoundPage } from './../pages/NotFoundPage';

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { FirstActions } from '../components/welcomes/FirstActions';
import { ForthActions } from '../components/welcomes/ForthActions';
import { SecondActions } from '../components/welcomes/SecondActions';
import { ThirdActions } from '../components/welcomes/ThirdActions';

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: '/welcome', component: WelcomePage,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', components: { main: First, footer: FirstActions } },
      { path: '2', components: { main: Second, footer: SecondActions } },
      { path: '3', components: { main: Third, footer: ThirdActions } },
      { path: '4', components: { main: Forth, footer: ForthActions } },
    ]
  },
  { path: "/:pathMatch(.*)", component: NotFoundPage },
]
const history = createWebHashHistory()

export const router = createRouter({ history, routes })
