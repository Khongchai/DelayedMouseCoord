#Lerp wrapped in a class to keep things tidy

Usage example:

#Use lerp to tween mouse coordinates

Somewhere outside the function that calls requestAnimationFrame()
```ts
//lower = smoother
const smoothness = 0.03;
const lerp = new Lerp(smoothness);
```

Somewhere inside the function that calls requestAnimationFrame()
```ts
const { x, y } = lerp.updateCoords(
      clientX,
      clientY,
      delta
    );
```

