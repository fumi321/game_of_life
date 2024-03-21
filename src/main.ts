import { initializeMap, randomizeMap, render, computeNextGeneration } from "./life.ts";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerHeight;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d")!;

const size = 64;
let map = initializeMap(size, size);
map = randomizeMap(map);

setInterval(() => {
  render(context, map);
  map = computeNextGeneration(map);
}, 100);
