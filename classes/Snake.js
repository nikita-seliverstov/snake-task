import constants from "../constants"
export class Snake {
    constructor() {
        this.snakeParticals = 
        [{
            x: 24,
            y: 24,
        }]
        this.direction = constants[Math.floor(Math.random() * 4)]
        window.addEventListener("keydown", this.onKeyPress.bind(this));
    }
    move(){
        const newHeadCell = {
            x: this.getSnakeHead().x + this.getDirection().move.x,
            y: this.getSnakeHead().y + this.getDirection().move.y
          };
        this.snakeParticals.unshift(newHeadCell);
        this.snakeParticals.pop();
       
    }
    onKeyPress(event)  {
       const newDirection = constants.find(c => c.keyCode === event.keyCode)
       if(newDirection){
        return this.direction.oppositeDirection !== newDirection.direction ?
        this.direction = newDirection : null
       }
        
    }
    addParticle(position){
        this.snakeParticals.push(position)
    }
    hitedTheWall() {
       if( this.getSnakeHead().x < 0 || 
        this.getSnakeHead().y < 0 || 
        this.getSnakeHead().x >= 50 || 
        this.getSnakeHead().y >=  50 ){
            return true
        }
    }
    eatedTail(){
        if(this.getSnakeBody().length > 1) {
       const snakeWithoutHead = this.getSnakeBody().filter((particle, index) => {
         return index !== 0
        }
        
        )
        console.log(snakeWithoutHead)
        if(snakeWithoutHead.some( (particle) =>
            particle.x === this.getSnakeHead().x && particle.y === this.getSnakeHead().y 
            )) {
                console.log("eated")
                return true
            }
        }
        else {
            return false
        }
    }
    getSnakeHead(){
        return this.snakeParticals[0];
    }
    getSnakeBody(){
        return this.snakeParticals
    }
    getDirection(){
        return this.direction
    }
}