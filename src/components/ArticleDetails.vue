<template>
  <div>
    <button class="button1" href="#" v-on:click="navigateBack()">
      Go Back
    </button>
    <section v-if="article">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link href="themes/prism.css" rel="stylesheet" />
      <article>
        <div class="block">
          <header>
            <img
              class="img1"
              v-if="article.image"
              v-bind:src="/blog/ + article.image"
              v-bind:alt="article.image"
            />
            <img v-else v-bind:alt="article.headline" />
          </header>
          <h1>{{ article.headline }}</h1>
          <pre><i class="fa fa-comment-o"></i>  <i class="fa fa-calendar">  </i>{{ article.created }}</pre>
          <div class="content" v-html="article.content"></div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import json from "./article/article.json";
import Prism from "prismjs";

export default {
  data() {
    return {
      article: {}
    };
  },
  mounted() {
    this.article = json[Number(this.$route.params.id) - 1];
  },
  updated: function() {
    Prism.highlightAll();
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

.img1 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;

  top: 0;
  left: 0;
  transition: opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
  z-index: 0;
}
.block {
  box-sizing: border-box;
  border-radius: 3px;
  height: 100%;
  background: white;
  box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
  overflow: hidden;
  position: relative;
  padding: 30px;
}
.block .back {
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  height: auto;
  display: inline-block;
  position: relative;
  top: 10px;
  left: 10px;
  padding: 7px 15px 5px;
  background: #3eaf7c;
  color: white;
  border-radius: 2px;
  line-height: 100%;
  text-transform: uppercase;
  text-decoration: none;
}
section {
  position: relative;
  max-width: 900px;
  margin: 25vh auto;

  font-family: "Merriweather";
}
section article {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}
section article .block {
  padding: 0;
  margin: 0;
}
section article header {
  height: 30vh;
  background: #333;
  text-align: center;
  overflow: hidden;
  line-height: 30vh;
  position: relative;
  margin-bottom: 40px;
}
section article img {
  width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
section article aside {
  font-size: 1em;
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
.content /deep/ h2 {
  line-height: 1.2em;
  font-size: 1.618em;
  color: $yellow;
  font-family: "Merriweather";
}
.content /deep/ p,
.content /deep/ ul {
  color: #54534f;
  font-family: "Merriweather";
  margin-top: 1em;
  line-height: inherit;
  line-height: 1.2em;
  font-size: 1.2em;
}
.content /deep/ pre > code {
  font-size: inherit;
  font-size: 0.7em;
  line-height: 1.2em;
}

h1 {
  font-family: "Six Caps";
  padding: 40px 30px 10px;
  text-align: left;
  margin-top: -1vh;
  font-size: 2.618em;
  color: $yellow;
}

section article .block > pre {
  padding: 0px 30px 0px;
  text-align: center;
  margin-top: 0vh;
}

.button1 {
  position: fixed;
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
  left: 0;
  width: auto;
  margin-top: 13vh;
  margin-left: 4vw;

  z-index: 1;
}
.button1:hover {
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
@media only screen and (min-width: 340px) {
  .button1 {
    font-size: 0.618em;
  }
  h1 {
    font-size: 2.618em;
  }
  section {
    margin: 35vh auto;
  }

  section article .content {
    line-height: 1.2em;
    font-size: 1em;
    text-align: left;
    padding: 40px 30px 10px;
  }
  .content /deep/ pre > code {
    font-size: inherit;
    font-size: 0.5em;
    line-height: inherit;
    line-height: 0.6em;
  }
}

@media only screen and (min-width: 1060px) {
  .button1 {
    font-size: 1.618em;
  }
  h1 {
    font-size: 2.618em;
  }
  section {
    margin: 25vh auto;
  }
  section article .content {
    line-height: 1.2em;
    font-size: 1em;
    text-align: left;
    padding: 40px 30px 10px;
  }
  .content /deep/ pre > code {
    font-size: inherit;
    font-size: 0.9em;
    line-height: inherit;
    line-height: 1.1em;
  }
}

@import "./article/prism.css";
</style>
