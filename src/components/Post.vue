<script>
export default {
  data() {
    return {
      html: "",
    };
  },
  created() {
    // viewが作成された直後にデータを取得する．
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    async fetchData() {
      let res = await fetch(`/portfolio/posts/dummy_${this.$route.params.post_id % 2}.json`);
      let json = await res.json();
      this.html = json.html;
    },
  },
};
</script>

<template>
  <div>記事ID: {{ $route.params.post_id }}</div>
  <div id="content" v-html="html"></div>
</template>

<style scoped></style>
