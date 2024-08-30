import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      children: [
        { path: "/form", component: ()=>import('../views/FormView.vue') },
        {path: '/preview', component: () => import('../views/PreviewView.vue')},
      ]



    },
  ],
});

export default router;
