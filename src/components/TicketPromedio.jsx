import React from "react";

export default function TicketPromedio({ vista, setVista }) {
  return (
    <div className="w-full h-[95%]">
      TicketPromedio
      <button onClick={() => setVista("general")}>volver</button>
    </div>
  );
}
