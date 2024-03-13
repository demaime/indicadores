import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function DolarVivo() {
  const [dolarOficial, setDolarOficial] = useState();
  const [dolarBlue, setDolarBlue] = useState();
  const [dolarMep, setDolarMep] = useState();

  useEffect(() => {
    axios
      .get("https://dolarapi.com/v1/dolares/oficial")
      .then((response) => {
        setDolarOficial(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dolarapi.com/v1/dolares/blue")
      .then((response) => {
        setDolarBlue(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dolarapi.com/v1/dolares/bolsa")
      .then((response) => {
        setDolarMep(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  const date = new Date(dolarOficial && dolarOficial.fechaActualizacion);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedDateTime = date.toLocaleString("es-AR", options);

  return (
    <>
      <div className="w-full text-xl text-center text-gray-300 bg-gray-600 font-bold tracking-wider">
        <p>COTIZACION EN VIVO</p>
        <p className="text-xs bg-gray-800">
          Última actualización: {formattedDateTime}
        </p>
      </div>
      <div className="w-full py-6 flex justify-evenly items-center">
        {" "}
        <div className="h-28 w-[15rem] border border-white rounded-xl flex flex-col justify-between">
          <span className="h-8 text-xl justify-center bg-green-400 rounded-t-xl text-gray-900 items-center flex">
            OFICIAL
          </span>
          <span className="h-full flex justify-center items-center text-4xl">
            $ {dolarOficial && dolarOficial.venta}
          </span>
        </div>
        <div className="h-28 w-[15rem] border border-white rounded-xl flex flex-col justify-between">
          <span className="h-8 text-xl justify-center bg-blue-400 rounded-t-xl text-gray-900 items-center flex">
            BLUE
          </span>
          <span className="h-full flex justify-center items-center text-4xl">
            $ {dolarBlue && dolarBlue.venta}
          </span>
        </div>{" "}
        <div className="h-28 w-[15rem] border border-white rounded-xl flex flex-col justify-between">
          <span className="h-8 text-xl justify-center bg-red-400 rounded-t-xl text-gray-900 items-center flex">
            MEP
          </span>
          <span className="h-full flex justify-center items-center text-4xl">
            $ {dolarMep && dolarMep.venta}
          </span>
        </div>
      </div>
    </>
  );
}
