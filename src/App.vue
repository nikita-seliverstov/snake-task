<template v-on:keyup="">
  <div id="app">
    <h1>Snake</h1>
    <div>
      <canvas
        ref="canvas"
        id="snake-canvas"
        :width="400"
        :height="400"
      ></canvas>
      <p>Score:{{ score }}</p>
    </div>
    <section>
      <dialog
        ref="dialog"
        class="nes-dialog is-dark is-rounded"
        id="dialog-dark-rounded"
      >
        <form method="dialog">
          <p class="title">Game Over</p>
          <menu class="dialog-menu">
            <button @click="playGame()" class="nes-btn is-primary">
              Play again
            </button>
          </menu>
        </form>
      </dialog>
    </section>
  </div>
</template>

<script>
import { Game } from './classes/Game.js';
export default {
  name: 'App',
  data: function() {
    return {
      score: 0,
    };
  },
  methods: {
    incrementScore() {
      this.score += 1;
    },
    playGame() {
      this.score = 0;
      new Game(
        this.$refs.canvas,
        this.incrementScore.bind(this),
        this.$refs.dialog
      ).start();
    },
  },
  mounted() {
    this.playGame();
  },
};
</script>
<style src="./App.css"></style>
