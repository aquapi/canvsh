import FPSCounter from "./fps";
import CanvasObject from "./CanvasObject";

abstract class CanvasRenderer {
    readonly ctx: CanvasRenderingContext2D;
    readonly canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        const ctx = canvas?.getContext("2d");
        if (!ctx)
            throw new Error("Invalid rendering context");

        this.ctx = ctx;
        this.canvas = canvas;
    }

    /**
     * Rendering
     * @param ctx 
     */
    abstract render(ctx: CanvasRenderingContext2D): Promise<void>;
}

/**
 * Start the game loop
 */
async function loop(renderer: CanvasRenderer) {
    renderer.ctx.clearRect(0, 0, renderer.canvas.width, renderer.canvas.height);
    await renderer.render(renderer.ctx);
    return requestAnimationFrame(() => loop(renderer));
}

export {
    CanvasRenderer, CanvasObject, FPSCounter, loop
};

