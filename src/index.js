// import mdi
import "@mdi/font/css/materialdesignicons.css"; // "/node_modules"直下として名前解決しているらしい

// Vueアプリケーションインスタンスを作成するために必要なimport
import { createApp } from "vue";
import App from "@/App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// vue-routerを機能させるために必要なimport
// 別の.jsファイルに分割し，importでrouterを渡してきても良い
import { createRouter, createWebHistory } from "vue-router";
import pageTop from "@/components/Top.vue";
import pageAbout from "@/components/About.vue";
import pageWorks from "@/components/Works.vue";
import pagePost from "@/components/Post.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: pageTop,
    },
    {
      path: "/about",
      component: pageAbout,
    },
    {
      path: "/works",
      component: pageWorks,
    },
    {
      path: "/posts/:post_id",
      component: pagePost,
    },
  ],
});

const app = createApp(App); // Vueアプリケーションインスタンス
app.use(vuetify); // vuetifyを使用
app.use(router); // vue-routerを適用
app.mount("#app"); // #appに一致する要素へマウント
