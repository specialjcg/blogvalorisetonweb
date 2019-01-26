<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <picture class="fondecran">
      <source
        srcset="../assets/trianglify.svg"
        type="image/svg+xml"
        alt="createur-de-site-internet sur mesure beaujolais oingt"
      />
      <img
        class="img1"
        src="../assets/trianglify.png"
        alt="createur-de-site-internet sur mesure beaujolais oingt"
      />
    </picture>
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
            <img
              v-if="article.image"
              class="img1"
              v-bind:src="article.image.url"
              v-bind:alt="article.headline"
              :id="imginfo(index)"
            />
            <img v-else v-bind:alt="article.headline" :id="imginfo(index)" />

            <div :id="titre2(index)">
              <h4>{{ article.headline }}</h4>
              <hr />
              <div class="commentaire">
                <pre><p><i class="fa fa-comment-o"></i>  <i class="fa fa-calendar"></i>  {{  mydatepost(article.created)  }}</p></pre>
              </div>
            </div>
            <div class="card-info" :id="cardinfo(index)">
              <p>{{ article.summary }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
    mydatepost(index) {
      var essai = new Date(index * 1000).toLocaleDateString();
      return essai;
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
      this.$router.push("article/" + id);
    }
  },
  apollo: {
    articles: {
      query: gql`
        {
          findArticles(
            sort: { field: "created", order: "DESC" }
            limit: 9
            page: 1
          ) {
            result {
              id
              created
              headline
              summary
              image {
                url
              }
            }
          }
        }
      `,
      update: result => {
        return result.findArticles.result;
      }
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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.commentaire {
  top: 40vh;
  position: absolute;
  color: $txt-color;
}
.fondecran {
  position: fixed;

  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;

  margin: 0;
  padding: 0;
  top: 0;
  z-index: 0;
}

.container {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  left: 0;
  right: 0;

  margin: 0;
  padding: 0;
  top: 0;
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
  top: 20vh;
  left: 2vw;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  min-width: auto;
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
.buttercms {
  transition: all 0.5s ease;
}
.buttercms:hover {
  transform-origin: 10% 5%;
  transform: scale(1.05);
}
@media only screen and (min-width: 340px) {
  .blog-home {
    top: 28vh;
  }
  .titre1 {
    top: 15vh;
  }
  .img2 {
    top: 23vh;
    left: 20vw;
    width: 18vw;
    height: 5vh;
  }
}

@media only screen and (min-width: 640px) {
  .blog-home {
    top: 23vh;
  }
  .titre1 {
    top: 11vh;
  }
  .img2 {
    top: 18vh;
    left: 25vw;
    width: 18vw;
    height: 5vh;
  }
}
@media only screen and (min-width: 900px) {
  .titre1 {
    top: 11vh;
  }
  .img2 {
    top: 13.5vh;
    left: 35vw;
    width: 15vw;
    height: 5vh;
  }
}
@media only screen and (min-width: 1400px) {
  .titre1 {
    top: 10vh;
  }
  .img2 {
    top: 13.5vh;
    left: 25vw;
    width: 15vw;
    height: 5vh;
  }
}
</style>
