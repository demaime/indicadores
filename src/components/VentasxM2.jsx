import React from "react";
import Map from "./Map";
import { MAP_JSON } from "./Map/constants";

// <button
//   className="border-2 border-red-300 rounded w-24 h-12"
//   onClick={() => setVista("general")}
// >
//   Volver
// </button>;

export default function VentasxM2({ vista, setVista }) {
  return (
    <div className="w-full h-[95%] flex">
      <div className="w-1/3 h-full flex items-center justify-center">
        <div className="w-[350px] h-[580px] border-4 rounded-xl border-gray-800 bg-blue-200 flex items-center justify-center">
          <Map
            data={{
              map: MAP_JSON,
              width: 300,
              height: 490,
              center: [-60, -34],
              scale: 300,

              currency: "$",
            }}
          />
        </div>
      </div>
      <div className="w-2/3 h-full"></div>
    </div>
  );
}
