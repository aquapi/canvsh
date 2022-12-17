import { CanvasObject } from "../../src";
import { INIT_SIZE } from "./ObjectSize";

export default class SnakePart extends CanvasObject {
    color: string;

    constructor(
        canvas: HTMLCanvasElement,
        public x: number,
        public y: number,
        public size: number = INIT_SIZE
    ) {
        super(canvas);
        this.color = "green";
    }

    async render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fill();
        ctx.fillStyle = "black";
    }
}