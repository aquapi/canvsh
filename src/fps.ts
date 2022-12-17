const times = [];
export let fps = 0;

export function loop() {
    requestAnimationFrame(() => {
        const now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) 
            times.shift();
        
        times.push(now);
        fps = times.length;
        loop();
    });
}