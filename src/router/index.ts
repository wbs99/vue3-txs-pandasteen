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
  { path: "/:pathMatch(.*)", component: NotFoundPage },
]
const history = createWebHashHistory()

export const router = createRouter({ history, routes })
