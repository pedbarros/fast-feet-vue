import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import { tokenHelper } from "@/helpers";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login")
  },
  {
    path: "/manage",
    name: "Manage",
    meta: { requiresAuth: true },
    redirect: { name: "Assignments" },
    component: () => import("@/layouts/Manage"),
    children: [
      {
        path: "assignments",
        name: "Assignments",
        redirect: { name: "ListAssignments" },
        component: () => import("@/views/EmptyRouterView.vue"),
        children: [
          {
            path: "/",
            name: "ListAssignments",
            component: () => import("@/views/Assignments/List")
          },
          {
            path: "/register",
            name: "RegisterAssignment",
            component: () => import("@/views/Assignments/Register")
          }
        ]
      },
      {
        path: "problems",
        name: "Problems",
        component: () => import("@/views/Problems")
      },
      {
        path: "deliverers",
        name: "Deliverers",
        redirect: { name: "ListDeliverers" },
        component: () => import("@/views/EmptyRouterView.vue"),
        children: [
          {
            path: "/",
            name: "ListDeliverers",
            component: () => import("@/views/Deliverers")
          },
          {
            path: "/register",
            name: "RegisterDelivery",
            component: () => import("@/views/Deliverers/Register")
          }
        ]
      },
      {
        path: "recipients",
        name: "Recipients",
        redirect: { name: "Recipients" },
        component: () => import("@/views/EmptyRouterView.vue"),
        children: [
          {
            path: "/",
            name: "ListRecipients",
            component: () => import("@/views/Recipients")
          },
          {
            path: "/register",
            name: "RegisterRecipient",
            component: () => import("@/views/Recipients/Register")
          }
        ]
      }
    ]
  },
  { path: "*", redirect: "/login" }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  if (
    to.matched.some(route => route.meta.requiresAuth) &&
    !tokenHelper.getToken()
  ) {
    next({ name: "Login", query: { name: to.name }, params: to.params });
  } else {
    if (Object.keys(store.state.auth.loggedUser).length === 0)
      await store.dispatch("auth/me");
    next();
  }
});

export default router;
