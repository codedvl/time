<template>
  <h1>
    {{ year.name }}
  </h1>
</template>

<script>

export default {
  name: "Time",
  data() {
    return {
      year: {
        name: { type: String },
        month: [{
          name: { type: String },
          days: [{
            date: { type: String },
            workedHours: { type: Number },
            possibleHours: { type: Number },
            earned: { type: Number },
            possibleEarning: { type: Number }
          }],
        }]
      }
    }
  },
  methods: {
    test () {
      const self = this;

      this.$getGapiClient()
        .then(gapi => {
          gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '137o26C7nPbbNln0V0vXm_CUoMFD-dNgTYG-2PC1Lsio',
            range: '2018!A3:AF97',
          }).then(function(response) {
            self.year.name = '2018';
            response.result.values.forEach(element => {
              
            });
            // create new month object and populate it
            




            console.log(response);
          }, function(response) {
            console.log(response);
          });
        });
    }
  },
  created: function() {
    this.test();
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
