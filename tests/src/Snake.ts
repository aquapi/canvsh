import { CanvasObject } from "../../src";
import Food from "./Food";
import { round } from "./ObjectSize";
import SnakeDirection from "./SnakeDirection";
import SnakePart from "./SnakePart";

const minLen = 6;

export default class Snake extends CanvasObject {
    parts: SnakePart[];
    direction: SnakeDirection;
    countDown: number;
    readonly food: Food;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.parts = [new SnakePart(canvas, round(canvas.width / 2), round(canvas.height / 2))];
        this.parts[0].color = "red";
        this.direction = SnakeDirection.RIGHT;
        this.food = new Food(canvas);

        addEventListener("keydown", e => 
            this.direction = e.key as SnakeDirection
        );

        this.countDown = 15;
    }

    move() {
        if (this.countDown) {
            --this.countDown;
            return;
        }

        const lastPart = this.parts[this.parts.length - 1];
        const newPart = new SnakePart(super.canvas, lastPart.x, lastPart.y);

        switch (this.direction) {
            case SnakeDirection.UP:
                newPart.y -= newPart.size;
                break;
            case SnakeDirection.LEFT:
                newPart.x -= newPart.size;
                break;
            case SnakeDirection.RIGHT:
                newPart.x += newPart.size;
                break;
            default:
                newPart.y += newPart.size;
        }

        if (newPart.x === this.food.x && newPart.y === this.food.y)
            this.food.spawn();
        else if (minLen <= this.parts.length)
            this.parts.shift();

        newPart.color = "red";
        this.parts.push(newPart);
        for (let i = 2; i <= this.parts.length; ++i)
            this.parts[this.parts.length - i].color = i % 2 == 0 ? "green" : "#90EE90";

        this.countDown = 15;
    }

    async render(ctx: CanvasRenderingContext2D) {
        this.move();

        for (const part of this.parts)
            await part.load(ctx);

        await this.food.load(ctx);
    }
}