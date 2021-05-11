export function recursiveMaxElement(array: number[]): number {
    if (array.length === 2) {
     return array[0] > array[1] ? array[0] : array[1];
    }

    const subMax = recursiveMaxElement(array.slice(1));
    return array[0] > subMax ? array[0] : subMax;
}
