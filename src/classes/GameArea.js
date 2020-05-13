import constants from '../constants';
export class GameArea {
  constructor(canvas) {
    this.canvas = canvas.getContext('2d');
    this.areaSize = constants.gameArea.size * constants.gameArea.cellSize;
  }
  // Draw cells on canvas and set color depending on cell type
  drawCells(cells, type) {
    this.canvas.beginPath();
    cells.forEach((cell) => {
      this.canvas.rect(
        constants.gameArea.cellSize * cell.x,
        constants.gameArea.cellSize * cell.y,
        constants.gameArea.cellSize,
        constants.gameArea.cellSize
      );
      this.canvas.fillStyle = constants.gameArea.cellColors[type];
      this.canvas.fill();
    });
  }
  // Clear canvas
  clear() {
    this.canvas.clearRect(0, 0, this.areaSize, this.areaSize);
  }
}
