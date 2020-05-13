import { GameArea } from './GameArea';
import { Snake } from './Snake';
import { FoodVendor } from './FoodVendor';
import constants from '../constants';
export class Game {
  constructor(canvasRef, incrementScore, gameOverModal) {
    this.canvas = canvasRef;
    this.interval = constants.game.initialSpeed;
    this.gameOverModal = gameOverModal;
    this.tick = null;
    this.playing = true;
    this.incrementScore = incrementScore;
  }
  // Game initialization 
  start() {
    this.GameArea = new GameArea(this.canvas);
    this.Snake = new Snake();
    this.FoodVendor = new FoodVendor();
    this.FoodVendor.placeFood(this.Snake.getSnake());
    this.nextTick();
  }
  // Game loop
  nextTick() {
    this.clearTick();
    if (!this.playing) {
      return null;
    }
    this.tick = setTimeout(() => {
      this.tick = null;
      this.update();
      this.nextTick();
    }, this.interval);
  }
 
  clearTick() {
    this.tick && clearTimeout(this.tick);
  }
  // Decrement game interval with given step and prevent it from beeing smaller than minimum value
  speedUpGame() {
    this.interval =
      this.interval - constants.game.step > constants.game.minInterval
        ? this.interval - constants.game.step
        : constants.game.minInterval;
  }
  // Game logic
  update() {
    this.Snake.move();
    // Check if game lose condition true and if so stop the game
    if (this.Snake.hitedTheWall() || this.Snake.eatedTail()) {
      this.playing = false;
      this.gameOverModal.showModal();
      return null;
    }
    // Check if cell been eated by snake if so add particle, increment scrore and speed up the game
    const eatedCell = this.FoodVendor.eatFood(this.Snake.getSnakeHead());
    if (eatedCell) {
      this.Snake.addParticle(eatedCell);
      this.FoodVendor.placeFood(this.Snake.getSnake());
      this.incrementScore();
      this.speedUpGame();
    }
    // Clear previous frame
    this.GameArea.clear();
    this.GameArea.drawCells(this.Snake.getSnake(), 'snake');
    this.GameArea.drawCells(this.FoodVendor.getFoodPlaces(), 'food');
  }
}
