import { GameArea } from './GameArea';
import { Snake } from './Snake';
import { FoodVendor } from './FoodVendor';
import constants from '../constants';
export class Game {
  constructor(canvasRef, incrementScore, dialog) {
    this.canvas = canvasRef;
    this.interval = constants.game.initialSpeed;
    this.step = constants.game.step;
    this.minInterval = constants.game.minInterval;
    this.tick = null;
    this.playing = true;
    this.incrementScore = incrementScore;
    this.dialog = dialog;
  }

  start() {
    this.GameArea = new GameArea(this.canvas);
    this.Snake = new Snake();
    this.FoodVendor = new FoodVendor();
    this.FoodVendor.placeFood(this.Snake.getSnakeBody());
    this.nextTick();
  }

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

  speedUpGame() {
    this.interval =
      this.interval - this.step > this.minInterval
        ? this.interval - this.step
        : this.minInterval;
  }

  update() {
    this.Snake.move();
    if (this.Snake.hitedTheWall() || this.Snake.eatedTail()) {
      this.playing = false;
      this.dialog.showModal();
      return null;
    }
    const eatedCell = this.FoodVendor.eatFood(this.Snake.getSnakeHead());
    if (eatedCell) {
      this.Snake.addParticle(eatedCell);
      this.FoodVendor.placeFood(this.Snake.getSnakeBody());
      this.incrementScore();
      this.speedUpGame();
    }
    this.GameArea.clear();
    this.GameArea.drawCells(this.Snake.getSnakeBody(), 'snake');
    this.GameArea.drawCells(this.FoodVendor.getFoodPlaces(), 'food');
  }
}
