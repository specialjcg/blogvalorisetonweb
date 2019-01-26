<template>
  <header>
    <h1 class="titre1">Crée son site web sur mesure</h1>
    
  </header>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      WebsiteSetting: ""
    };
  },
  apollo: {
    WebsiteSetting: gql`
      {
        WebsiteSetting {
          title
          footer_text
        }
      }
    `
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: auto;

  font-weight: inherit;
}
.titre1 {
  position: relative;

  top: 8vh;
  z-index: 1;
  font-family: "Courgette", cursive;
  font-size: 1.618em;
}
</style>
