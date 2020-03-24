import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login")
  },
  {
    path: "/manage",
    component: () => import("@/layouts/Manage"),
    children: [
      {
        path: "assignments",
        name: "Assignments",
        component: () => import("@/views/EmptyRouterView.vue"),
        children: [
          {
            path: "",
            name: "ListAssignments",
            component: () => import("@/views/Assignments/List")
          },
          {
            path: "register",
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
        component: () => import("@/views/EmptyRouterView.vue"),
        children: [
          {
            path: "",
            name: "ListDeliverers",
            component: () => import("@/views/Deliverers")
          },
          {
            path: "register",
            name: "RegisterDelivery",
            component: () => import("@/views/Deliverers/Register")
          }
        ]
      },
      {
        path: "recipients",
        name: "Recipients",
        component: () => import("@/views/EmptyRouterView.vue"),
        children: [
          {
            path: "",
            name: "ListRecipients",
            component: () => import("@/views/Recipients")
          },
          {
            path: "register",
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

export default router;
