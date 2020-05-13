import constants from '../constants';
export class Snake {
  constructor() {
    // Set initial snake position
    this.snakeParticals = [constants.snake.position];
    // Set random initial direction
    this.direction = constants.inputs[Math.floor(Math.random() * 4)];
    window.addEventListener('keydown', this.onKeyPress.bind(this));
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
  // Input controller
  onKeyPress(event) {
    const newDirection = constants.inputs.find(
      (input) => input.keyCode === event.keyCode
    );
    // Check if input is available
    if (newDirection) {
      return this.direction.oppositeDirection !== newDirection.direction
        ? (this.direction = newDirection)
        : null;
    }
  }
  // Add particle to snake array
  addParticle(position) {
    this.snakeParticals.push(position);
  }
  // Check if snake hited the wall and return boolean
  hitedTheWall() {
    if (
      this.getSnakeHead().x < 0 ||
      this.getSnakeHead().y < 0 ||
      this.getSnakeHead().x >= constants.gameArea.size ||
      this.getSnakeHead().y >= constants.gameArea.size
    ) {
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
