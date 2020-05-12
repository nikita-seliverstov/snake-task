export class GameArea {
    constructor(canvas) {
        this.canvas = canvas.getContext("2d")
        this.size = {
            x:50,
            y:50
        }  
    }
    
    drawSnake(snake){
       
        this.clear()
        this.canvas.beginPath()
        snake.forEach(snakePart => {
        this.canvas.rect(8 * snakePart.x, 8 * snakePart.y, 8, 8)
        this.canvas.fillStyle = "#000000"
        this.canvas.fill();
        })
    }
    drawFood(foodPositions) {
        this.canvas.beginPath()
        foodPositions.map(food =>{
        this.canvas.rect(8 * food.x, 8 * food.y, 8, 8)
        this.canvas.fillStyle = "#FF0000"
        this.canvas.fill();
        }
        )
    }
    clear() {
        this.canvas.clearRect(0, 0, 400, 400);
      }
}