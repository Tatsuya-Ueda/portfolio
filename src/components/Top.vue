<script setup>
// viteではrequireが使えないため，importで代替する．
import imgIzumo from "@/assets/img/izumo.jpg";
</script>

<template>
  <h1>Welcome!!</h1>
  <v-card max-width="400"
    ><v-img :src="imgIzumo"></v-img>
    <v-card-text><small>国際学会で島根に行った際の写真</small></v-card-text>
  </v-card>
</template>

<style scoped>
.v-card-text {
  margin: 0;
  padding: 4px;
  text-align: center;
}
</style>
