import { describe, it, expect } from 'vitest';
import { findMissingLetter } from '../components/FindMissingLetterLogic';

describe('findMissingLetter', () => {
  it('debe encontrar la letra faltante correctamente', () => {
    expect(findMissingLetter(['a','b','c','d','f'])).toBe('e');
    expect(findMissingLetter(['O','Q','R','S'])).toBe('P');
    expect(findMissingLetter(["a","b","c","d","f"])).toBe("e");
    expect(findMissingLetter(["O","Q","R","S"])).toBe("P");
  });
});
