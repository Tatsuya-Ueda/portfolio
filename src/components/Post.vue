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
    fetchData() {
      fetch(`/portfolio/posts/${this.$route.params.post_id}.json`, {
        method: "GET",
      })
        .then((res) => {
          if (!res.ok) {
            console.log("Server error.");
          } else {
            // fetch成功時
            res
              .json()
              .then((json) => {
                this.html = json.html;
              })
              .catch((err) => {
                this.html = "<h1>Not Found</h1>";
                console.log("Fetch succeeded but couldn't load a post.", err);
              });
          }
        })
        .catch((err) => {
          console.log("Error.", err);
        });
    },
  },
};
</script>

<template>
  <div>記事ID: {{ $route.params.post_id }}</div>
  <div id="content" v-html="html"></div>
</template>

<style scoped></style>
