<template>
  <div>
    <h1>
    {{year.name}}
    </h1>
    <ul id="example-1">
      <li v-for="month in year.months">
        {{ month.name }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Time",
  data() {
    return {
      year: {
        name: { type: String },
        months: [{
          name: { type: String },
          days: [{
            date: { type: String },
            workedHours: { type: Number },
            possibleHours: { type: Number },
            earned: { type: Number },
            possibleEarning: { type: Number }
          }],
        }]
      },
      gapiObject: {}
    }
  },
  methods: {
    GetSheetData() {
      // year.months = [];
      this.$getGapiClient()
        .then(gapi => {
          gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '137o26C7nPbbNln0V0vXm_CUoMFD-dNgTYG-2PC1Lsio',
            range: '2018!A3:AF97',
          }).then(response => {
            console.log(response);
            this.gapiObject = response.re;
            // self.year.name = '2018';
            // for (var i = 0; i < response.result.values.length; i = i + 8) {
            //   self.year.months.push({ name: response.result.values[i][0]});
            // }
            // console.log(self.year.months);
            // create new month object and populate it
        });
      });
    },
    PopulateYear() {
      this.year.name = '2018';
    },
    PopulateMoths() {
      // for (var i = 0; i < this.gapiObject.result.values.length; i = i + 8) {
        
      // }
      //console.log(this.gapiObject.value);
      // this.gapiObject.result.values.forEach((element, index) => {
      //   console.log(element);
      // })
    }
  },
  created: function() {
    this.GetSheetData();
    this.PopulateYear();
    this.PopulateMoths();
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
