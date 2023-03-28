import {createApp} from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";

var router = VueRouter.createRouter({
  //what route we will support
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: "/",

      //component that we render with ths route
      component: function () {
        return import("./components/MainView.vue");
      },
    },
    {
      path: "/list",
      component: function () {
        return import("./components/UserSelect/ListView.vue");
      },
    },
    //this is Regex, i fno path matches, redirect to"""
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

var app = createApp(App);

app.use(router);

app.mount("#app");
