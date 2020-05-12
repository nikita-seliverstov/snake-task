export default [
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
  ];