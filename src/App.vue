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
                    <div>
                        <label for="rangeNumber2">Select a second number</label>
                        <b-form-input id="rangeNumber2" v-model="value2"
                                      type="range" min="0" max="50"></b-form-input>
                        <div class="mt-2">Value: {{ value2 }}</div>
                    </div>
                </b-col>
                <b-col cols="8">
                  <h4>D3.js visualization</h4>
                  <sliderCircle :firstNumber="value" :secondNumber="value2"></sliderCircle>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import sliderCircle from "@/components/sliderCircle.vue";

    export default {
        name: 'App',
        components: {
            sliderCircle,
        },
        data() {
            return {
                value: 10,
                value2: 1,
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
