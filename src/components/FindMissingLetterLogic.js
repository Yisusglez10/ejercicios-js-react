// Se recorre el arreglo comparando cada letra con la siguiente.
// charCodeAt convierte la letra a su valor numérico ASCII.
// Si la siguiente letra no tiene un valor exactamente uno mayor que la actual,
// significa que hay una letra faltante en medio.
// En ese caso, se devuelve el carácter correspondiente a ese valor faltante con fromCharCode.
// Si no se encuentra ninguna diferencia en la secuencia, se devuelve null.

export const findMissingLetter = (array) => {
  // Recorre las letras buscando un salto en su código ASCII
  for (let i = 0; i < array.length - 1; i++) {
    const actual = array[i].charCodeAt(0);
    const siguiente = array[i + 1].charCodeAt(0);
    if (siguiente !== actual + 1) {
      return String.fromCharCode(actual + 1);
    }
  }
  return null;
};
