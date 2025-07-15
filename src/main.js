import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import MainProduk from "@/views/produk/Produk.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";
import Produk from "./layouts/Produk.vue";

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
      },
      {
        path: "/admin/settings",
        component: Settings,
        meta: { requiresAuth: true },
      },
      {
        path: "/admin/tables",
        component: Tables,
        meta: { requiresAuth: true },
      },
      {
        path: "/admin/maps",
        component: Maps,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/admin/produk",
    redirect: "/admin/dashboard",
    component: Produk, 
    children: [
      {
        path: "/admin/produk",
        name: "CategoryProduk",
        component: MainProduk,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        name: "Login",
        component: Login,
        meta: { requiresAuth: false },
      },
      {
        path: "/auth/register",
        name: "Register",
        component: Register,
        meta: { requiresAuth: false },
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    next({ name: "Login" });
  } else if ((to.name === "Login" || to.name === "Register") && token) {
    next({ name: "Dashboard" }); // redirect kalau sudah login
  } else {
    next();
  }
});

createApp(App).use(router).mount("#app");
