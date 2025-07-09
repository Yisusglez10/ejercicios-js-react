import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import { findMissingLetter } from "./FindMissingLetterLogic";

const FindMissingLetter = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    // Validar si el input parece un arreglo de letras
    if (!input.trim().startsWith("[") || !input.trim().endsWith("]")) {
      setResult('❌ Entrada inválida. Usa formato tipo ["a","b","c"]');
      return;
    }

    try {
      const parsed = JSON.parse(input);

      // Confirmar que sea un arreglo
      if (!Array.isArray(parsed)) {
        setResult('❌ Entrada inválida. Usa formato tipo ["a","b","c"]');
        return;
      }

      // Validar que solo contenga letras individuales
      const isValid = parsed.every(
        (ch) =>
          typeof ch === "string" && ch.length === 1 && /^[a-zA-Z]$/.test(ch)
      );

      if (!isValid) {
        setResult('❌ Entrada inválida. Usa formato tipo ["a","b","c"]');
        return;
      }

      // Buscar la letra faltante
      const missing = findMissingLetter(parsed);
      setResult(missing ?? "✅ No falta ninguna letra");
    } catch {
      // Si falla el parseo del JSON
      setResult('❌ Entrada inválida. Usa formato tipo ["a","b","c"]');
    }
  };

  return (
    <CardWrapper title="Find the Missing Letter">
      <div className="flex flex-col justify-center flex-grow">
        <p className="text-sm text-white mb-4 text-center">
          Ingresa un arreglo de letras consecutivas. Se detectará cuál falta.
          Ejemplo válido:{" "}
          <code className="text-zinc-400">["a","b","c","e"]</code>
        </p>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Ejemplo: ["a","b","c","e"]'
          className="w-full px-4 py-2 rounded-md bg-zinc-900 border border-zinc-600 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-800"
        />

        <button
          onClick={handleCheck}
          className="mt-4 w-full bg-indigo-700 hover:bg-indigo-800 active:scale-95 transition transform text-white font-medium py-2 px-4 rounded-md cursor-pointer"
        >
          Detectar letra faltante
        </button>
      </div>

      {result && (
        <p className="mt-4 font-semibold text-center text-indigo-400">
          Resultado: {result}
        </p>
      )}
    </CardWrapper>
  );
};

export default FindMissingLetter;
