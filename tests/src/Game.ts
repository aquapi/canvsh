import { CanvasRenderer } from "../../src";
import Snake from "./Snake";

export default class Game extends CanvasRenderer {
    readonly snake: Snake;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.snake = new Snake(canvas);
    }

    async render(ctx: CanvasRenderingContext2D) {
        await this.snake.load(ctx);
    }
}