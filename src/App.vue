<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.resizeWindow); // リサイズ時発火
  },
  methods: {
    resizeWindow() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<template>
  <!-- 上部メニュー -->
  <nav>
    <!-- router-link -->
    <v-tabs height="40px">
      <router-link to="/">
        <v-tab slider-color="orange-darken-4" color="orange-darken-4" elevation="4" text="Top" />
      </router-link>
      <router-link to="/about">
        <v-tab slider-color="orange-darken-4" color="orange-darken-4" elevation="4" text="About" />
      </router-link>
      <router-link to="/works">
        <v-tab slider-color="orange-darken-4" color="orange-darken-4" elevation="4" text="Works" />
      </router-link>
    </v-tabs>
    <!-- 間を空ける -->
    <v-spacer></v-spacer>
    <!-- ボタン -->
    <v-btn v-if="windowWidth >= 1024" variant="flat" size="x-small" density="comfortable" icon="mdi-monitor" elevation="0"></v-btn>
    <v-btn
      v-else-if="windowWidth >= 425"
      variant="flat"
      size="x-small"
      density="comfortable"
      icon="mdi-tablet-cellphone"
      elevation="0"></v-btn>
    <v-btn v-else variant="flat" size="x-small" density="comfortable" icon="mdi-cellphone" elevation="0"></v-btn>
  </nav>
  <div id="nav-spacer"></div>
  <!-- メニュー以下 -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div id="main-content" :key="route.fullPath">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<style>
/* scopedでない限り，ここがすべてに適用されるstyleになる...？ */

/* Base Style */
@media all {
  html,
  body {
    width: 100%;
    height: 100%;
  }
  #app {
    /* 個人的な好みから，ユニバーサルデザインフォントを最優先にする */
    /* 最終的には，ほぼ全てのウェブサイトが採用しているといわれる sans-serif にフォールバックさせる */
    /* 英字はRobotoがかっこいいが，WebFontなので若干a11yに影響する */
    font-family: "BIZ UDPGothic", "Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo", "sans-serif";
    /* 多くのブラウザのデフォルトでは，16pxが主流らしい．あえて明示する */
    font-size: 16px;
    line-height: 1.75;
    color: #212121; /* grey-darken-4*/
  }
  nav {
    top: 0;
    width: 100%;
    height: 40px;
    padding: 0px 12px 0px 12px;
    background-color: #ffcc80; /* orange-lighten-3 */
    /* 画面上の位置を固定し，必ず前面に表示されるようにする */
    position: fixed;
    z-index: 100;
    /* 子要素をflexにして中央揃えかつ横並びにする */
    display: flex;
    align-items: center;
    /* v-cardにするのが面倒なので，elevationの代わり */
    box-shadow: 0px 2px 8px grey; /* 右0px，下2px，ぼかし8px */
  }
  nav .v-tab {
    text-transform: none !important;
    min-width: 0 !important;
    font-weight: bold;
    padding: 0px 10px 0px 10px;
    margin: 0;
    /* 非アクティブ時の文字色．アクティブ時の文字色はタグ側で指定する． */
    color: #212121; /* grey-darken-4*/
  }
  #nav-spacer {
    top: 0;
    width: 100%;
    height: 40px;
  }
  /* メインコンテンツ */
  /* iPhone SEだと小さいので，できるだけh1のfont-sizeは小さくする． */
  /* その代わりにpaddingで幅を調整し，見出しの大小の印象を与える． */
  /* 見出しは16pxマージン，ulやimgは8pxマージン． */
  h1 {
    padding: 4px 0px 4px 10px;
    margin: 16px 0px 16px 0px;
    border-left: 6px groove #757575; /* grey-darken-1 */
    font-size: 150%;
  }
  h2 {
    padding: 0px 0px 0px 10px;
    margin: 16px 0px 16px 0px;
    border-left: 6px double #bdbdbd; /* grey-lighten-1 */
    font-size: 120%;
  }
  h3 {
    padding: 0px 0px 0px 14px;
    margin: 16px 0px 16px 0px;
    border-left: 2px solid #bdbdbd; /* grey-lighten-1 */
    font-size: 100%;
  }
  img {
    /* img要素はインライン要素で，デフォルトの設定だとbaselineの下にはみ出た分の余白ができるため変更． */
    vertical-align: top;
    /* 表示できない場合，グレーアウトしているように見せる． */
    background-color: grey;
  }
  ul {
    width: fit-content;
    margin: 8px 0px 8px 0px;
    padding: 0;
    line-height: 1.75;
  }
  ul li {
    width: fit-content;
    list-style-position: inside; /* リストの点を，要素の内側に指定． */
    /* REVIEW: li要素で「1字だけぶら下げ」を実現する方法がよくわかっていない */
    padding-left: 0.4em;
    text-indent: -0.4em;
  }
  #main-content {
    padding: 0px 16px 0px 16px;
  }
  /* トランジション */
  /* Vue.jsの組み込みcomponentである<Transition>に，nameを付けて使用したため，このcssセレクタを使う */
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
}

/* Tablet Style */
/* min-width 以上の場合に適用される．「425px以上は」タブレットとみなす． */
@media screen and (min-width: 425px) {
  #mq {
    display: none;
  }
}
/* Desktop  Style */
/* min-width 以上の場合に適用される．「1024px以上は」パソコンとみなす． */
@media screen and (min-width: 1024px) {
  #mq {
    display: none;
  }
}
</style>
