import React, { useState } from "react";
import CardWrapper from "./CardWrapper";

// Se define una expresión regular que permite solo cadenas numéricas de 4 o 6 dígitos.
// ^ y $ aseguran que no haya nada antes ni después.
// \d{4} valida exactamente 4 dígitos, \d{6} valida exactamente 6.
// El operador | permite aceptar cualquiera de las dos longitudes.
const validatePIN = (pin) => {
  return /^\d{4}$|^\d{6}$/.test(pin);
};

const ValidatePin = () => {
  const [pin, setPin] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const isValid = validatePIN(pin);
    setResult(isValid);
  };

  return (
    <CardWrapper title="Validate PIN">
      <div className="flex flex-col justify-center flex-grow">
        <p className="text-sm text-white mb-4 text-center">
          Los cajeros automáticos solo permiten códigos PIN de 4 o 6 dígitos
          exactos. No se permiten letras ni símbolos.
        </p>

        <input
          type="text"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Ingresa un PIN"
          className="w-full px-4 py-2 rounded-md bg-zinc-900 border border-zinc-600 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleCheck}
          className="mt-4 w-full bg-indigo-700 hover:bg-indigo-800 active:scale-95 transition transform text-white font-medium py-2 px-4 rounded-md cursor-pointer"
        >
          Validar PIN
        </button>
      </div>

      {result !== null && (
        <p
          className={`mt-4 font-semibold text-center ${
            result ? "text-green-400" : "text-red-400"
          }`}
        >
          Resultado: {result ? "PIN válido ✅" : "PIN inválido ❌"}
        </p>
      )}
    </CardWrapper>
  );
};

export default ValidatePin;
