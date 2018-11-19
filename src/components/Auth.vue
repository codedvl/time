<template>
  <div>
    <button v-show="!isAuthenticated" v-on:click="login()">Authorize</button>
    <button v-show="isAuthenticated" v-on:click="logout()">Sign Out</button>
  </div>
</template>

<script>

export default {
  name: "Auth",
  data() {
    return {
      isAuthenticated: false
    }
  },
  methods: {
    login () {
      if (this.$isAuthenticated() !== true) {
        this.$login().then(() => {
          this.isAuthenticated = true;
        });
      }
    },
    logout () {
      this.$logout().then(() => {
        this.isAuthenticated = false;
      });
    }
  },
  created: function() {
    this.isAuthenticated = this.$isAuthenticated();
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
