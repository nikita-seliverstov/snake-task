import { getRandomInt } from '../../utils/getRandomInt';
import constants from '../constants';
export class FoodVendor {
  constructor() {
    this.food = [];
  }
  // Return object with food cordinates
  placeFood(snakeBody) {
    while (this.food.length < constants.food.foodAmount) {
      this.food.push(this.foodPosition(snakeBody));
    }
  }
  // Detirmine food position by random int's and exclude unavaible cordinates
  foodPosition(snakeBody) {
    const position = {
      x: getRandomInt(0, constants.gameArea.size -1),
      y: getRandomInt(0, constants.gameArea.size -1),
    };
    const unavaibleCords = snakeBody.concat(this.food);
    if (unavaibleCords.some((cord) =>
    cord.x === position.x && cord.y === position.y)) 
      {
      return this.foodPosition(snakeBody);
    } else {
      return position;
    }
  }
  // Check if food been eated and if so delate this food from array and return eated cell cord's
  eatFood(position) {
    const index = this.food.findIndex(
      (foodElem) => foodElem.x === position.x && foodElem.y === position.y
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
