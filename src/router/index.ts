import { StartPage } from './../pages/StartPage';
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
import { ItemCreate } from '../components/items/ItemCreate';
import { ItemList } from '../components/items/ItemList';
import { ItemPage } from '../pages/ItemPage';
import { TagCreate } from '../components/tags/TagCreate';
import { TagEdit } from '../components/tags/TagEdit';
import { TagPage } from '../pages/TagPage';
import { SignInPage } from '../pages/SignInPage';
import { StatisticsPage } from '../pages/StatisticsPage';

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: '/welcome', component: WelcomePage,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', name: 'Welcome1', components: { main: First, footer: FirstActions } },
      { path: '2', name: 'Welcome2', components: { main: Second, footer: SecondActions } },
      { path: '3', name: 'Welcome3', components: { main: Third, footer: ThirdActions } },
      { path: '4', name: 'Welcome4', components: { main: Forth, footer: ForthActions } },
    ]
  },
  { path: "/start", component: StartPage },
  {
    path: '/items', component: ItemPage,
    children: [
      { path: '', component: ItemList },
      { path: 'create', component: ItemCreate },
    ]
  },
  {
    path: '/tags', component: TagPage,
    children: [
      { path: 'create', component: TagCreate },
      { path: ':id/edit', component: TagEdit }
    ]
  },
  {
    path: '/sign_in', component: SignInPage
  },
  {
    path: '/statistics', component: StatisticsPage
  },
  { path: "/:pathMatch(.*)", component: NotFoundPage },
]
const history = createWebHashHistory()

export const router = createRouter({ history, routes })
