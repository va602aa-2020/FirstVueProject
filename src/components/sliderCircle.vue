<template>
    <div>
       <svg :width="width" :height="height">

       </svg>
    </div>
</template>

<script>
    const d3 = require('d3');
    import sliderCircle from "@/components/sliderCircle.js";

    const sc = sliderCircle();

    export default {
        name: "sliderCircle",
        props: {
            firstNumber: Number,
        },
        data(){
            return {
                width: 400,
                height: 200,
            }
        },
        mounted(){
            this.redraw();
        },
        methods:{
            redraw(){
                d3.select('svg')
                    .datum([this.firstNumber])
                    .call(sc);
            }
        },
        watch:{
            firstNumber(newVal, oldVal){
                if(newVal !== oldVal){
                    this.redraw();
                }
            }
        },

    }
</script>

<style scoped>

</style>