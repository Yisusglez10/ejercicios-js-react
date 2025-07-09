// Se inicializa un contador para registrar cuántas veces se multiplican los dígitos.
// El bucle continúa mientras el número tenga más de un dígito (es decir, sea mayor o igual a 10).
// Se convierte el número en string para separar sus dígitos.
// split("") separa los caracteres individualmente.
// map(Number) convierte cada carácter a número.
// reduce multiplica todos los dígitos entre sí.
// Después de cada iteración, se incrementa el contador.
// Al finalizar, se devuelve la cantidad total de pasos realizados.

export const persistence = (num) => {
  // Cuenta cuántas veces se deben multiplicar los dígitos hasta llegar a un solo dígito
  let count = 0;
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a * b);
    count++;
  }
  return count;
};
