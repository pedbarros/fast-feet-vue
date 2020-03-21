import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/manage",
    component: () => import("@/layouts/Manage"),
    children: [
      {
        path: "assignments",
        name: "Assignments",
        component: () => import("@/views/Assignments")
      },
      {
        path: "problems",
        name: "Problems",
        component: () => import("@/views/Problems")
      }
    ]
  },
  { path: "*", redirect: "/login" }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
