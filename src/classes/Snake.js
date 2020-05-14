import constants from '../constants';

export class Snake {
  constructor(direction) {
    // Set initial snake position
    this.snakeParticals = [constants.snake.position];
    // Set random initial direction
    this.direction = direction
  }
  // Move snake by adding new head element and delating extra particle
  move() {
    const newHeadCell = {
      x: this.getSnakeHead().x + this.getDirection().move.x,
      y: this.getSnakeHead().y + this.getDirection().move.y,
    };
    this.snakeParticals.unshift(newHeadCell);
    this.snakeParticals.pop();
  }
 
  // Add particle to snake array
  addParticle(position) {
    this.snakeParticals.push(position);
  }
  // Check if snake hited the wall and return boolean
  hitTheWall() {
    if (
      this.getSnakeHead().x < 0 ||
      this.getSnakeHead().y < 0 ||
      this.getSnakeHead().x >= constants.gameArea.size ||
      this.getSnakeHead().y >= constants.gameArea.size
    ) {
      return true;
    }
  }
   // Check if food has been eated and if so delate this food from array and return eated cell cord's
   eatFood() {
      this.addParticle(this.getSnakeHead())
    }
  
  snakeHeadIsInFood(foodArray) {
    const index = foodArray.findIndex(
      (foodElem) => foodElem.x === this.getSnakeHead().x && foodElem.y === this.getSnakeHead().y)
      if (index === -1) {
        return false;
      }
      else {
        return true;
      }
  }
  // Check if snake eated tail and return boolean
  eatedTail() {
    if (this.getSnake().length > 1) {
      const snakeWithoutHead = this.getSnake().filter((particle, index) => {
        return index !== 0;
      });
      if (
        snakeWithoutHead.some(
          (particle) =>
            particle.x === this.getSnakeHead().x &&
            particle.y === this.getSnakeHead().y
        )
      ) {
        return true;
      }
    } else {
      return false;
    }
  }
  setDirection(direction){
    this.direction = direction
  }
  getSnakeHead() {
    return this.snakeParticals[0];
  }
  getSnake() {
    return this.snakeParticals;
  }
  getDirection() {
    return this.direction;
  }
}
