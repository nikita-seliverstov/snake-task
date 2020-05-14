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
  getFoodPlaces() {
    return this.food;
  }
  removeEatedFood(snakeHead){
    const index = this.getFoodPlaces().findIndex(
      (foodElem) => foodElem.x === snakeHead.x && foodElem.y === snakeHead.y)
    this.food.splice(index, 1);
  }
}
