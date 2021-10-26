# What is this?

Lerp wrapped in a class to help manage the state of the lerped value

## How is this useful? I can just write lerp myself!

See examples below:

## Use lerp to tween mouse coordinates

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
      clientY
    );
```

## When you want to keep the state of the tweened mouse coordinates in React

```ts

const delayedMouse = useMemo(() => new Lerp(smoothness),[]);

document.addEventListener("mousemove", (e) => lerp.updateCoords(e.clientX, e.clientY));

```

