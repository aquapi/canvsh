export default abstract class CanvasObject {
    readonly canvas: HTMLCanvasElement;

    /**
     * Create a canvas object
     * @param canvas 
     */
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    };

    /**
     * Rendering
     * @param ctx 
     */
    abstract render(ctx: CanvasRenderingContext2D): Promise<void>;

    /**
     * Load
     * @param ctx 
     */
    async load(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        await this.render(ctx);
        ctx.closePath();
    }
}