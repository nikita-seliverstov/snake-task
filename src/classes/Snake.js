import constants from '../constants';
export class Snake {
  constructor() {
    this.snakeParticals = [constants.snake.position];
    this.direction = constants.inputs[Math.floor(Math.random() * 4)];
    window.addEventListener('keydown', this.onKeyPress.bind(this));
  }
  move() {
    const newHeadCell = {
      x: this.getSnakeHead().x + this.getDirection().move.x,
      y: this.getSnakeHead().y + this.getDirection().move.y,
    };
    this.snakeParticals.unshift(newHeadCell);
    this.snakeParticals.pop();
  }
  onKeyPress(event) {
    const newDirection = constants.inputs.find(
      (c) => c.keyCode === event.keyCode
    );
    if (newDirection) {
      return this.direction.oppositeDirection !== newDirection.direction
        ? (this.direction = newDirection)
        : null;
    }
  }
  addParticle(position) {
    this.snakeParticals.push(position);
  }
  hitedTheWall() {
    if (
      this.getSnakeHead().x < 0 ||
      this.getSnakeHead().y < 0 ||
      this.getSnakeHead().x >= constants.gameArea.size.x ||
      this.getSnakeHead().y >= constants.gameArea.size.x
    ) {
      return true;
    }
  }
  eatedTail() {
    if (this.getSnakeBody().length > 1) {
      const snakeWithoutHead = this.getSnakeBody().filter((particle, index) => {
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
  getSnakeBody() {
    return this.snakeParticals;
  }
  getDirection() {
    return this.direction;
  }
}
