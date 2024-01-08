<script>
export default {
  data() {
    return {
      content: "",
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
      let res = await fetch("/portfolio/posts/dummy.json");
      this.content = await res.json();
    },
  },
};
</script>

<template>
  <div>記事ID: {{ $route.params.post_id }}</div>
  <div id="content">{{ content }}</div>
</template>

<style scoped></style>
