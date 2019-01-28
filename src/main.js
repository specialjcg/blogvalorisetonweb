import VueRouter from "vue-router";

import Vue from "vue";
import App from "./App.vue";
import ArticleList from "./components/ArticleList.vue";
import ArticleDetails from "./components/ArticleDetails.vue";
import About from "./components/About.vue";

// Install vue plugins

Vue.use(VueRouter);

// init graphql endpoint

// add the authorization to the headers

// Create apollo client and provider

// Define routes
const router = new VueRouter({
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
      path: "/article/:id",
      component: ArticleDetails,
      props: true
    }
  ]
});

// Init vue app (with the apollo provider)
new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
