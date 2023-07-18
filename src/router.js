import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import ProjectIndex from "./pages/ProjectIndex.vue";
import ProjectShow from "./pages/ProjectShow.vue";
import AppAbout from "./pages/AppAbout.vue";
import App404 from "./pages/App404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectIndex,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: ProjectShow,
    },
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page404",
      component: App404,
    },
  ],
});
export { router };
