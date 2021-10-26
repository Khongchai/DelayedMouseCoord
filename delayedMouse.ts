
export class Lerp{
  private curX: number;
  private curY: number;
  delayedX: number;
  delayedY: number;

  private t: number;

  constructor(speedDiff: number) {
    this.curX = 0;
    this.curY = 0;

    this.delayedX = 0;
    this.delayedY = 0;

    this.t = t;
  }

  updateCoords(curX: number, curY: number) {
    this.curX = curX;
    this.curY = curY;
    
    this.calculateDelayed();

    return { x: this.delayedX, y: this.delayedY };
  }

  private calculateDelayed() {
    this.delayedX = this.delayedX + (this.curX - this.delayedX) * this.t;
    this.delayedY = this.delayedY + (this.curX - this.delayedX) * this.t;
  }
}
