import Vue from "vue";
import Router from "vue-router";
import ArticleList from "@/components/ArticleList.vue";
import ArticleDetails from "@/components/ArticleDetails.vue";
import About from "@/components/About.vue";

Vue.use(Router);

export default new Router({
  base: "/blog/",
  mode: "history",
  routes: [
    {
      path: "/",
      component: ArticleList
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/:id",
      name: "blogarticle",
      component: ArticleDetails,
      props: true
    }
  ]
});
