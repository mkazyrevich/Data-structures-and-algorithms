export function recursiveSum(array: number[]): number {
    if (!array.length) {
        return 0
    }

    return array[0] + recursiveSum(array.slice(1));
}
