<template>
  <section v-if="article">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <article>
      <div class="block">
        <header>
          <button href="#"  v-on:click="navigateBack()">Go Back</button>

          <img
            v-if="article.image"
            v-bind:src="article.image"
            v-bind:alt="article.headline"
          />
          <img v-else v-bind:alt="article.headline" />
        </header>
        <h2>{{ article.headline }}</h2>
        <pre><i class="fa fa-comment-o"></i>  <i class="fa fa-calendar">  </i>{{ article.created }}</pre>
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
  margin: 20vh auto;

  font-family: "Courgette", cursive;
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
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  object-fit: cover;
}
section article aside {
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.75;
}
section article .content {
  line-height: 1.5em;
  font-size: 1.2em;
  text-align: left;
  padding: 40px 30px 10px;
}
$yellow: #fbc831;
.content /deep/ h1 {
  line-height: 1.2em;
  font-size: 1.618em;
  color: $yellow;
}
h2 {
  padding: 40px 30px 10px;
  text-align: left;
  margin-top: -1vh;
  font-size: 2.618em;
  color: $yellow;
}
button {
  color: #fbc831;
  font-family: "Bitter", serif;
  text-shadow: 3px 3px 3px #d17b0f;
  background: rgba(0, 113, 0, 1.2);
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  height: auto;
  font-size: 2em;
  font-weight: 800;
  text-align: center;
  width: auto;
  margin-left: 7vw;
  margin-right: 5vw;
  z-index: 1;
  flex: 0 1 auto;
  position: absolute;
}
button:hover {
  transition: all 0.5s ease;
  /*background:#4BA62A;*/
  background-image: linear-gradient(
    to left,
    #007100,
    #1b7e0c,
    #2d8b17,
    #3c9821,
    #4ba62a
  );
  transform-origin: 0% 50%;
  transform: rotateY(4deg) rotateZ(1deg);
}
button:active {
  /*background:#4BA62A;*/
  transition: all 0.1s ease;
  background: black;
}
</style>
