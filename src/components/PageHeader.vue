<template>
  <header class="titre1" >
    <h1 >Blog de Valorisetonweb :Crée son site web sur mesure</h1>
    
  </header>
</template>

<script>
export default {
  data() {
    return {
      WebsiteSetting: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titre1 {
  position: absolute;
  margin: auto;
  top: 17vh;
  z-index: 1;
  left: 2vw;
  font-family: "Bitter", cursive;
  font-size: 2.618em;
  font-style: oblique;
}
@media only screen and (min-width: 340px) {
  .titre1 {
    top: 20vh;
    font-size: 0.8em;
  }
}

@media only screen and (min-width: 640px) {
  .titre1 {
    top: 20vh;
    font-size: 1em;
  }
}
@media only screen and (min-width: 1000px) {
  .titre1 {
    top: 11vh;
    font-size: 1.618em;
  }
}
@media only screen and (min-width: 1400px) {
  .titre1 {
    top: 9vh;
  }
}
</style>
