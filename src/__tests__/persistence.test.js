import { describe, it, expect } from 'vitest';
import { persistence } from '../components/PersistentBuggerLogic';

describe('persistence', () => {
  it('debe calcular correctamente la persistencia multiplicativa', () => {
    expect(persistence(39)).toBe(3);
    expect(persistence(4)).toBe(0);
    expect(persistence(25)).toBe(2);
    expect(persistence(999)).toBe(4);
  });
});
