export function binarySearch<T>(array: T[], item: T): number | string {
    let low = 0
    let high = array.length - 1;
    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        if (item === array[middle]) {
            return middle;
        }

        if (item < array[middle]) {
            high = middle - 1;
        }

        if (item > array[middle]) {
            low = middle + 1;
        }
    }

    return 'item is not found';
}
