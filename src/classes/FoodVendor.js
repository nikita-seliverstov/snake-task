import { getRandomInt } from '../../utils/getRandomInt';
import constants from '../constants';
export class FoodVendor {
  constructor() {
    this.foodAmount = constants.food.foodAmount;
    this.food = [];
    this.foodPosition = this.foodPosition.bind(this);
  }
  placeFood(snakeBody) {
    while (this.food.length < this.foodAmount) {
      this.food.push(this.foodPosition(snakeBody));
    }
  }
  foodPosition(snakeBody) {
    const position = {
      x: getRandomInt(0, constants.gameArea.size.x -1),
      y: getRandomInt(0, constants.gameArea.size.y -1),
    };
    const unavaibleCords = snakeBody.concat(this.food);
    if (unavaibleCords.some((elem) =>
     elem.x === position.x && elem.y === position.y)) 
      {
      return this.foodPosition(snakeBody);
    } else {
      return position;
    }
  }
  eatFood(position) {
    const index = this.food.findIndex(
      (food) => food.x === position.x && food.y === position.y
    );
    if (index === -1) {
      return false;
    } else {
      this.food.splice(index, 1);
      return position;
    }
  }
  getFoodPlaces() {
    return this.food;
  }
}
