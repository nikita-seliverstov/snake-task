import constants from '../constants';
export class GameArea {
  constructor(canvas) {
    this.canvas = canvas.getContext('2d');
    this.conf = constants.gameArea;
    this.areaSize = this.conf.size.x * this.conf.cellSize;
  }

  drawCells(cells, type) {
    this.canvas.beginPath();
    cells.forEach((cell) => {
      this.canvas.rect(
        this.conf.cellSize * cell.x,
        this.conf.cellSize * cell.y,
        this.conf.cellSize,
        this.conf.cellSize
      );
      this.canvas.fillStyle = this.conf.cellColors[type];
      this.canvas.fill();
    });
  }

  clear() {
    this.canvas.clearRect(0, 0, this.areaSize, this.areaSize);
  }
}
