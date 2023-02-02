import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import TheTrale from "../views/TheTrale.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/thetrale",
      name: "TheTrale",
      component: TheTrale,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: '/*',
      component: 404,
      }
  ]
});


export default router;
