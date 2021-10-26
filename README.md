Code written // edited while I was very sleepy, proceed with caution.

# What is this?

Lerp wrapped in a class to help manage the state of the lerped value

This snippet below has the same functionality as this entire library, I just find it easier and a bit cleaner to encapsulate some of the logic into a class.

```ts
let delayedX = 0;
let delayedY = 0;

addEventListener("mousemove", (e) => {
      const smoothness = 0.3;
      delayedX = lerp(delayedX, e.clientX, smoothness);
      delayedY = lerp(delayedY, e.clientY, smoothness);
});

function aFunctionThatCallsManyTimes(){
      positionOfSomething.x = delayedX;
      positionOfSomething.y = delayedY;
}

function lerp(x: number, y: number, t: number){
      return x + (y - x) * t;
}
```

## Well, that didn't look too hard to write, why is this class thing useful then?

Imagine if your app was a little bigger and the function that calls requestAnimationFrame, the addEventListener, and lerp, are all in different files, that'd definitely cause someone some mild headaches. Using this, you will be able to:

## Tween mouse coordinates with less code (for larger codebase)

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

## Keep reference to the value of tweened mouse coordinates in React (with just a little fewer lines of code)

```ts

const delayedMouse = useMemo(() => new Tween(smoothness),[]);
//or
const delayedMouse = useRef(new Tween(smoothness));

document.addEventListener("mousemove", (e) => tween.updateCoords(e.clientX, e.clientY));
//or
document.addEventListener("mousemove", (e) => tween.current.updateCoords(e.clientX, e.clientY));

```

