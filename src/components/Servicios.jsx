import React, { useState } from "react";
import ServiciosMes from "./ServiciosMes";

export default function Servicios() {
  const [mesSeleccionado, setMesSeleccionado] = useState("marzo");

  const meses = ["marzo", "abril", "mayo"]; // Puedes agregar más meses aquí

  return (
    <div className="w-full h-full bg-gray-200 flex flex-col">
      <div className="w-full h-[8%] bg-gray-800 flex items-center justify-evenly">
        {meses.map((mes) => (
          <button
            key={mes}
            className={`h-8 w-64 rounded-xl text-sm font-bold ${
              mes === mesSeleccionado ? "bg-pink-200" : "bg-gray-200"
            }`}
            onClick={() => setMesSeleccionado(mes)}
          >
            {mes.toUpperCase()}
          </button>
        ))}
      </div>
      <ServiciosMes mesData={mesSeleccionado} />
    </div>
  );
}
