<template>
  <footer>
   
    <router-link to="/about">About</router-link>
  </footer>
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
span {
  display: inline-block;
  margin-right: 10px;
}
a {
  color: #3eaf7c;
  font-weight: bold;
}
</style>
