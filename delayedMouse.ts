
export class Lerp{
  private curX: number;
  private curY: number;
  delayedX: number;
  delayedY: number;

  private speedDiff: number;

  constructor(speedDiff: number) {
    this.curX = 0;
    this.curY = 0;

    this.delayedX = 0;
    this.delayedY = 0;

    this.speedDiff = speedDiff;
  }

  updateCoords(curX: number, curY: number) {
    this.curX = curX;
    this.curY = curY;
    
    this.calculateDelayed();

    return { x: this.delayedX, y: this.delayedY };
  }

  private calculateDelayed() {
    this.delayedX = this.delayedX + (this.curX - this.delayedX) * this.speedDiff;
    this.delayedY = this.delayedY + (this.curX - this.delayedX) * this.speedDiff;
  }
}
