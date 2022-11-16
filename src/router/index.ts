import { NotFoundPage } from './../pages/NotFoundPage';
import { FooPages } from './../pages/FooPage';
import { BarPage } from './../pages/BarPage';

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/foo" },
  {
    path: '/foo', component: FooPages,
  },
  { path: '/bar', component: BarPage },
  { path: "/:pathMatch(.*)", component: NotFoundPage },
]
const history = createWebHashHistory()

export const router = createRouter({ history, routes })
