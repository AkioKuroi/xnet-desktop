export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },

  {
    path: "/signIn",
    name: "signIn",
    component: () => import("@/views/SigninView.vue"),
  },

  {
    path: "/signUp",
    name: "signUp",
    component: () => import("@/views/SignupView.vue"),
  },
];
