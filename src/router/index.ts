import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/unocss",
      name: "unocss",
      component: () => import("../views/UnoCSSView.vue"),
    },
    {
      path: "/reactive",
      name: "reactive",
      component: () => import("../views/ReactiveAndRefView.vue"),
    },
  ],
});

export default router;
