import React from "react";
import Map from "./Map";
import { MAP_JSON } from "./Map/constants";

export default function VentasxM2({ vista, setVista }) {
  return (
    <div className="w-full h-[95%]">
      <div className="w-full h-[10%] flex items-center justify-center">
        <button
          className="border-2 border-red-300 rounded w-24 h-12"
          onClick={() => setVista("general")}
        >
          Volver
        </button>
      </div>
      <div className="w-full h-[90%] flex">
        <Map
          data={{
            map: MAP_JSON,
            width: 350,
            height: 600,
            center: [-65, -40],
            scale: 350,
            currency: "$",
          }}
        />
      </div>
    </div>
  );
}
