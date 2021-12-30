import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../Views/Home.vue";
import Result from "../Views/Result.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Result",
        name: "Result",
        component: Result,
    }
];

const router = new VueRouter({
    routes,
});

export default router;
