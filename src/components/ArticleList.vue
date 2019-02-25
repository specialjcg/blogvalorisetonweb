<template>
  <div>
  <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    
    <div class="container">
     
      <div
        class="blog-home"
        v-for="(article, index) in articles"
        v-bind:key="article.id"
      >
       
        <article
          @mouseenter="effaceTitre2(index)"
          @mouseleave="visibleTitre2(index)"
        >  

         <div v-on:click="navigateToArticle(article.id)">

        <router-link :to="{ name: 'blogarticle', params: {id:article.id} }" :key="$route.fullPath">
        
            <img
              v-if="article.image"
              class="img3"
             :src="article.image"
              :alt="article.image"
              :id="imginfo(index)"
            />
            <img v-else v-bind:alt="article.headline" :id="imginfo(index)" />

            <div :id="titre2(index)">
              <h4>{{ article.headline }}</h4>
              <hr />
              <div class="commentaire">
                <pre><p><i class="fa fa-comment-o"></i>  <i class="fa fa-calendar"></i>  {{  article.created }}</p></pre>
              </div>
            </div>
            <div class="card-info" :id="cardinfo(index)">
              <p>{{ article.summary }}</p>
            </div>
          </router-link></div>
        </article>
      </div>
       
    </div>
   
  </div>
</template>

<script>
import json from "./article/article.json";

export default {
  data() {
    return {
      articles: []
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.articles = json;
    },

    titre2(index) {
      var essai = "titre2" + index;

      return essai;
    },
    cardinfo(index) {
      var essai = "cardinfo" + index;

      return essai;
    },
    imginfo(index) {
      var essai = "imginfo" + index;

      return essai;
    },
    effaceTitre2(index) {
      document.getElementById("titre2" + index).style.opacity = 0;
      document.getElementById("cardinfo" + index).style.opacity = 1;
      document.getElementById("cardinfo" + index).style.bottom = "10vh";
      document.getElementById("imginfo" + index).style.opacity = 0.2;
    },
    visibleTitre2(index) {
      document.getElementById("titre2" + index).style.opacity = 1;
      document.getElementById("cardinfo" + index).style.opacity = 0;
      document.getElementById("cardinfo" + index).style.bottom = "25vh";
      document.getElementById("imginfo" + index).style.opacity = 1;
    },
    navigateToArticle(id) {
      this.$router.push(id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./font.css";

$card-width: 250px;
$card-height: 46.97vh;
$h-color: white;
$yellow: #fbc831;
$txt-color: white;

.commentaire {
  top: 40vh;
  position: absolute;
  color: $txt-color;
}

.container {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 60vw;
  max-height: auto;
  z-index: 0;
}

.card-info {
  width: 100%;
  position: absolute;
  bottom: 25vh;
  /*left: 0;
  margin: 0 auto;
  padding: 0 50px;*/
  color: $txt-color;
  font-family: "Courgette", cursive;
  font-size: 0.8em;
  line-height: 1.2em;
  z-index: 2;

  opacity: 0;
  transition: bottom 0.5s, opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.blog-home {
  width: $card-width;
  height: $card-height;
  position: relative;
  top: 22vh;
  left: 2vw;

  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  min-width: 20vw;
  align-self: flex-start;
  flex: 0 1 auto;
  background: black;
  margin: 1vw;
  transition: 0.4s ease-out;
  z-index: 2;
}

.blog-home:hover {
  transform: translateY(20px);
  /*background: rgba(black, 0.1);*/
}

.img1 {
  width: 100%;
  height: 100%;
  background-image: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
  z-index: 0;
}
.img3 {
  width: 100%;
  height: 25vh;
  background-image: cover;
  position: relative;
  top: 0;
  left: 0;
  transition: opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
  z-index: 0;
}
hr {
  position: relative;
  width: 11.08vw;
  height: 0.2vw;
  margin: 20px auto;
  border: 0;
  background: $yellow;
  z-index: 1;
}

a:link {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
p {
  margin: 1em 0 0.5em;
  font-family: "Courgette", cursive;
  font-weight: inherit;
  line-height: 1.2em;
}

h1 {
  font-size: 6.854em;
}

h2 {
  font-size: 4.236em;
}

h3 {
  font-size: 2.618em;
}

h4,
p {
  font-size: 1em;
  font-weight: 800;
  letter-spacing: 2px;
  color: $h-color;

  text-align: center;
  margin: 1em 0 0 0;
  position: relative;
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;
}
.img2 {
  position: absolute;
  top: 11vh;
  left: 23vw;
  width: 5vw;
  height: 5vh;
  margin-top: 0;
  margin-left: 1vw;
  background-image: linear-gradient(
    to left,
    #074270,
    #0e578f,
    #4482b2,
    #6da2ca
  );
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: middle;
}

@media only screen and (min-width: 340px) {
  .blog-home {
    top: 38vh;
  }
}

@media only screen and (min-width: 640px) {
  .blog-home {
    top: 28vh;
  }
}
</style>
