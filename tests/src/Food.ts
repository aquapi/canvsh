import { CanvasObject } from "../../src";
import { INIT_SIZE, round } from "./ObjectSize";

function randomFrom(a: number, b: number) {
    return round(a + Math.round(Math.random() * (b - a - 1)));
}

export default class Food extends CanvasObject {
    x: number; y: number;

    constructor(
        canvas: HTMLCanvasElement, 
        public size: number = INIT_SIZE
    ) {
        super(canvas);
        this.x = randomFrom(0, canvas.width - this.size);
        this.y = randomFrom(0, canvas.height - this.size);
    }

    spawn() {
        this.x = randomFrom(0, this.canvas.width - this.size);
        this.y = randomFrom(0, this.canvas.height - this.size);
    }

    async render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = "black";
    }
}