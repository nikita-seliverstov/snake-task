import { getRandomInt } from '../utils/getRandomInt';
export class FoodVendor {
  constructor() {
    this.foodAmount = 15;
   
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
      x: getRandomInt(0, 50),
      y: getRandomInt(0, 50),
    };
    const unavaibleVals = snakeBody.concat(this.food);
    if (
      unavaibleVals.some(
        (elem) => elem.x === position.x && elem.y === position.y
      )
    ) {
      return this.foodPosition(snakeBody);
    } else {
    
      return position;
    }
  }
  eatFood(position) {
     
    const idx = this.food.findIndex((food) => food.x === position.x && food.y === position.y);
    if(idx === -1) {
       
        return false
    }
    else {
    this.food.splice(idx, 1)
    return position
    }
  }
  getFoodPlaces() {
    return this.food;
  }
}
