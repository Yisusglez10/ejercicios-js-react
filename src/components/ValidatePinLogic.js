// Se define una expresión regular que permite solo cadenas numéricas de 4 o 6 dígitos.
// ^ y $ aseguran que no haya nada antes ni después.
// \d{4} valida exactamente 4 dígitos, \d{6} valida exactamente 6.
// El operador | permite aceptar cualquiera de las dos longitudes.

export const validatePIN = (pin) => {
  // Retorna true solo si el PIN tiene exactamente 4 o 6 dígitos numéricos
  return /^\d{4}$|^\d{6}$/.test(pin);
};
