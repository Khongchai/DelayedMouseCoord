# DelayedMouseCoord
Tween normalized mouse coordinates

**Pain**
- Some libraries out there lack an easy-to-use interface due to them having been made for many purposes.

**Solution**
- This tween class is made for one and only one purpose: tweening normalized mouse coordinates. You put normalized coordinates in, you get the tweened version out. That's it.

**Usage**

Somewhere outside requestAnimationFrame()
```ts
//lower = smoother
const smoothness = 0.03;
const delayedMouse = new DelayedMouse(smoothness);
```

Somewhere inside requestAnimationFrame()
```ts
const { x, y } = delayedMouse.updateMouse(
      normalizedMouse.x,
      normalizedMouse.y,
      delta
    );
```

