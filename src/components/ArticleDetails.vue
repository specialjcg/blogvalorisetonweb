<template>
  <section v-if="article">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <article>
      <div class="block">
        <header>
          <a href="#" class="back" v-on:click="navigateBack()">Go Back</a>

          <img
            v-if="article.image"
            v-bind:src="article.image"
            v-bind:alt="article.headline"
          />
          <img v-else v-bind:alt="article.headline" />
        </header>
        <h2>{{ article.headline }}</h2>
        <pre><i class="fa fa-comment-o"></i>  <i class="fa fa-calendar">  </i>{{ mydatepost(article.created) }}</pre>
        <div class="content" v-html="article.content"></div>
      </div>
    </article>
  </section>
</template>

<script>
import json from "./article/article.json";
export default {
  data() {
    return {
      articles: json,
      article: null
    };
  },
  mounted() {
    this.article = this.articles[Number(this.$route.params.id) - 1];
  },
  methods: {
    mydatepost(index) {
      var essai = new Date(index * 1000).toLocaleDateString();

      return essai;
    },
    navigateBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./font.css";
section {
  max-width: 900px;
  margin: 50px auto;
}
section article {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}
section article .block {
  padding: 0;
}
section article header {
  height: 300px;
  background: #333;
  text-align: center;
  overflow: hidden;
  line-height: 300px;
  position: relative;
  margin-bottom: 40px;
}
section article img {
  width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: middle;
}
section article aside {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.75;
}
section article .content {
  text-align: left;
  padding: 40px 30px 10px;
}
$yellow: #fbc831;
.content /deep/ h3 {
  line-height: 1em;
  font-size: 1.618em;
  color: $yellow;
}
h2 {
  margin-top: -1vh;
  font-size: 2.618em;
  color: $yellow;
}
</style>
