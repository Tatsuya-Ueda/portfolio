<script></script>

<template>
  <h1>プロフィール</h1>
  <v-card>
    <v-card-text>
      <div id="summary">
        <div style="width: fit-content">
          <small>
            うえだたつや&nbsp;
            <span class="nw">/ Tatsuya Ueda</span>
          </small>
          <p id="sign-kanji" class="text-h5">上田 達也</p>
        </div>
        <v-spacer></v-spacer>
        <v-avatar size="x-large"><v-img src="https://github.com/identicons/Tatsuya-Ueda.png"></v-img></v-avatar>
      </div>
      <ul>
        <li>
          <span class="nw">電気通信大学</span>
          &nbsp;
          <span class="nw">情報理工学研究科</span>
          &nbsp;
          <span class="nw">情報学専攻 修士1年</span>
        </li>
        <li>
          趣味：Beatmania，PCゲーム
          <v-tooltip activator="parent" location="bottom"><p>Minecraft，Terraria，Fallout4，Satisfactory，ほか</p></v-tooltip>
        </li>

        <li>
          習慣：ランニング，プログラミング
          <v-tooltip activator="parent" location="bottom">
            <p>現在も続けている習慣です． マイブームは１か月ほどでころころ変わります．</p>
            <p>Pygame，Pyglet，Pixi.jsを触っていた時期もあれば， Stable Diffusionでのイラスト生成にハマっていた時期もあります．</p>
            <p>多肉植物を育てていたこともあります（今も世話をしています）．</p>
          </v-tooltip>
        </li>
        <li>
          <span>音楽：集中したいときは必ず</span>
          <a href="https://open.spotify.com/playlist/0km7VMff206TQl1XIJjify?si=19a296a0f76c40c8" target="_blank">これ</a>
          <v-tooltip activator="parent" location="bottom">
            <p>骨伝導イヤホンで聞くととても集中できます．</p>
          </v-tooltip>
        </li>
        <li>
          お酒：甘いリキュールをストレートで
          <v-tooltip activator="parent" location="bottom">
            <p>ピニャコラーダが今まで飲んだ中で一番好きです．</p>
          </v-tooltip>
        </li>
      </ul>
      <v-btn
        variant="flat"
        size="large"
        density="compact"
        icon="mdi-github"
        elevation="2"
        href="https://github.com/Tatsuya-Ueda"
        target="_blank"></v-btn>
      <v-btn
        style="margin-left: 4px"
        variant="flat"
        size="large"
        density="compact"
        icon="mdi-open-in-new"
        elevation="2"
        href="https://lapras.com/public/1GU07MN"
        target="_blank"></v-btn>
      <v-btn
        style="margin-left: 4px"
        variant="flat"
        size="large"
        density="compact"
        icon="mdi-open-in-new"
        elevation="2"
        href="https://atcoder.jp/users/actat"
        target="_blank"></v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>
/* 折り返し禁止 no-wrap span */
.nw {
  display: inline-block;
}
#summary {
  /* 子要素をflexにして中央揃えかつ横並びにする */
  display: flex;
  align-items: center;
  max-width: 275px;
}
#summary #sign-kanji {
  width: fit-content;
}
</style>
