// Se usa filter para recorrer el arreglo `a`.
// En cada elemento, se verifica que no esté incluido en el arreglo `b`.
// Solo se conservan los elementos que no están en `b`.
// El resultado es un nuevo arreglo con los elementos filtrados.

export const arrayDiff = (a, b) => {
  // Filtra los elementos de 'a' que no estén en 'b'
  return a.filter((item) => !b.includes(item));
};
