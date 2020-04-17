<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col cols="4">
          <h4>Slider</h4>
          <div>
            <label for="rangeNumber">Select a number</label>
            <b-form-input id="rangeNumber" v-model="value"
                          type="range" min="0" max="100"></b-form-input>
            <div class="mt-2">Value: {{ value }}</div>
          </div>
        </b-col>
        <b-col cols="8">D3.js visualization</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return {
      value: 10,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
