<template>
    <div>
       <svg ref="myCircle" :width="width" :height="height">

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
            secondNumber: Number,
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
        computed:{
          product(){
             return this.firstNumber * this.secondNumber;
          }
        },
        methods:{
            redraw(){
                d3.select(this.$refs.myCircle)
                    .datum([this.product])
                    .call(sc);
            }
        },
        watch:{
            product(newVal, oldVal){
                if(newVal !== oldVal){
                    this.redraw();
                }
            }
        },

    }
</script>

<style scoped>

</style>