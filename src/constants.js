export default {
game: {
  initialSpeed: 300,
  step: 30,
  minInterval: 30
},
gameArea: {
  size: {
    x:50,
    y:50
  },
  cellSize: 8,
  
  cellColors:{
    snake: "black",
    food: "red"
  }

},
food: {
  foodAmount:15
},
snake: {
  position: {
    x: 25,
    y: 25
  }
},
inputs:[
  {
    direction: "left",
    oppositeDirection: "right",
    keyCode: 37,
    move: {
      x: -1,
      y: 0
    }
  },
  {
    direction: "top",
    oppositeDirection: "bottom",
    keyCode: 38,
    move: {
      x: 0,
      y: -1
    }
  },
  {
    direction: "right",
    oppositeDirection: "left",
    keyCode: 39,
    move: {
      x: 1,
      y: 0
    }
  },
  {
    direction: "bottom",
    oppositeDirection: "top",
    keyCode: 40,
    move: {
      x: 0,
      y: 1
    }
  }
],
}
