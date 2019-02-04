<template>
  <section>
    <article>
      <div class="block">
        <a href="#" class="back" v-on:click="navigateBack()">Go Back</a>
        
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      WebsiteSetting: ""
    };
  },
  methods: {
    navigateBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  margin: 20vh auto;
  max-width: 900px;
}

section article {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}
</style>
