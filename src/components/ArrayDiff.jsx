import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import { arrayDiff } from "./ArrayDiffLogic";

const ArrayDiff = () => {
  const [arrayA, setArrayA] = useState("");
  const [arrayB, setArrayB] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    try {
      const parsedA = JSON.parse(arrayA);
      const parsedB = JSON.parse(arrayB);

      // Verificar que ambas entradas sean arreglos
      if (!Array.isArray(parsedA) || !Array.isArray(parsedB)) {
        throw new Error("Ambas entradas deben ser arreglos válidos");
      }

      const diff = arrayDiff(parsedA, parsedB);
      setResult(JSON.stringify(diff));
    } catch (err) {
      setResult(`❌ Entrada inválida. Usa formato como [1,2,3]`);
    }
  };

  return (
    <CardWrapper title="Array Diff">
      <div className="flex flex-col justify-center flex-grow">
        <p className="text-sm text-white mb-4 text-center">
          Ingresa dos arreglos. Se eliminarán los elementos del primer arreglo
          que estén en el segundo.
          <br />
          Ejemplo válido: <code className="text-zinc-400">[1,2,2,3] y [2]</code>
        </p>

        <div className="mb-3">
          <label className="text-sm text-zinc-400 block mb-1">Arreglo A</label>
          <input
            type="text"
            value={arrayA}
            onChange={(e) => setArrayA(e.target.value)}
            placeholder="Ej: [1, 2, 2, 3]"
            className="w-full px-4 py-2 rounded-md bg-zinc-900 border border-zinc-600 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-800"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-zinc-400 block mb-1">Arreglo B</label>
          <input
            type="text"
            value={arrayB}
            onChange={(e) => setArrayB(e.target.value)}
            placeholder="Ej: [2]"
            className="w-full px-4 py-2 rounded-md bg-zinc-900 border border-zinc-600 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-800"
          />
        </div>

        <button
          onClick={handleCheck}
          className="w-full bg-indigo-700 hover:bg-indigo-800 active:scale-95 transition transform text-white font-medium py-2 px-4 rounded-md cursor-pointer"
        >
          Calcular diferencia
        </button>
      </div>

      {result && (
        <p
          className={`mt-4 font-semibold text-center ${
            result.startsWith("❌") ? "text-red-400" : "text-indigo-400"
          }`}
        >
          Resultado: {result}
        </p>
      )}
    </CardWrapper>
  );
};

export default ArrayDiff;
