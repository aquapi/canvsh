import Game from "./Game";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

const p = document.querySelector("p") as HTMLParagraphElement;

const game = new Game(canvas);
game.start();

setInterval(() => p.innerHTML = "FPS: " + game.fps, 300);