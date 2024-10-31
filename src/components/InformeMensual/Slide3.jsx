import React from "react";
import paises from "./paises.png";

export default function Slide3() {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-evenly">
      <div className="w-full h-1/2 flex items-center justify-center">
        {" "}
        <img src={paises} alt="" className="h-[90%]" />
      </div>
      <div className="w-full h-1/2 flex items-center justify-center">
        <div className="w-[90%] bg-blue-300 rounded h-[90%] text-[#044c7e] flex text-lg items-center flex-col justify-evenly font-semibold text-center shadow shadow-blue-900 px-2">
          <p className="bg-blue-500 w-[110%] rounded text-white px-4">
            Brasil es uno de los países que mayor crecimiento interanual ha
            tenido, nuevamente, durante el mes de agosto, con un buen desempeño
            del sector de máquinas y equipos eléctricos.
          </p>
          <p>
            México, por su lado, evidenció otra caída interanual con un -4,4% de
            variación.
          </p>
          <p className="bg-blue-500 w-[110%] rounded text-white px-4">
            {" "}
            Perú, por su lado, registró otra caída de -3,7% en el último dato
            disponible, al igual que Uruguay aunque este último en una magnitud
            mucho mayor.
          </p>
          <p>
            {" "}
            Finalmente, Estados Unidos registró una variación positiva de 1,7%
            con respecto al año previo durante el mes de agosto. Ha tenido un
            buen desempeño el sector de equipo eléctrico y partes para equipos.
          </p>
        </div>
      </div>
    </div>
  );
}
