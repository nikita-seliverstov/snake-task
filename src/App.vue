<template v-on:keyup="">
  <div id="app">
    <h1>Snake</h1>
    <div>
    <canvas ref="canvas" id="snake-canvas" :width="400" :height="400"></canvas>
    <p>Score:{{score}}</p>
    </div>
  </div>
</template>

<script>
import {Game} from "../classes/Game.js"
export default {
  name: 'App',
   data: function() {
     return {
    score : 0
     }
  },
  methods: {
    incrementScore() {
    this.score += 1

    }
  },
  mounted() {
     (new Game(this.$refs.canvas, this.incrementScore.bind(this))).start()
  },
 
}
</script>
<style src="./App.css"></style>
