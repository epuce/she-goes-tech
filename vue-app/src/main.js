import {createApp} from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

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
// we add Trash icon from the library
library.add(faTrash);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
