import Game from "./Game";
import { FPSCounter, loop } from "../../src";

const counter = new FPSCounter();
counter.run();

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

const p = document.querySelector("p") as HTMLParagraphElement;

const game = new Game(canvas);
loop(game);

setInterval(() => p.innerHTML = "FPS: " + counter.fps, 300);