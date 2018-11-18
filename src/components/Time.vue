<template>
  <div>
    <button v-show="!isAuthenticated" v-on:click="login()">Authorize</button>
    <button v-show="isAuthenticated" v-on:click="logout()">Sign Out</button>
    
  </div>
</template>

<script>


export default {
  name: "Time",
  props: {},
  data: function() {
    return {
      isAuthenticated: false
    }
  },
  computed: {
    // isSignedIn () {
    //   return this.$isAuthenticated()
    // }
  },
  methods: {
    login () {
      if (this.$isAuthenticated() !== true) {
        this.$login();
        this.isAuthenticated = this.$isAuthenticated();
      }
    },
    logout () {
      this.$logout();
      this.isAuthenticated = this.$isAuthenticated();
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
