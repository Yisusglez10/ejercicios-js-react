import { describe, it, expect } from 'vitest';
import { arrayDiff } from '../components/ArrayDiffLogic';

describe('arrayDiff', () => {
  it('debe calcular correctamente la diferencia de arreglos', () => {
    expect(arrayDiff([], [4,5])).toEqual([]);
    expect(arrayDiff([3,4], [3])).toEqual([4]);
    expect(arrayDiff([1,8,2], [])).toEqual([1,8,2]);
    expect(arrayDiff([1,2,3], [1,2])).toEqual([3]);
  });
});
