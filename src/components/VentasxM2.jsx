import React from "react";

export default function VentasxM2({ vista, setVista }) {
  return (
    <div className="w-full h-[95%] flex">
      <button onClick={() => setVista("general")}>Volver</button>
    </div>
  );
}
