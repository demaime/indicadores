import React, { useState } from "react";
import Map from "./Map";
import { MAP_JSON } from "./Map/constants";
import { FaArrowLeft } from "react-icons/fa";

export default function VentasxM2({ vista, setVista }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleImageHover = () => {
    setHoveredItem({
      name: "Ciudad de Buenos Aires",
      value: "Valor específico",
    });
  };

  const handleImageLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="w-full h-[95%] flex">
      <div className="w-1/3 h-full flex items-center justify-center">
        <div className="w-[350px] h-[580px] border-4 rounded-xl border-gray-800 bg-blue-200 flex items-center justify-center relative">
          <div className="absolute bottom-0 right-0 h-28 w-28 flex items-center justify-center bg-blue-200 rounded ">
            <img
              src="./assets/cabamapa.png"
              className="h-24 w-24 img-hover"
              alt=""
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            />
          </div>
          <Map
            data={{
              map: MAP_JSON,
              width: 300,
              height: 490,
              center: [-60, -34],
              scale: 300,
              currency: "$",
            }}
            onHover={(item) => setHoveredItem(item)}
          />
        </div>
      </div>
      <div className="w-2/3 h-full flex justify-center items-center relative">
        <button
          className="text-white bg-blue-900 rounded w-24 h-8 flex items-center justify-center absolute top-1 right-4 hover:bg-blue-600 border-black border-2"
          onClick={() => setVista("general")}
        >
          Volver
        </button>
        ;
        <div className="h-[580px] w-full border-4 rounded-xl border-gray-800 mr-8 p-4">
          {hoveredItem ? (
            <div className="w-full h-full flex flex-col items-center justify-evenly">
              <h3 className="text-4xl font-bold w-full text-center">
                {hoveredItem.name.toLocaleUpperCase()}
              </h3>
              <div className="w-full h-full flex flex-col">
                <div className="w-full flex h-1/2 items-center justify-evenly">
                  <div className="w-1/2 h-full  flex flex-col items-center justify-evenly">
                    <div className="w-72 h-14 rounded text-gray-200 bg-gray-700 flex flex-col items-center justify-center">
                      <span className="text-2xl">VENTAS TOTALES</span>
                    </div>
                    <div className="w-24 h-12 rounded text-gray-200 bg-gray-700 flex items-center justify-center">
                      {hoveredItem.value}
                    </div>{" "}
                  </div>
                  <div className="w-1/2 h-full  flex flex-col items-center justify-evenly">
                    <div className="w-72 h-14 rounded text-gray-200 bg-gray-700 flex flex-col items-center justify-center">
                      <span className="text-2xl">VENTAS POR HABITANTE</span>
                    </div>
                    <div className="w-24 h-12 rounded text-gray-200 bg-gray-700 flex items-center justify-center">
                      {hoveredItem.value}
                    </div>{" "}
                  </div>
                </div>

                <div className="w-full flex h-1/2 items-center justify-evenly bg-red-300">
                  graficos
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full items-center justify-evenly flex-col">
              <p className="h-1/3 text-center flex items-center justify-center">
                Pasa el mouse sobre un elemento del mapa para ver la
                información.
              </p>

              <div className="w-full h-1/3 flex items-center justify-center">
                <FaArrowLeft className="opacity-10 animate-pulse" size={150} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
