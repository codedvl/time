<template>
  <div id="app">
    <Time />
  </div>
</template>

<script>
import Vue from "vue";
import VueGAPI from "vue-gapi";
import Time from './components/Time.vue'

const apiConfig = {
  apiKey: "AIzaSyC9hnF1r533j1gZsfXIJHmtT7MbsSd71TY",
  clientId: "70186310433-j4n0th47upd6vfs07p0edpldeg65iqpq.apps.googleusercontent.com",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
};

Vue.use(VueGAPI, apiConfig);

export default {
  name: 'app',
  components: {
    Time
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
