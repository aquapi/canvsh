import * as FPSCounter from "./fps";
import CanvasObject from "./CanvasObject";

abstract class CanvasRenderer {
    readonly ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        const ctx = canvas?.getContext("2d");
        if (!ctx)
            throw new Error("Invalid rendering context");

        this.ctx = ctx;
        FPSCounter.loop();
    }

    /**
     * FPS Getter
     */
    get fps() {
        return FPSCounter.fps;
    }

    /**
     * Rendering
     * @param ctx 
     */
    abstract render(ctx: CanvasRenderingContext2D): Promise<void>;

    /**
     * Start the game loop
     * @returns the animation ID
     */
    async start() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        await this.render(this.ctx);
        return requestAnimationFrame(() => this.start());
    }
}

export {
    CanvasRenderer, CanvasObject
};