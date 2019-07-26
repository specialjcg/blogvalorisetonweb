<template>
  <div class="heade">
    <img src="../components/logo.png" class="logo" />

    <div class="nom">Valorisetonweb</div>
    <a
      class="expanderSocial"
      href="https://www.linkedin.com/in/gouleaujeancharles/"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <img
        src="../components/in.png"
        alt="création de site internet sur mesure"
        title="mon site linkedin"
      />
    </a>
    <a
      class="expanderSocial"
      href="https://github.com/specialjcg"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <img
        src="../components/GitHub-Mark-Light-32px.png"
        alt="création de site internet sur mesure"
        title="mon site GitHub"
      />
    </a>
    <a
      class="expanderSocial"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Facebook
        class="tablette_pc"
        url="https://valorisetonweb.fr"
        scale="3"
      ></Facebook>
      <Facebook
        class="smarphone"
        url="https://valorisetonweb.fr"
        scale="2"
      ></Facebook
    ></a>
    <a
      class="expanderSocial"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Twitter class="tablette_pc" :url="myurl()" scale="3"></Twitter>
      <Twitter class="smarphone" :url="myurl()" scale="2"></Twitter
    ></a>
    <a href="https://valorisetonweb.fr/contact"
      ><button class="devis">J'obtiens mon devis</button></a
    >
    <ul v-if="this.visible">
      <li>
        <a href="https://valorisetonweb.fr">Acceuil</a>
      </li>
      <li>
        <a href="https://valorisetonweb.fr/blog/1">A propos</a>
      </li>
      <li>
        <a href="https://valorisetonweb.fr/blog">blog</a>
      </li>
      <li>
        <a href="https://valorisetonweb.fr/portfolio">portfolio</a>
      </li>
      <li>
        <a href="https://valorisetonweb.fr/contact">contact</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Facebook, Twitter } from "vue-socialmedia-share";
export default {
  components: {
    Facebook,
    Twitter
  },
  name: "menue",
  data() {
    return {
      visible: true
    };
  },

  methods: {
    myurl() {
      return document.location.href;
    },
    menu1() {
      this.visible = !this.visible;
    }
  }
};
</script>
<style scoped>
@import "../components/font.css";

.heade {
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  min-height: auto;

  width: 100vw;
  flex-flow: row wrap;

  z-index: 7;
  background: #000000;
}
.tablette_pc {
  display: unset;
}
.smarphone {
  display: none;
}
.nom {
  flex: 0 1 auto;
  color: aliceblue;
  font-family: "Courgette", cursive;
  display: inline-block;
  top: 0;
  list-style-type: none;
  text-decoration: none;
  margin-left: 1vw;
  font-size: 2.618em;
  text-align: left;
}
li {
  float: left;
  /*pour IE*/
  margin-left: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
}

li a {
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  text-align: center;
  transition: 0.5s;
  font-family: "Courgette", cursive;
  color: aliceblue;
}

ul {
  flex: 0 1 auto;
  padding-right: 1vw;
  position: relative;
  /* padding: 25px 0;*/

  /* on centre les liens */
  text-align: left;
  list-style-type: none;
  /* margin-top: 2.5vh;*/
}
li a:hover {
  transform: translate3d(20px, 0, 0);
  color: #fbc831;
  text-align: center;
  font-family: "Courgette", cursive;
}

img,
span {
  width: 3vw;
  min-height: 5vh;

  margin-top: 0;
  margin-left: 1vw;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  vertical-align: middle;
  flex: 0 1 auto;
}

