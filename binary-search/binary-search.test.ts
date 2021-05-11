import {binarySearch} from "./binary-search";

const TEST_ARRAY_1 = [-2, 1, 2, 3, 14, 14, 19, 45, 45, 88];
const TEST_ARRAY_2 = ['a', 'aaa', 'ab', 'b', 'bb', 'ggg']

describe('binary search', () => {
    test('search in number array', () => {
        expect(binarySearch(TEST_ARRAY_1, 19)).toEqual(6);
    })

    test('search in string array', () => {
        expect(binarySearch(TEST_ARRAY_2, 'aaa')).toEqual(1);
    })
    test('item is not found case', () => {
        expect(binarySearch(TEST_ARRAY_1, 18)).toEqual('item is not found');
    })
})
