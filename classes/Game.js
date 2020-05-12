import {GameArea} from "./GameArea"
import {Snake} from "./Snake"
import {FoodVendor} from "./FoodVendor"
export class Game {
    constructor(canvasRef, incrementScore){
        this.canvas =  canvasRef
        this.interval = 400
        this.step = 20
        this.tick = null
        this.playing = true
        this.incrementScore = incrementScore
    }
    start(){
    this.GameArea = new GameArea(this.canvas)
    this.Snake = new Snake()
    this.FoodVendor = new FoodVendor()
    this.FoodVendor.placeFood(this.Snake.getSnakeBody())
    this.GameArea.drawFood(this.FoodVendor.getFoodPlaces())
    this.nextTick()
    }
    nextTick() {
        this.clearTick()
        if(!this.playing) {
            return null
        }
        this.tick = setTimeout(() => {
        this.tick = null
        this.update()
        this.nextTick()    
        }, this.interval)
    }
    clearTick(){
        this.tick &&  clearTimeout(this.tick);
    }
    update(){
        this.Snake.move()
        if(this.Snake.hitedTheWall() || this.Snake.eatedTail()) {
            this.playing = false
            return null
        }
       
        const eatedCell = this.FoodVendor.eatFood(this.Snake.getSnakeHead())
        if(eatedCell){
        this.Snake.addParticle(eatedCell);
        this.FoodVendor.placeFood(this.Snake.getSnakeBody())
        this.incrementScore()
        this.interval = this.interval - this.step
        }
      
        this.GameArea.drawSnake(this.Snake.getSnakeBody())
        this.GameArea.drawFood(this.FoodVendor.getFoodPlaces())
    
    }

}

