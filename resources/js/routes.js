import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Post from "./views/Post";
import error from "./views/404";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            // component: require("./views/Home").default
            component: Home
        },
        {
            path: "/blog",
            name: "blog",
            // component: require("./views/Blog").default
            component: Blog
        },
        {
            path: ":slug",
            name: "post",
            // component: require("./views/Post").default,
            component: Post,
            props: true
        },

        {
            path: "*",
            // component: require("./views/404")
            component: error
        }
    ],
    mode: "history"
});
