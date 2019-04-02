import Vue from "vue";
import Router from "vue-router";
import ArticleList from "@/components/ArticleList.vue";
import ArticleDetails from "@/components/ArticleDetails.vue";

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
      path: "/:id",
      name: "blogarticle",
      component: ArticleDetails,
      props: true
    }
  ]
});