.logo {
  display: inline-block;
  flex: 0 1 auto;

  width: 2vw;
  height: 6vh;

  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: middle;
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
  width: 22vw;
  margin-left: 7vw;
  margin-right: 1vw;
  z-index: 1;
  flex: 0 1 auto;
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
@media only screen and (min-width: 200px) and (max-width: 500px) {
  .tablette_pc {
    display: none;
  }
  .smarphone {
    display: unset;
  }
  .heade {
    min-height: 16.08vh;

    flex-flow: row wrap;
  }
  img,
  span {
    width: 5vw;
    min-height: 5vh;

    margin: 1vw;
    padding: 0;
    flex: 1 0 auto;
  }

  .nom {
    flex: 1 0 auto;

    margin-left: 1vw;
    font-size: 1.2em;
    text-align: center;
    vertical-align: top;
  }
  .logo {
    margin: 0;
    padding: 0;
    flex: 1 0 auto;
  }
  button {
    margin: 1vw;
    margin-right: 5vw;
    padding: 1vw;
    font-size: 1em;
    flex: 1 0 auto;
    width: 20vw;
  }

  ul {
    position: relative;
    /* padding: 25px 0;*/
    margin-top: -2vh;
    /* on centre les liens */
    text-align: left;
    list-style-type: none;

    margin-left: -6vw;
    margin-right: 3vw;
    flex-shrink: 0;
  }
  li {
    font-size: 0.9em;

    padding-right: 3vw;
    padding-left: 3vw;
  }
}
@media only screen and (min-width: 500px) and (max-width: 640px) {
  .tablette_pc {
    display: none;
  }
  .smarphone {
    display: unset;
  }
  .heade {
    min-height: 16.08vh;

    flex-flow: row wrap;
  }
  img,
  span {
    width: 5vw;
    min-height: 5vh;

    margin: 1vw;
    padding: 0;
    flex: 1 0 auto;
  }
  .nom {
    flex: 1 0 auto;

    margin-left: 1vw;
    font-size: 1.2em;
    text-align: center;
    vertical-align: top;
  }
  .logo {
    margin: 0;
    padding: 0;
    flex: 1 0 auto;
  }
  button {
    margin: 1vw;
    margin-right: 5vw;
    padding: 1vw;
    font-size: 1.218em;
    flex: 1 0 auto;
    width: 20vw;
  }

  ul {
    position: relative;
    /* padding: 25px 0;*/

    /* on centre les liens */
    text-align: center;
    list-style-type: none;
    margin-left: 6vw;
    margin-right: auto;
    flex-shrink: 0;
  }
  li {
    font-size: 1.218em;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */

@media only screen and (min-width: 640px) {
  .tablette_pc {
    display: none;
  }
  .smarphone {
    display: unset;
  }
  .heade {
    min-height: 11.08vh;
    flex-flow: row wrap;
  }
  img,
  span {
    margin: 1vw;
    padding: 0;
    flex: 1 0 auto;
  }

  .nom {
    flex: 1 0 auto;

    margin-left: 4vw;
    font-size: 1.2em;
    text-align: center;
    vertical-align: top;
  }
  .logo {
    margin: 0;
    padding: 0;
    flex: 1 0 auto;
  }
  button {
    margin: 1vw;
    margin-right: 5vw;
    padding: 1vw;
    font-size: 1.618em;
    flex: 1 0 auto;
    width: 40vw;
  }

  ul {
    position: relative;
    /* padding: 25px 0;*/

    /* on centre les liens */
    text-align: left;
    list-style-type: none;
    margin-left: auto;
    margin-right: auto;
    flex-shrink: 0;
  }
  li {
    font-size: 1.218em;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .tablette_pc {
    display: none;
  }
  .smarphone {
    display: unset;
  }
  .heade {
    min-height: 8.08vh;
  }
  img,
  span {
    margin: 1vw;
    padding: 0;
    flex: 1 0 auto;
  }
  .nom {
    flex: 1 0 auto;

    margin-left: 5vw;
    font-size: 1.618em;
    text-align: left;
    vertical-align: top;
  }
  .logo {
    margin: 0;
    padding: 0;
    flex: 1 0 auto;
  }
  button {
    margin-right: 5vw;

    font-size: 1.618em;
    flex: 1 0 auto;
    width: 40vw;
  }
  ul {
    padding-right: 1vw;
    position: relative;
    /* padding: 25px 0;*/
    flex: 0 1 auto;
    /* on centre les liens */
    text-align: left;
    list-style-type: none;
  }
  li {
    font-size: 1.618em;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1060px) {
  .tablette_pc {
    display: none;
  }
  .smarphone {
    display: unset;
  }
  .heade {
    min-height: 5vh;
  }
  img,
  span {
    margin: 1vw;
    padding: 0;
    flex: 1 0 auto;
  }
  .nom {
    flex: 1 0 auto;
    margin: 0;
    padding: 0;
    margin-left: 4vw;
    font-size: 1.2em;
    text-align: left;
    vertical-align: top;
  }
  .logo {
    margin: 0;
    padding: 0;
    flex: 1 0 auto;
  }
  button {
    margin: 0;
    padding: 0;

    font-size: 1.618em;
    flex: 1 0 auto;
    width: 24vw;
  }
  ul {
    padding-right: 1vw;
    position: relative;
    /* padding: 25px 0;*/
    flex: 0 1 auto;
    /* on centre les liens */
    text-align: left;
    list-style-type: none;
    margin-top: 2.5vh;
    margin-left: -5vw;
  }
  li {
    font-size: 1em;
  }
}

@media only screen and (min-width: 1173px) {
  .tablette_pc {
    display: none;
  }
  .smarphone {
    display: unset;
  }
  button {
    font-size: 1.618em;

    width: 23vw;
    flex: 0 1 auto;
  }
  .tablette_pc {
    display: unset;
  }
  .smarphone {
    display: none;
  }
  .heade {
    min-height: 5vh;
    vertical-align: center;
  }
  img,
  span {
    margin: 1vw;
    padding: 0;
    flex: 1 0 auto;
  }
  .logo {
    flex: 0 1 auto;
    margin-left: 1vw;
  }
  ul {
    padding-right: 1vw;
    position: relative;
    /* padding: 25px 0;*/
    flex: 0 1 auto;
    /* on centre les liens */
    text-align: left;
    list-style-type: none;
    vertical-align: center;
    margin-left: -5vw;
  }

  .nom {
    flex: 1 0 auto;
    margin: 0;
    padding: 0;
    margin-left: 2vw;
    font-size: 1.618em;
    text-align: left;
    vertical-align: center;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1285px) {
  button {
    font-size: 1.818em;

    width: 23vw;
    margin-left: 3vw;
    margin-right: 1vw;
  }
  img,
  span {
    margin: 1vw;
    padding: 0;
    flex: 1 0 auto;
  }
  .tablette_pc {
    display: unset;
  }
  .smarphone {
    display: none;
  }
}
@media only screen and (min-width: 1400px) {
  .heade {
    min-height: 5vh;
    vertical-align: center;
  }
  .tablette_pc {
    display: unset;
  }
  .smarphone {
    display: none;
  }
  button {
    font-size: 2em;

    width: 22vw;
    margin-left: 2vw;
    margin-right: 5vw;
  }
  .nom {
    flex: 1 0 auto;
    margin: 0;
    padding: 0;
    margin-left: 2vw;
    font-size: 1.618em;
    text-align: left;
    vertical-align: top;
  }
  img,
  span {
    margin: 1vw;
    padding: 0;
    flex: 1 0 auto;
  }
  .nom {
    flex: 1 0 auto;
    margin: 0;
    padding: 0;
    margin-left: 2vw;
    font-size: 1.618em;
    text-align: left;
    vertical-align: top;
  }

  .logo {
    flex: 0 1 auto;

    margin-left: 1vw;
  }
}

.expanderSocial {
  transition: all 0.5s ease;
}
.expanderSocial:hover {
  transform-origin: 10% 50%;
  transform: scale(1.2);
}
</style>
