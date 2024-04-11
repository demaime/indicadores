import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export default function DolarVivo() {
  const [dolarOficial, setDolarOficial] = useState();
  const [dolarBlue, setDolarBlue] = useState();
  const [dolarMep, setDolarMep] = useState();
  const [dolarTarjeta, setDolarTarjeta] = useState();

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

  useEffect(() => {
    axios
      .get("https://dolarapi.com/v1/dolares/tarjeta")
      .then((response) => {
        setDolarTarjeta(response.data);
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
      <div className="w-full text-xl text-center text-gray-300 bg-gray-600 font-bold tracking-wider h-1/5">
        <p className="h-3/5 flex items-center justify-center p-4">
          <span>COTIZACION EN VIVO</span>
          <img className="h-4 ml-2" src="/assets/live.gif" alt="LIVE!"></img>
        </p>
        <p className="h-2/5 text-xs bg-gray-800 flex items-center justify-center text-gray-100">
          Última actualización: {formattedDateTime}
        </p>
      </div>
      <div className="w-full h-4/5 flex justify-evenly items-center">
        {" "}
        <div className="h-28 w-[15rem] border border-white rounded-xl flex flex-col justify-between">
          <span className="h-8 text-xl justify-center bg-green-400 rounded-t-xl text-gray-900 items-center flex relative">
            OFICIAL
            <Tooltip
              title="Corresponde al valor del dolar nación"
              position="top"
              trigger="mouseenter"
              arrow={true}
              theme="light"
              defaultStyles={{ background: "#f0f0f0", color: "#333" }}
            >
              <IoIosHelpCircleOutline className="absolute top-1 right-2" />
            </Tooltip>
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
        <div className="h-28 w-[15rem] border border-white rounded-xl flex flex-col justify-between">
          <span className="h-8 text-xl justify-center bg-yellow-400 rounded-t-xl text-gray-900 items-center flex">
            TARJETA
          </span>
          <span className="h-full flex justify-center items-center text-4xl">
            $ {dolarTarjeta && dolarTarjeta.venta}
          </span>
        </div>
      </div>
    </>
  );
}
