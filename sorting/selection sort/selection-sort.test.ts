import {selectionSort} from "./selection-sort";

const TEST_ARRAY_1 = [3, 45, 2, 1, 14, -2, 88, 19, 45, 14];
const TEST_ARRAY_2 = ['a', 'bb', 'b', 'aaa', 'ggg', 'ab']

describe('selection sort', () => {
    test('sort number array', () => {
        expect(selectionSort(TEST_ARRAY_1)).toStrictEqual([-2, 1, 2, 3, 14, 14, 19, 45, 45, 88]);
    })

    test('sort string array', () => {
        expect(selectionSort(TEST_ARRAY_2)).toStrictEqual(['a', 'aaa', 'ab', 'b', 'bb', 'ggg']);
    })
})
