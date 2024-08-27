import React from "react";

export default function Particular({ setPublicoOParticular }) {
  return (
    <div className="w-full h-full bg-green-300">
      <button
        className="rounded w-24 bg-blue-700 text-white"
        onClick={() => setPublicoOParticular(null)}
      >
        Volver
      </button>
    </div>
  );
}
