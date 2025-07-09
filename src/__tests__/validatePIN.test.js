import { describe, it, expect } from 'vitest';
import { validatePIN } from '../components/ValidatePinLogic';

describe('validatePIN', () => {
  it('debe retornar false para longitudes distintas de 4 o 6', () => {
    expect(validatePIN("1")).toBe(false);
    expect(validatePIN("123")).toBe(false);
    expect(validatePIN("1234567")).toBe(false);
    expect(validatePIN("00000000")).toBe(false);
  });

  it('debe retornar false para PINs con caracteres no numéricos', () => {
    expect(validatePIN("a234")).toBe(false);
    expect(validatePIN(".234")).toBe(false);
  });

  it('debe retornar true para PINs válidos', () => {
    expect(validatePIN("1234")).toBe(true);
    expect(validatePIN("1111")).toBe(true);
    expect(validatePIN("123456")).toBe(true);
    expect(validatePIN("098765")).toBe(true);
  });
});
