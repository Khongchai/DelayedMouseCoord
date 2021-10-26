# DelayedMouseCoord
Tween normalized mouse coordinates

This is just a simple lerp wrapped inside a class to keep your code tidier.

**Pain**
- Some libraries out there lack an easy-to-use interface due to them having been made for many purposes.

**Solution**
- This tween class was made for one and only one purpose: tweening normalized mouse coordinates. You put normalized coordinates in, you get the tweened version out. That's it.

**Usage**

Somewhere outside the function that calls requestAnimationFrame()
```ts
//lower = smoother
const smoothness = 0.03;
const delayedMouse = new DelayedMouse(smoothness);
```

Somewhere inside the function that calls requestAnimationFrame()
```ts
const { x, y } = delayedMouse.updateMouse(
      normalizedMouse.x,
      normalizedMouse.y,
      delta
    );
```

