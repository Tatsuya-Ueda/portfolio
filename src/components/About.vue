<script setup>
// viteではrequireが使えないため，importで代替する．
</script>

<template>
  <h1>プロフィール</h1>
  <v-card>
    <v-card-text>
      <div id="summary">
        <div style="width: fit-content">
          <small
            >うえだたつや&nbsp; <span class="nw">/ Tatsuya Ueda</span></small
          >
          <p id="sign-kanji" class="text-h5">上田 達也</p>
        </div>
        <v-spacer></v-spacer>
        <v-avatar size="x-large"
          ><v-img src="https://github.com/identicons/Tatsuya-Ueda.png"></v-img>
        </v-avatar>
      </div>
      <ul>
        <li>
          <span class="nw">電気通信大学</span>&nbsp;
          <span class="nw">情報理工学研究科</span>&nbsp;
          <span class="nw">情報学専攻 修士1年</span>
        </li>
      </ul>
      <v-btn
        variant="flat"
        size="large"
        density="compact"
        icon="mdi-github"
        elevation="2"
        href="https://github.com/Tatsuya-Ueda"
      ></v-btn>
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
}
#summary #sign-kanji {
  width: fit-content;
}
</style>
