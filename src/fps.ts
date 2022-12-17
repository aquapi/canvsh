export default class FPSCounter {
    private readonly times: number[];

    constructor() {
        this.times = [];
    }

    get fps() {
        return this.times.length;
    }

    run() {
        requestAnimationFrame(() => {
            const now = performance.now();
            while (this.times.length > 0 && this.times[0] <= now - 1000)
                this.times.shift();

            this.times.push(now);
            this.run();
        });
    }
}