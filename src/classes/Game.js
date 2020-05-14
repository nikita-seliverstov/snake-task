import { GameArea } from './GameArea';
import { Snake } from './Snake';
import { FoodVendor } from './FoodVendor';
import constants from '../constants';
import {getRandomInt} from '../../utils/getRandomInt'
export class Game {
  constructor(canvasRef, incrementScore, gameOverModal) {
    this.canvas = canvasRef;
    this.interval = constants.game.initialSpeed;
    this.gameOverModal = gameOverModal;
    this.tick = null;
    this.playing = true;
    this.incrementScore = incrementScore;
    this.direction =  constants.inputs[getRandomInt(0, 3)];
    this.newDirection = null
    window.addEventListener('keydown', this.onKeyPress.bind(this));
  }
  // Game initialization 
  start() {
    this.GameArea = new GameArea(this.canvas);
    this.Snake = new Snake(this.direction);
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
      this.tick = null
      this.update();
      this.nextTick();
    }, this.interval);
  }
 // Prevent memory leak
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
   // Input controller
   onKeyPress(event) {
    
    const newInput = constants.inputs.find(
      (input) => input.keyCode === event.keyCode
    );
    // Check if input is available
    if (newInput) {
      return this.direction.oppositeDirection !== newInput.direction
        ? (this.newDirection = newInput)
        : null;
    }
  }
  // Game logic
  update() {
    // Update direction only during tick to prevent unexpected behavior
    if(this.newDirection) {
      this.direction = this.newDirection
    }
    this.Snake.setDirection(this.direction)
    this.Snake.move();
    // Check if game lose condition true and if so stop the game
    if (this.Snake.hitTheWall() || this.Snake.eatedTail()) {
    
      this.playing = false;
      this.gameOverModal.showModal();
     
      return null;
    }
    // Check if food has been eaten by snake if so add particle, increment scrore and speed up the game
    if(this.Snake.snakeHeadIsInFood(this.FoodVendor.getFoodPlaces()))
    {
      this.Snake.eatFood();
      this.FoodVendor.removeEatedFood(this.Snake.getSnakeHead())
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
