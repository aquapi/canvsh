export const INIT_SIZE = 30;
export function round(size: number) {
    return size - size % INIT_SIZE;
}