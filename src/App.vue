<template>
  <div id="app">
    <h1>Snake</h1>
    <div>
      <canvas
        ref="canvas"
        id="snake-canvas"
        :width=boardSize
        :height=boardSize
      ></canvas>
      <p>Score:{{ score }}</p>
    </div>
    <section>
      <dialog
        ref="gameOverModal"
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
import constants from './constants';
export default {
  name: 'App',
  data: function() {
    return {
      score: 0,
      boardSize: constants.gameArea.cellSize *constants.gameArea.size
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
        this.$refs.gameOverModal
      ).start();
    },
  },
  mounted() {
    this.playGame();
  },
};
</script>
<style src="./App.css"></style>
