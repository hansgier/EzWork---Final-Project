import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../views/LoginPage.vue";
import SignUpPage from "../views/SignUpPage.vue";
import HomePage from "../views/HomePage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import FavoritesPage from "../views/FavoritesPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Login",
            component: LoginPage
        },
        {
            path: "/projects",
            name: "Projects",
            component: ProjectPage
        },
        {
            path: "/favorites",
            name: "Favorites",
            component: FavoritesPage
        },
        {
            path: "/signup",
            name: "Sign Up",
            component: SignUpPage
        },
        {
            path: "/home",
            name: "Home",
            component: HomePage
        },    
    ],
});

export default router;
