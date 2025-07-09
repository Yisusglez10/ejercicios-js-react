import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import { persistence } from "./PersistentBuggerLogic";

const PersistentBugger = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const num = parseInt(input);
    if (!isNaN(num) && num >= 0) {
      setResult(persistence(num));
    } else {
      setResult("❌ Entrada inválida");
    }
  };

  return (
    <CardWrapper title="Persistent Bugger">
      <div className="flex flex-col justify-center flex-grow">
        <p className="text-sm text-white mb-4 text-center">
          Ingresa un número positivo. El sistema calculará cuántas veces se
          deben multiplicar sus dígitos hasta reducirlo a un solo dígito.
          Ejemplo:{" "}
          <code className="text-zinc-400">
            39 → 3 pasos (3×9 = 27 → 2×7 = 14 → 1×4 = 4)
          </code>
        </p>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ingresa un número"
          className="w-full px-4 py-2 rounded-md bg-zinc-900 border border-zinc-600 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleCheck}
          className="mt-4 w-full bg-indigo-700 hover:bg-indigo-800 active:scale-95 transition transform text-white font-medium py-2 px-4 rounded-md cursor-pointer"
        >
          Calcular persistencia
        </button>
      </div>

      {result !== null && (
        <p className="mt-4 font-semibold text-center text-indigo-400">
          Resultado: {result}
        </p>
      )}
    </CardWrapper>
  );
};

export default PersistentBugger;
