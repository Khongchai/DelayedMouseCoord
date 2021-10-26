/**
 * Call this whereever requestanimationframe() is called.
 *
 * To use the delayed coordinate (tween, ease, whatever you wanna call it),
 * call the updateMouse method in the request animationframe() and use the returned x, y coordinate
 */
export class DelayedMouse {
  curX: number;
  curY: number;
  delayedX: number;
  delayedY: number;

  speedDiff: number;

  constructor(speedDiff: number) {
    this.curX = 0;
    this.curY = 0;

    this.delayedX = 0;
    this.delayedY = 0;

    this.speedDiff = speedDiff;
  }

  updateMouse(curX: number, curY: number, delta: number) {
    this.curX = curX;
    this.curY = curY;

    //Calculate delayed mouse
    this.calculateDelayed();

    return { x: this.delayedX, y: this.delayedY };
  }

  calculateDelayed() {
    this.delayedX = this.delayedX + (this.curX - this.delayedX) * this.speedDiff;
    this.delayedY = this.delayedY + (this.curX - this.delayedX) * this.speedDiff;
  }
}
