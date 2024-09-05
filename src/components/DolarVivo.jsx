import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "react-tippy/dist/tippy.css";

export default function DolarVivo({ ultimos2Dias, porcentajeOmoneda }) {
  const [dolarOficial, setDolarOficial] = useState();
  const [dolarBlue, setDolarBlue] = useState();
  const [dolarMep, setDolarMep] = useState();
  const [dolarTarjeta, setDolarTarjeta] = useState();
  const [dolarMayorista, setDolarMayorista] = useState();
  const [dolarCcl, setDolarCcl] = useState();
  const [dolarCripto, setDolarCripto] = useState();

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

  useEffect(() => {
    axios
      .get("https://dolarapi.com/v1/dolares/mayorista")
      .then((response) => {
        setDolarMayorista(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dolarapi.com/v1/dolares/contadoconliqui")
      .then((response) => {
        setDolarCcl(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dolarapi.com/v1/dolares/cripto")
      .then((response) => {
        setDolarCripto(response.data);
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

  const ayer = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);

  const calcularDiferenciaPorcentual = (valorActual, valorAnterior) => {
    return valorAnterior
      ? ((valorActual - valorAnterior) / valorAnterior) * 100
      : 0;
  };

  const calcularDiferenciaPesos = (valorActual, valorAnterior) => {
    return valorActual - valorAnterior;
  };

  const diferencias = ultimos2Dias.map((tipo) => {
    const hoy =
      tipo.tipo === "oficial"
        ? dolarOficial && dolarOficial.venta
        : tipo.tipo === "blue"
        ? dolarBlue && dolarBlue.venta
        : tipo.tipo === "mep"
        ? dolarMep && dolarMep.venta
        : tipo.tipo === "tarjeta"
        ? dolarTarjeta && dolarTarjeta.venta
        : tipo.tipo === "mayorista"
        ? dolarMayorista && dolarMayorista.venta
        : tipo.tipo === "ccl"
        ? dolarCcl && dolarCcl.venta
        : tipo.tipo === "cripto"
        ? dolarCripto && dolarCripto.venta
        : null;

    const ayer =
      tipo.tipo === "oficial"
        ? ultimos2Dias.find((t) => t.tipo === "oficial").ayer
        : tipo.tipo === "blue"
        ? ultimos2Dias.find((t) => t.tipo === "blue").ayer
        : tipo.tipo === "mep"
        ? ultimos2Dias.find((t) => t.tipo === "mep").ayer
        : tipo.tipo === "tarjeta"
        ? ultimos2Dias.find((t) => t.tipo === "tarjeta").ayer
        : tipo.tipo === "mayorista"
        ? ultimos2Dias.find((t) => t.tipo === "mayorista").ayer
        : tipo.tipo === "ccl"
        ? ultimos2Dias.find((t) => t.tipo === "ccl").ayer
        : tipo.tipo === "cripto"
        ? ultimos2Dias.find((t) => t.tipo === "cripto").ayer
        : null;

    const anteayer =
      tipo.tipo === "oficial"
        ? ultimos2Dias.find((t) => t.tipo === "oficial").anteayer
        : tipo.tipo === "blue"
        ? ultimos2Dias.find((t) => t.tipo === "blue").anteayer
        : tipo.tipo === "mep"
        ? ultimos2Dias.find((t) => t.tipo === "mep").anteayer
        : tipo.tipo === "tarjeta"
        ? ultimos2Dias.find((t) => t.tipo === "tarjeta").anteayer
        : tipo.tipo === "mayorista"
        ? ultimos2Dias.find((t) => t.tipo === "mayorista").anteayer
        : tipo.tipo === "ccl"
        ? ultimos2Dias.find((t) => t.tipo === "ccl").anteayer
        : tipo.tipo === "cripto"
        ? ultimos2Dias.find((t) => t.tipo === "cripto").anteayer
        : null;

    const diferenciaPorcentualHoy = calcularDiferenciaPorcentual(hoy, ayer);
    const diferenciaPorcentualAyer = calcularDiferenciaPorcentual(
      ayer,
      anteayer
    );
    const diferenciaPesosHoy = calcularDiferenciaPesos(hoy, ayer);
    const diferenciaPesosAyer = calcularDiferenciaPesos(ayer, anteayer);

    return {
      tipo: tipo.tipo,
      diferenciaPorcentualHoy: diferenciaPorcentualHoy,
      diferenciaPorcentualAyer: diferenciaPorcentualAyer,
      diferenciaPesosHoy: diferenciaPesosHoy,
      diferenciaPesosAyer: diferenciaPesosAyer,
    };
  });

  return (
    <>
      <div className="w-full h-full bg-gray-800 text-gray-100 flex">
        <div className="h-full w-4/5 flex">
          <div className="h-full w-[15%] border-r border-gray-600 pl-4">
            <div className="w-full h-1/5 flex items-start justify-end text-xs flex-col text-yellow-200 tracking-wider">
              <span className=" text-pink-200">Última actualización:</span>
              <span className="font-semibold">{formattedDateTime}</span>
            </div>
            <div className="w-full h-2/5 flex items-center text-2xl">
              EN VIVO
              <img src="/assets/live.gif" alt="" className="w-2 h-2 ml-3" />
            </div>
            <div className="w-full h-1/5 flex items-center text-lg text-center">
              {`${ayer.getDate()}/${ayer.getMonth() + 1}/${ayer.getFullYear()}`}
            </div>
            <div className="w-full h-1/5 flex items-center text-xs">
              {`${ayer.getDate() - 1}/${
                ayer.getMonth() + 1
              }/${ayer.getFullYear()}`}{" "}
            </div>
          </div>
          <div className="h-full w-5/6 flex">
            {/* Oficial */}
            <div className="w-1/4 h-full">
              <div className="w-full h-1/5 flex items-center justify-center text-green-400 text-lg border-b-2 border-green-200">
                OFICIAL
              </div>
              <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                $&nbsp;{dolarOficial && dolarOficial.venta}
                <span className="text-gray-400">
                  &nbsp;(
                  {porcentajeOmoneda === "porcentaje"
                    ? diferencias
                        .find((tipo) => tipo.tipo === "oficial")
                        .diferenciaPorcentualHoy.toFixed(2) + "%"
                    : "$" +
                      diferencias
                        .find((tipo) => tipo.tipo === "oficial")
                        .diferenciaPesosHoy.toFixed(2)}
                  )
                </span>
              </div>
              <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                $&nbsp;
                {ultimos2Dias.find((tipo) => tipo.tipo === "oficial").ayer}
                <span className="text-gray-400">
                  &nbsp;(
                  {porcentajeOmoneda === "porcentaje"
                    ? diferencias
                        .find((tipo) => tipo.tipo === "oficial")
                        .diferenciaPorcentualAyer.toFixed(2) + "%"
                    : "$" +
                      diferencias
                        .find((tipo) => tipo.tipo === "oficial")
                        .diferenciaPesosAyer.toFixed(2)}
                  )
                </span>
              </div>
              <div className="w-full h-1/5 flex items-center justify-center text-xs">
                $&nbsp;
                {ultimos2Dias.find((tipo) => tipo.tipo === "oficial").anteayer}
              </div>
            </div>

            {/* Blue */}
            <div className="w-1/4 h-full">
              <div className="w-full h-1/5 flex items-center justify-center text-blue-400 text-lg border-b-2 border-blue-200">
                BLUE
              </div>
              <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                $&nbsp;{dolarBlue && dolarBlue.venta}
                <span className="text-gray-400">
                  &nbsp;(
                  {porcentajeOmoneda === "porcentaje"
                    ? diferencias
                        .find((tipo) => tipo.tipo === "blue")
                        .diferenciaPorcentualHoy.toFixed(2) + "%"
                    : "$" +
                      diferencias
                        .find((tipo) => tipo.tipo === "blue")
                        .diferenciaPesosHoy.toFixed(2)}
                  )
                </span>
              </div>
              <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                $&nbsp;
                {ultimos2Dias.find((tipo) => tipo.tipo === "blue").ayer}
                <span className="text-gray-400">
                  &nbsp;(
                  {porcentajeOmoneda === "porcentaje"
                    ? diferencias
                        .find((tipo) => tipo.tipo === "blue")
                        .diferenciaPorcentualAyer.toFixed(2) + "%"
                    : "$" +
                      diferencias
                        .find((tipo) => tipo.tipo === "blue")
                        .diferenciaPesosAyer.toFixed(2)}
                  )
                </span>
              </div>
              <div className="w-full h-1/5 flex items-center justify-center text-xs">
                $&nbsp;
                {ultimos2Dias.find((tipo) => tipo.tipo === "blue").anteayer}
              </div>
            </div>

            {/* MEP */}
            <div className="w-1/4 h-full">
              <div className="w-full h-1/5 flex items-center justify-center text-red-400 text-lg border-b-2 border-red-200">
                MEP
              </div>
              <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                $&nbsp;{dolarMep && dolarMep.venta}
                <span className="text-gray-400">
                  &nbsp;(
                  {porcentajeOmoneda === "porcentaje"
                    ? diferencias
                        .find((tipo) => tipo.tipo === "mep")
                        .diferenciaPorcentualHoy.toFixed(2) + "%"
                    : "$" +
                      diferencias
                        .find((tipo) => tipo.tipo === "mep")
                        .diferenciaPesosHoy.toFixed(2)}
                  )
                </span>
              </div>
              <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                $&nbsp;
                {ultimos2Dias.find((tipo) => tipo.tipo === "mep").ayer}
                <span className="text-gray-400">
                  &nbsp;(
                  {porcentajeOmoneda === "porcentaje"
                    ? diferencias
                        .find((tipo) => tipo.tipo === "mep")
                        .diferenciaPorcentualAyer.toFixed(2) + "%"
                    : "$" +
                      diferencias
                        .find((tipo) => tipo.tipo === "mep")
                        .diferenciaPesosAyer.toFixed(2)}
                  )
                </span>
              </div>
              <div className="w-full h-1/5 flex items-center justify-center text-xs">
                $&nbsp;
                {ultimos2Dias.find((tipo) => tipo.tipo === "mep").anteayer}
              </div>
            </div>

            {/* Tarjeta */}
            <div className="w-1/4 h-full">
              <div className="w-full h-1/5 flex items-center justify-center text-yellow-400 text-lg border-b-2 border-yellow-200">
                Tarjeta
              </div>
              <div className="w-full h-2/5 flex items-center justify-center text-2xl">
                $&nbsp;{dolarTarjeta && dolarTarjeta.venta}
                <span className="text-gray-400">
                  &nbsp;(
                  {porcentajeOmoneda === "porcentaje"
                    ? diferencias
                        .find((tipo) => tipo.tipo === "mep")
                        .diferenciaPorcentualHoy.toFixed(2) + "%"
                    : "$" +
                      diferencias
                        .find((tipo) => tipo.tipo === "mep")
                        .diferenciaPesosHoy.toFixed(2)}
                  )
                </span>
              </div>
              <div className="w-full h-1/5 flex items-center justify-center texl-lg">
                $&nbsp;
                {ultimos2Dias.find((tipo) => tipo.tipo === "tarjeta").ayer}
                <span className="text-gray-400">
                  &nbsp;(
                  {porcentajeOmoneda === "porcentaje"
                    ? diferencias
                        .find((tipo) => tipo.tipo === "tarjeta")
                        .diferenciaPorcentualAyer.toFixed(2) + "%"
                    : "$" +
                      diferencias
                        .find((tipo) => tipo.tipo === "tarjeta")
                        .diferenciaPesosAyer.toFixed(2)}
                  )
                </span>
              </div>
              <div className="w-full h-1/5 flex items-center justify-center text-xs">
                $&nbsp;
                {ultimos2Dias.find((tipo) => tipo.tipo === "tarjeta").anteayer}
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-1/5 border-l border-gray-600 pl-4">
          <div className="w-full h-1/3 items-center flex ">
            <div className="h-full w-1/2 items-center flex text-cyan-400">
              CCL
            </div>
            <div className="h-full w-1/2 items-center flex">
              {" "}
              $&nbsp;{dolarCcl && dolarCcl.venta}
            </div>
          </div>
          <div className="w-full h-1/3 items-center flex">
            {" "}
            <div className="h-full w-1/2 items-center flex text-orange-400">
              Mayorista
            </div>
            <div className="h-full w-1/2 items-center flex">
              {" "}
              $&nbsp;{dolarMayorista && dolarMayorista.venta}
            </div>
          </div>
          <div className="w-full h-1/3 items-center flex">
            {" "}
            <div className="h-full w-1/2 items-center flex text-pink-400">
              Cripto
            </div>
            <div className="h-full w-1/2 items-center flex">
              {" "}
              $&nbsp;{dolarCripto && dolarCripto.venta}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
