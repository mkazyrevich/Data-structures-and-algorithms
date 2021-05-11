import {recursiveMaxElement} from "./recursive-max-element";

const TEST_ARRAY_1 = [33, 5, 6, 44, 0, 18]

describe('recursive max element of array', () => {
    test('recursive max element of array several elements', () => {
        expect(recursiveMaxElement(TEST_ARRAY_1)).toEqual(44)
    })
})
