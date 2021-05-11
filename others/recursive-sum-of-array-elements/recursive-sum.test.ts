import {recursiveSum} from "./recursive-sum";

const TEST_ARRAY_1 = [33, 5, 6, 0, 18]

describe('recursive sum of array elements', () => {
    test('recursive sum of array with several elements', () => {
        expect(recursiveSum(TEST_ARRAY_1)).toEqual(62)
    })
})
