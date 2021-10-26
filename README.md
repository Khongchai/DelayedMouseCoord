# What is this?

Lerp wrapped in a class to help manage the state of the lerped value

## How is this useful? I can just write lerp myself!

See examples below:

## Tween mouse coordinates without messy code

Somewhere outside the function that calls requestAnimationFrame()
```ts
//lower = smoother
const smoothness = 0.03;
const tween = new Tween(smoothness);
```

Somewhere inside the function that calls requestAnimationFrame()
```ts
const { x, y } = tween.updateCoords(
      mouse.x,
      mouse.y
    );
```

## Keep reference to the value of tweened mouse coordinates in React

```ts

const delayedMouse = useMemo(() => new Tween(smoothness),[]);

document.addEventListener("mousemove", (e) => tween.updateCoords(e.clientX, e.clientY));

```

