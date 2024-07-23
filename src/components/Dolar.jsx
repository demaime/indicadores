import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import axios from "axios";
import DolarVivo from "./DolarVivo";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Dolar() {
  const [comparativoOEvolutivo, setComparativoOEvolutivo] =
    useState("comparativo");
  const [mesSeleccionado, setMesSeleccionado] = useState("junio");
  const [porcentajeOmoneda, setPorcentajeOmoneda] = useState("porcentaje");
  const [promediosOficial2024, setPromediosOficial2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
  });
  const [promediosBlue2024, setPromediosBlue2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
  });
  const [promediosMep2024, setPromediosMep2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
  });
  const [promediosTarjeta2024, setPromediosTarjeta2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
  });
  const [promediosCcl2024, setPromediosCcl2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
  });
  const [promediosCripto2024, setPromediosCripto2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
  });
  const [promediosMayorista2024, setPromediosMayorista2024] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
  });

  const [promedios2023, setPromedios2023] = useState();

  const promedioOficial = parseFloat(promediosOficial2024[mesSeleccionado]);
  const promedioBlue = parseFloat(promediosBlue2024[mesSeleccionado]);
  const promedioMep = parseFloat(promediosMep2024[mesSeleccionado]);
  const promedioTarjeta = parseFloat(promediosTarjeta2024[mesSeleccionado]);
  const promedioCcl = parseFloat(promediosCcl2024[mesSeleccionado]);
  const promedioCripto = parseFloat(promediosCripto2024[mesSeleccionado]);
  const promedioMayorista = parseFloat(promediosMayorista2024[mesSeleccionado]);

  const data = [
    {
      name: "oficial",
      minValue: 0,
      maxValue: promedioOficial,
      color: "#4ade80",
    },
    {
      name: "mayorista",
      minValue: promedioOficial,
      maxValue: promedioMayorista,
      color: "#fb923c",
    },
    {
      name: "blue",
      minValue: promedioOficial,
      maxValue: promedioBlue,
      color: "#60a5fa",
    },
    {
      name: "mep",
      minValue: promedioOficial,
      maxValue: promedioMep,
      color: "#f87171",
    },
    {
      name: "ccl",
      minValue: promedioOficial,
      maxValue: promedioCcl,
      color: "#22d3ee",
    },
    {
      name: "cripto",
      minValue: promedioOficial,
      maxValue: promedioCripto,
      color: "#f472b6",
    },
    {
      name: "tarjeta",
      minValue: promedioOficial,
      maxValue: promedioTarjeta,
      color: "#facc15",
    },
  ];

  const [ultimos2Dias, setUltimos2Dias] = useState([
    {
      tipo: "oficial",
      ayer: 0,
      anteayer: 0,
    },
    {
      tipo: "blue",
      ayer: 0,
      anteayer: 0,
    },
    {
      tipo: "mep",
      ayer: 0,
      anteayer: 0,
    },
    {
      tipo: "tarjeta",
      ayer: 0,
      anteayer: 0,
    },
    {
      tipo: "mayorista",
      ayer: 0,
      anteayer: 0,
    },
    {
      tipo: "ccl",
      ayer: 0,
      anteayer: 0,
    },
    {
      tipo: "cripto",
      ayer: 0,
      anteayer: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/oficial"
        );
        // Calcular el promedio de ventas para cada mes
        const dataOficial2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const dataOficial2023 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2023")
        );

        const ultimoResultado = dataOficial2024[dataOficial2024.length - 1];
        const anteultimoResultado = dataOficial2024[dataOficial2024.length - 2];

        setUltimos2Dias((prevValues) => [
          ...prevValues.map((item) =>
            item.tipo === "oficial"
              ? {
                  ...item,
                  ayer: ultimoResultado ? ultimoResultado.venta : 0,
                  anteayer: anteultimoResultado ? anteultimoResultado.venta : 0,
                }
              : item
          ),
        ]);

        const promedios2024 = {
          enero: calcularPromedio(
            dataOficial2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataOficial2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataOficial2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataOficial2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
          mayo: calcularPromedio(
            dataOficial2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-05")
            )
          ),
          junio: calcularPromedio(
            dataOficial2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-06")
            )
          ),
        };
        const promedios2023 = {
          enero: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-01")
            )
          ),
          febrero: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-02")
            )
          ),
          marzo: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-03")
            )
          ),
          abril: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-04")
            )
          ),
          mayo: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-05")
            )
          ),
          junio: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-06")
            )
          ),
          julio: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-07")
            )
          ),
          agosto: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-08")
            )
          ),
          septiembre: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-09")
            )
          ),
          octubre: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-10")
            )
          ),
          noviembre: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-11")
            )
          ),
          diciembre: calcularPromedio(
            dataOficial2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-12")
            )
          ),
        };
        setPromediosOficial2024(promedios2024);
        setPromedios2023((prevPromedios2023) => ({
          ...prevPromedios2023,
          oficial: promedios2023,
        }));
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/blue"
        );
        // Calcular el promedio de ventas para cada mes
        const dataBlue2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const dataBlue2023 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2023")
        );

        const ultimoResultado = dataBlue2024[dataBlue2024.length - 1];
        const anteultimoResultado = dataBlue2024[dataBlue2024.length - 2];

        setUltimos2Dias((prevValues) => [
          ...prevValues.map((item) =>
            item.tipo === "blue"
              ? {
                  ...item,
                  ayer: ultimoResultado ? ultimoResultado.venta : 0,
                  anteayer: anteultimoResultado ? anteultimoResultado.venta : 0,
                }
              : item
          ),
        ]);

        const promedios2024 = {
          enero: calcularPromedio(
            dataBlue2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataBlue2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataBlue2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataBlue2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
          mayo: calcularPromedio(
            dataBlue2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-05")
            )
          ),
          junio: calcularPromedio(
            dataBlue2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-06")
            )
          ),
          // Agrega más meses si es necesario
        };
        const promedios2023 = {
          enero: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-01")
            )
          ),
          febrero: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-02")
            )
          ),
          marzo: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-03")
            )
          ),
          abril: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-04")
            )
          ),
          mayo: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-05")
            )
          ),
          junio: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-06")
            )
          ),
          julio: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-07")
            )
          ),
          agosto: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-08")
            )
          ),
          septiembre: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-09")
            )
          ),
          octubre: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-10")
            )
          ),
          noviembre: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-11")
            )
          ),
          diciembre: calcularPromedio(
            dataBlue2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-12")
            )
          ),
        };
        setPromediosBlue2024(promedios2024);
        setPromedios2023((prevPromedios2023) => ({
          ...prevPromedios2023,
          blue: promedios2023,
        }));
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/bolsa"
        );
        // Calcular el promedio de ventas para cada mes
        const dataMep2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const dataMep2023 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2023")
        );

        const ultimoResultado = dataMep2024[dataMep2024.length - 1];
        const anteultimoResultado = dataMep2024[dataMep2024.length - 2];

        setUltimos2Dias((prevValues) => [
          ...prevValues.map((item) =>
            item.tipo === "mep"
              ? {
                  ...item,
                  ayer: ultimoResultado ? ultimoResultado.venta : 0,
                  anteayer: anteultimoResultado ? anteultimoResultado.venta : 0,
                }
              : item
          ),
        ]);

        const promedios2024 = {
          enero: calcularPromedio(
            dataMep2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataMep2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataMep2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataMep2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
          mayo: calcularPromedio(
            dataMep2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-05")
            )
          ),
          junio: calcularPromedio(
            dataMep2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-06")
            )
          ),
        };
        const promedios2023 = {
          enero: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-01")
            )
          ),
          febrero: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-02")
            )
          ),
          marzo: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-03")
            )
          ),
          abril: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-04")
            )
          ),
          mayo: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-05")
            )
          ),
          junio: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-06")
            )
          ),
          julio: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-07")
            )
          ),
          agosto: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-08")
            )
          ),
          septiembre: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-09")
            )
          ),
          octubre: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-10")
            )
          ),
          noviembre: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-11")
            )
          ),
          diciembre: calcularPromedio(
            dataMep2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-12")
            )
          ),
        };
        setPromediosMep2024(promedios2024);
        setPromedios2023((prevPromedios2023) => ({
          ...prevPromedios2023,
          mep: promedios2023,
        }));
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/tarjeta"
        );
        // Calcular el promedio de ventas para cada mes
        const dataTarjeta2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const dataTarjeta2023 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2023")
        );

        const ultimoResultado = dataTarjeta2024[dataTarjeta2024.length - 1];
        const anteultimoResultado = dataTarjeta2024[dataTarjeta2024.length - 2];

        setUltimos2Dias((prevValues) => [
          ...prevValues.map((item) =>
            item.tipo === "tarjeta"
              ? {
                  ...item,
                  ayer: ultimoResultado ? ultimoResultado.venta : 0,
                  anteayer: anteultimoResultado ? anteultimoResultado.venta : 0,
                }
              : item
          ),
        ]);

        const promedios2024 = {
          enero: calcularPromedio(
            dataTarjeta2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataTarjeta2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataTarjeta2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataTarjeta2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
          mayo: calcularPromedio(
            dataTarjeta2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-05")
            )
          ),
          junio: calcularPromedio(
            dataTarjeta2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-06")
            )
          ),
        };
        const promedios2023 = {
          enero: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-01")
            )
          ),
          febrero: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-02")
            )
          ),
          marzo: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-03")
            )
          ),
          abril: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-04")
            )
          ),
          mayo: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-05")
            )
          ),
          junio: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-06")
            )
          ),
          julio: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-07")
            )
          ),
          agosto: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-08")
            )
          ),
          septiembre: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-09")
            )
          ),
          octubre: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-10")
            )
          ),
          noviembre: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-11")
            )
          ),
          diciembre: calcularPromedio(
            dataTarjeta2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-12")
            )
          ),
        };
        setPromediosTarjeta2024(promedios2024);
        setPromedios2023((prevPromedios2023) => ({
          ...prevPromedios2023,
          tarjeta: promedios2023,
        }));
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/contadoconliqui"
        );
        // Calcular el promedio de ventas para cada mes
        const dataCcl2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const dataCcl2023 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2023")
        );

        const ultimoResultado = dataCcl2024[dataCcl2024.length - 1];
        const anteultimoResultado = dataCcl2024[dataCcl2024.length - 2];

        setUltimos2Dias((prevValues) => [
          ...prevValues.map((item) =>
            item.tipo === "ccl"
              ? {
                  ...item,
                  ayer: ultimoResultado ? ultimoResultado.venta : 0,
                  anteayer: anteultimoResultado ? anteultimoResultado.venta : 0,
                }
              : item
          ),
        ]);

        const promedios2024 = {
          enero: calcularPromedio(
            dataCcl2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataCcl2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataCcl2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataCcl2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
          mayo: calcularPromedio(
            dataCcl2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-05")
            )
          ),
          junio: calcularPromedio(
            dataCcl2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-06")
            )
          ),
        };
        const promedios2023 = {
          enero: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-01")
            )
          ),
          febrero: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-02")
            )
          ),
          marzo: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-03")
            )
          ),
          abril: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-04")
            )
          ),
          mayo: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-05")
            )
          ),
          junio: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-06")
            )
          ),
          julio: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-07")
            )
          ),
          agosto: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-08")
            )
          ),
          septiembre: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-09")
            )
          ),
          octubre: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-10")
            )
          ),
          noviembre: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-11")
            )
          ),
          diciembre: calcularPromedio(
            dataCcl2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-12")
            )
          ),
        };
        setPromediosCcl2024(promedios2024);
        setPromedios2023((prevPromedios2023) => ({
          ...prevPromedios2023,
          ccl: promedios2023,
        }));
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/cripto"
        );
        // Calcular el promedio de ventas para cada mes
        const dataCripto2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const dataCripto2023 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2023")
        );

        const ultimoResultado = dataCripto2024[dataCripto2024.length - 1];
        const anteultimoResultado = dataCripto2024[dataCripto2024.length - 2];

        setUltimos2Dias((prevValues) => [
          ...prevValues.map((item) =>
            item.tipo === "cripto"
              ? {
                  ...item,
                  ayer: ultimoResultado ? ultimoResultado.venta : 0,
                  anteayer: anteultimoResultado ? anteultimoResultado.venta : 0,
                }
              : item
          ),
        ]);

        const promedios2024 = {
          enero: calcularPromedio(
            dataCripto2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataCripto2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataCripto2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataCripto2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
          mayo: calcularPromedio(
            dataCripto2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-05")
            )
          ),
          junio: calcularPromedio(
            dataCripto2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-06")
            )
          ),
        };
        const promedios2023 = {
          enero: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-01")
            )
          ),
          febrero: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-02")
            )
          ),
          marzo: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-03")
            )
          ),
          abril: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-04")
            )
          ),
          mayo: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-05")
            )
          ),
          junio: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-06")
            )
          ),
          julio: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-07")
            )
          ),
          agosto: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-08")
            )
          ),
          septiembre: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-09")
            )
          ),
          octubre: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-10")
            )
          ),
          noviembre: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-11")
            )
          ),
          diciembre: calcularPromedio(
            dataCripto2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-12")
            )
          ),
        };
        setPromediosCripto2024(promedios2024);
        setPromedios2023((prevPromedios2023) => ({
          ...prevPromedios2023,
          cripto: promedios2023,
        }));
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.argentinadatos.com/v1/cotizaciones/dolares/mayorista"
        );
        // Calcular el promedio de ventas para cada mes
        const dataMayorista2024 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2024")
        );
        const dataMayorista2023 = response.data.filter((cotizacion) =>
          cotizacion.fecha.startsWith("2023")
        );

        const ultimoResultado = dataMayorista2024[dataMayorista2024.length - 1];
        const anteultimoResultado =
          dataMayorista2024[dataMayorista2024.length - 2];

        setUltimos2Dias((prevValues) => [
          ...prevValues.map((item) =>
            item.tipo === "mayorista"
              ? {
                  ...item,
                  ayer: ultimoResultado ? ultimoResultado.venta : 0,
                  anteayer: anteultimoResultado ? anteultimoResultado.venta : 0,
                }
              : item
          ),
        ]);

        const promedios2024 = {
          enero: calcularPromedio(
            dataMayorista2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-01")
            )
          ),
          febrero: calcularPromedio(
            dataMayorista2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-02")
            )
          ),
          marzo: calcularPromedio(
            dataMayorista2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-03")
            )
          ),
          abril: calcularPromedio(
            dataMayorista2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-04")
            )
          ),
          mayo: calcularPromedio(
            dataMayorista2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-05")
            )
          ),
          junio: calcularPromedio(
            dataMayorista2024.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2024-06")
            )
          ),
        };
        const promedios2023 = {
          enero: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-01")
            )
          ),
          febrero: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-02")
            )
          ),
          marzo: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-03")
            )
          ),
          abril: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-04")
            )
          ),
          mayo: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-05")
            )
          ),
          junio: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-06")
            )
          ),
          julio: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-07")
            )
          ),
          agosto: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-08")
            )
          ),
          septiembre: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-09")
            )
          ),
          octubre: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-10")
            )
          ),
          noviembre: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-11")
            )
          ),
          diciembre: calcularPromedio(
            dataMayorista2023.filter((cotizacion) =>
              cotizacion.fecha.startsWith("2023-12")
            )
          ),
        };
        setPromediosMayorista2024(promedios2024);
        setPromedios2023((prevPromedios2023) => ({
          ...prevPromedios2023,
          mayorista: promedios2023,
        }));
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  const calcularPromedio = (data) => {
    const totalVentas = data.reduce(
      (total, cotizacion) => total + cotizacion.venta,
      0
    );
    return (data.length > 0 ? totalVentas / data.length : 0).toFixed(2);
  };

  const handleClickMes = (mesNombre) => {
    setMesSeleccionado(mesNombre);
  };

  const meses = [
    { orden: 1, nombre: "enero" },
    { orden: 2, nombre: "febrero" },
    { orden: 3, nombre: "marzo" },
    { orden: 4, nombre: "abril" },
    { orden: 5, nombre: "mayo" },
    { orden: 6, nombre: "junio" },
    { orden: 7, nombre: "julio" },
    { orden: 8, nombre: "agosto" },
    { orden: 9, nombre: "septiembre" },
    { orden: 10, nombre: "octubre" },
    { orden: 11, nombre: "noviembre" },
    { orden: 12, nombre: "diciembre" },
  ];

  const options = {
    animationEnabled: true,

    axisY: {
      title: "Valor",
      prefix: "$",
      labelFontColor: "#FFFFFF",
      titleFontColor: "#FFFFFF",
      minimum: 600,
      maximum: 1600,
      interval: 100,
    },
    axisX: {
      labelFontColor: "#FFFFFF",
    },
    backgroundColor: "transparent",
    data: [
      {
        type: "rangeColumn",
        dataPointWidth: 30,
        indexLabel: "",
        dataPoints: data.map((entry) => ({
          label: entry.name.toUpperCase(),
          y: [entry.minValue, entry.maxValue],
          color: entry.color,
        })),
      },
    ],
    toolTip: {
      content: function (e) {
        var content = " ";
        var entry = e.entries[0].dataPoint;
        var maxValue = entry.y[1];
        var difference = maxValue - promedioOficial;
        content += `<strong>${entry.label}</strong><br/>`;
        content += `Valor: $${maxValue}<br/>`;
        content += `Diferencia con el valor oficial: $${difference.toFixed(
          2
        )}<br/>`;
        return content;
      },
    },
  };

  const evolutivo = [
    {
      mes: "enero",
      oficial: promediosOficial2024.enero,
      mayorista: promediosMayorista2024.enero,
      blue: promediosBlue2024.enero,
      mep: promediosMep2024.enero,
      ccl: promediosCcl2024.enero,
      cripto: promediosCripto2024.enero,
      tarjeta: promediosTarjeta2024.enero,
    },
    {
      mes: "febrero",
      oficial: promediosOficial2024.febrero,
      mayorista: promediosMayorista2024.febrero,
      blue: promediosBlue2024.febrero,
      mep: promediosMep2024.febrero,
      ccl: promediosCcl2024.febrero,
      cripto: promediosCripto2024.febrero,
      tarjeta: promediosTarjeta2024.febrero,
    },
    {
      mes: "marzo",
      oficial: promediosOficial2024.marzo,
      mayorista: promediosMayorista2024.marzo,
      blue: promediosBlue2024.marzo,
      mep: promediosMep2024.marzo,
      ccl: promediosCcl2024.marzo,
      cripto: promediosCripto2024.marzo,
      tarjeta: promediosTarjeta2024.marzo,
    },

    {
      mes: "abril",
      oficial: promediosOficial2024.abril,
      mayorista: promediosMayorista2024.abril,
      blue: promediosBlue2024.abril,
      mep: promediosMep2024.abril,
      ccl: promediosCcl2024.abril,
      cripto: promediosCripto2024.abril,
      tarjeta: promediosTarjeta2024.abril,
    },
    {
      mes: "mayo",
      oficial: promediosOficial2024.mayo,
      mayorista: promediosMayorista2024.mayo,
      blue: promediosBlue2024.mayo,
      mep: promediosMep2024.mayo,
      ccl: promediosCcl2024.mayo,
      cripto: promediosCripto2024.mayo,
      tarjeta: promediosTarjeta2024.mayo,
    },
    {
      mes: "junio",
      oficial: promediosOficial2024.junio,
      mayorista: promediosMayorista2024.junio,
      blue: promediosBlue2024.junio,
      mep: promediosMep2024.junio,
      ccl: promediosCcl2024.junio,
      cripto: promediosCripto2024.junio,
      tarjeta: promediosTarjeta2024.junio,
    },
  ];

  const tiposDolar = Object.keys(evolutivo[0]).filter((key) => key !== "mes");

  const getColorByName = (name) => {
    const tipo = data.find((item) => item.name === name);
    return tipo ? tipo.color : "#000000"; // Si no se encuentra el tipo, devuelve un color negro
  };

  // Encuentra el índice del mes seleccionado en el array evolutivo
  const indexMesSeleccionado = evolutivo.findIndex(
    (item) => item.mes === mesSeleccionado
  );

  // Calcula las diferencias para cada tipo de dólar
  const calcularDiferenciasMensuales = (tipo) => {
    if (indexMesSeleccionado === -1) {
      return { pesos: 0, porcentaje: 0 };
    }

    const mesActual = evolutivo[indexMesSeleccionado];
    const mesAnterior =
      indexMesSeleccionado > 0 ? evolutivo[indexMesSeleccionado - 1] : null;

    if (!mesAnterior) {
      return { pesos: 0, porcentaje: 0 };
    }

    const valorActual = mesActual[tipo];
    const valorAnterior = mesAnterior[tipo];

    const diferenciaPesos = (valorActual - valorAnterior).toFixed(2);
    const diferenciaPorcentaje = (
      ((valorActual - valorAnterior) / valorAnterior) *
      100
    ).toFixed(2);

    return { pesos: diferenciaPesos, porcentaje: diferenciaPorcentaje };
  };

  function calcularDiferenciaPorcentual(valor1, valor2) {
    const diferencia = valor2 - valor1;
    const porcentaje = (diferencia / valor1) * 100;
    return Math.round(porcentaje * 100) / 100;
  }

  return (
    <div className="w-full h-full bg-gray-800 text-gray-100">
      <div className="w-full h-3/4">
        <div className="w-full h-8 bg-yellow-200 font-semibold tracker-wider text-black flex items-center justify-center ">
          COTIZACION HISTORICA
        </div>
        <div className="h-full w-full flex">
          <div className="h-full w-1/3">
            <div className="w-full bg-transparent rounded-lg h-[10%] flex flex-col items-center justify-center border-b-2 border-gray-600 relative">
              <p className="text-lg">COMPARATIVA PRECIO PROMEDIO</p>
              <p className="text-xs text-gray-300">
                Valores promedios comparados con el dolar oficial
              </p>
              <button
                className={`absolute top-1 right-2 h-6 w-24 bg-blue-500 text-xs flex items-center justify-center rounded-xl ${
                  comparativoOEvolutivo === "comparativo" ? "hidden" : ""
                }`}
                onClick={() => setComparativoOEvolutivo("comparativo")}
              >
                VER DATOS
              </button>
            </div>
            <div
              id="canvachart"
              className="h-[90%] w-full flex flex-col items-center justify-start relative p-2"
            >
              <CanvasJSChart
                options={options}
                containerProps={{ width: "100%", height: "90%" }}
              />
            </div>
          </div>
          <div
            className={`h-full w-1/3 ${
              comparativoOEvolutivo === "comparativo"
                ? "bg-gray-800 border-x-4 border-r-yellow-200 border-l-gray-800"
                : "bg-black border-x-4 border-l-yellow-200 border-r-black"
            }`}
          >
            <div className="h-[10%] w-full flex flex-col items-center justify-evenly">
              <div className="flex w-full h-2/3">
                {meses.map((mes) => (
                  <div
                    className={`w-1/12 h-full flex items-center justify-center text-xs cursor-pointer rounded border-gray-800 border-t ${
                      mes.nombre === mesSeleccionado ? "bg-gray-500" : ""
                    }`}
                    onClick={() => handleClickMes(mes.nombre)}
                  >
                    {mes.orden}
                  </div>
                ))}
              </div>
              <div className="h-1/3 w-full flex items-center justify-center">
                <button className="text-yellow-200">
                  {mesSeleccionado ? mesSeleccionado.toUpperCase() : "MES"}
                </button>
              </div>
            </div>
            <div className="h-[90%] w-full flex flex-col items-center">
              <div className="w-[80%] flex h-[10%] border-b border-gray-600 items-center justify-evenly">
                <button
                  className={`w-14 h-6 p-2 rounded flex items-center justify-center my-1 ${
                    porcentajeOmoneda === "porcentaje"
                      ? "bg-blue-500 border border-white"
                      : "bg-blue-900"
                  }`}
                  onClick={() => setPorcentajeOmoneda("porcentaje")}
                >
                  %
                </button>
                <p className="text-sm">Formato del diferencial</p>
                <button
                  className={`w-14 h-6 p-2 rounded flex items-center justify-center my-1 ${
                    porcentajeOmoneda === "moneda"
                      ? "bg-blue-500 border border-white"
                      : "bg-blue-900"
                  }`}
                  onClick={() => setPorcentajeOmoneda("moneda")}
                >
                  $
                </button>
              </div>

              {comparativoOEvolutivo === "comparativo" ? (
                <div className="w-full h-5/6 flex flex-col items-center justify-start">
                  <div className="w-full h-1/6 flex items-center justify-center">
                    <div className="w-1/2 h-12 bg-green-400 text-gray-800 rounded-xl">
                      <span className="h-1/3 w-full flex items-center justify-center text-xs font-bold  tracking-wider">
                        OFICIAL
                      </span>
                      <span className="h-2/3 w-full  flex items-center justify-center text-2xl bg-gray-800 text-green-400 border border-green-400">
                        $&nbsp;{promedioOficial}
                      </span>
                    </div>
                  </div>
                  <div className="w-[90%] h-6 bg-gray-600 text-white text-sm rounded-xl font-semibold flex items-center justify-around text-center">
                    <span className="w-16 text-center">Tipo</span>
                    <span className="w-16 text-center">Venta</span>
                    <span className="w-16 text-center">Diferencia</span>
                  </div>
                  <div className="w-[90%] h-5/6 flex flex-col items-center justify-around">
                    <div className="w-full flex items-center justify-around font-semibold">
                      <div className="h-8 w-24 rounded border border-orange-400 text-orange-200 flex items-center justify-center">
                        Mayorista
                      </div>
                      <div className="h-8 w-24 rounded text-orange-400 flex items-center justify-center">
                        ${promedioMayorista}
                      </div>
                      <div className="h-8 w-24 rounded text-orange-400 flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? (
                              ((promedioMayorista - promedioOficial) /
                                promedioOficial) *
                              100
                            ).toFixed(2) + "%"
                          : "$" +
                            (promedioMayorista - promedioOficial).toFixed(2)}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-around font-semibold">
                      <div className="h-8 w-24 rounded border border-blue-400 text-blue-200 flex items-center justify-center">
                        Blue
                      </div>
                      <div className="h-8 w-24 rounded text-blue-400 flex items-center justify-center">
                        ${promedioBlue}
                      </div>
                      <div className="h-8 w-24 rounded text-blue-400 flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? (
                              ((promedioBlue - promedioOficial) /
                                promedioOficial) *
                              100
                            ).toFixed(2) + "%"
                          : "$" + (promedioBlue - promedioOficial).toFixed(2)}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-around font-semibold">
                      <div className="h-8 w-24 rounded border border-red-400 text-red-200 flex items-center justify-center">
                        MEP
                      </div>
                      <div className="h-8 w-24 rounded text-red-400 flex items-center justify-center">
                        ${promedioMep}
                      </div>
                      <div className="h-8 w-24 rounded text-red-400 flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? (
                              ((promedioMep - promedioOficial) /
                                promedioOficial) *
                              100
                            ).toFixed(2) + "%"
                          : "$" + (promedioMep - promedioOficial).toFixed(2)}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-around font-semibold">
                      <div className="h-8 w-24 rounded border border-cyan-400 text-cyan-200 flex items-center justify-center">
                        CCL
                      </div>
                      <div className="h-8 w-24 rounded text-cyan-400 flex items-center justify-center">
                        ${promedioCcl}
                      </div>
                      <div className="h-8 w-24 rounded text-cyan-400 flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? (
                              ((promedioCcl - promedioOficial) /
                                promedioOficial) *
                              100
                            ).toFixed(2) + "%"
                          : "$" + (promedioCcl - promedioOficial).toFixed(2)}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-around font-semibold">
                      <div className="h-8 w-24 rounded border border-pink-400 text-pink-200 flex items-center justify-center">
                        Cripto
                      </div>
                      <div className="h-8 w-24 rounded text-pink-400 flex items-center justify-center">
                        ${promedioCripto}
                      </div>
                      <div className="h-8 w-24 rounded text-pink-400 flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? (
                              ((promedioCripto - promedioOficial) /
                                promedioOficial) *
                              100
                            ).toFixed(2) + "%"
                          : "$" + (promedioCripto - promedioOficial).toFixed(2)}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-around font-semibold">
                      <div className="h-8 w-24 rounded border border-yellow-400 text-yellow-200 flex items-center justify-center">
                        Tarjeta
                      </div>
                      <div className="h-8 w-24 rounded text-yellow-400 flex items-center justify-center">
                        ${promedioTarjeta}
                      </div>
                      <div className="h-8 w-24 rounded text-yellow-400 flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? (
                              ((promedioTarjeta - promedioOficial) /
                                promedioOficial) *
                              100
                            ).toFixed(2) + "%"
                          : "$" +
                            (promedioTarjeta - promedioOficial).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-5/6 flex  items-center justify-start">
                  <div className="w-3/12 h-full flex flex-col items-center justify-evenly text-xs tracking-wider text-black">
                    <div className="w-24 h-8 bg-black font-semibold rounded-lg flex items-center justify-center"></div>
                    <div className="w-24 h-8 bg-green-400 font-semibold rounded-lg flex items-center justify-center">
                      OFICIAL
                    </div>
                    <div className="w-24 h-8 bg-orange-400 font-semibold rounded-lg flex items-center justify-center">
                      MAYORISTA
                    </div>
                    <div className="w-24 h-8 bg-blue-400 font-semibold rounded-lg flex items-center justify-center">
                      BLUE
                    </div>
                    <div className="w-24 h-8 bg-red-400 font-semibold rounded-lg flex items-center justify-center">
                      MEP
                    </div>
                    <div className="w-24 h-8 bg-cyan-400 font-semibold rounded-lg flex items-center justify-center">
                      CCL
                    </div>
                    <div className="w-24 h-8 bg-pink-400 font-semibold rounded-lg flex items-center justify-center">
                      CRIPTO
                    </div>
                    <div className="w-24 h-8 bg-yellow-400 font-semibold rounded-lg flex items-center justify-center">
                      TARJETA
                    </div>
                  </div>
                  <div className="w-8/12 h-full flex">
                    <div className="w-1/3 h-full flex flex-col items-center justify-evenly text-xs tracking-wider text-black">
                      <div className="w-24 h-8 text-gray-200 font-semibold rounded-lg flex items-center justify-center">
                        VENTA
                      </div>
                      <div className="w-24 h-8  text-green-200 font-semibold rounded-lg flex items-center justify-center">
                        $ {promedioOficial}
                      </div>
                      <div className="w-24 h-8  text-orange-200 font-semibold rounded-lg flex items-center justify-center">
                        $ {promedioMayorista}
                      </div>
                      <div className="w-24 h-8  text-blue-200 font-semibold rounded-lg flex items-center justify-center">
                        $ {promedioBlue}
                      </div>
                      <div className="w-24 h-8  text-red-200 font-semibold rounded-lg flex items-center justify-center">
                        $ {promedioMep}
                      </div>
                      <div className="w-24 h-8  text-cyan-200 font-semibold rounded-lg flex items-center justify-center">
                        $ {promedioCcl}
                      </div>
                      <div className="w-24 h-8  text-pink-200 font-semibold rounded-lg flex items-center justify-center">
                        $ {promedioCripto}
                      </div>
                      <div className="w-24 h-8  text-yellow-200 font-semibold rounded-lg flex items-center justify-center">
                        $ {promedioTarjeta}
                      </div>
                    </div>
                    <div className="w-1/3 h-full flex flex-col items-center justify-evenly text-xs tracking-wider text-black">
                      <div className="w-24 h-8  text-gray-200 font-semibold rounded-lg flex items-center justify-evenly text-center">
                        VARIACIÓN MES ANTERIOR
                      </div>
                      <div className="w-24 h-8  text-green-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? calcularDiferenciasMensuales("oficial").porcentaje +
                            "%"
                          : "$" + calcularDiferenciasMensuales("oficial").pesos}
                      </div>
                      <div className="w-24 h-8  text-orange-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? calcularDiferenciasMensuales("mayorista")
                              .porcentaje + "%"
                          : "$" +
                            calcularDiferenciasMensuales("mayorista")
                              .pesos}{" "}
                      </div>
                      <div className="w-24 h-8  text-blue-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? calcularDiferenciasMensuales("blue").porcentaje +
                            "%"
                          : "$" +
                            calcularDiferenciasMensuales("blue").pesos}{" "}
                      </div>
                      <div className="w-24 h-8  text-red-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? calcularDiferenciasMensuales("mep").porcentaje + "%"
                          : "$" +
                            calcularDiferenciasMensuales("mep").pesos}{" "}
                      </div>
                      <div className="w-24 h-8  text-cyan-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? calcularDiferenciasMensuales("ccl").porcentaje + "%"
                          : "$" +
                            calcularDiferenciasMensuales("ccl").pesos}{" "}
                      </div>
                      <div className="w-24 h-8  text-pink-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? calcularDiferenciasMensuales("cripto").porcentaje +
                            "%"
                          : "$" + calcularDiferenciasMensuales("cripto").pesos}
                      </div>
                      <div className="w-24 h-8  text-yellow-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "porcentaje"
                          ? calcularDiferenciasMensuales("tarjeta").porcentaje +
                            "%"
                          : "$" + calcularDiferenciasMensuales("tarjeta").pesos}
                      </div>
                    </div>
                    <div className="w-1/3 h-full flex flex-col items-center justify-evenly text-xs tracking-wider text-black">
                      <div className="w-24 h-8  text-gray-200 font-semibold rounded-lg flex items-center justify-evenly text-center">
                        VARIACION INTERANUAL
                      </div>
                      <div className="w-24 h-8  text-green-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "moneda"
                          ? "$" +
                            (
                              promedioOficial -
                              parseFloat(promedios2023.oficial[mesSeleccionado])
                            ).toFixed(2)
                          : calcularDiferenciaPorcentual(
                              promedios2023.oficial[mesSeleccionado],
                              promedioOficial
                            ) + "%"}
                      </div>
                      <div className="w-24 h-8  text-orange-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "moneda"
                          ? "$" +
                            (
                              promedioMayorista -
                              parseFloat(
                                promedios2023.mayorista[mesSeleccionado]
                              )
                            ).toFixed(2)
                          : calcularDiferenciaPorcentual(
                              promedios2023.mayorista[mesSeleccionado],
                              promedioMayorista
                            ) + "%"}
                      </div>
                      <div className="w-24 h-8  text-blue-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "moneda"
                          ? "$" +
                            (
                              promedioBlue -
                              parseFloat(promedios2023.blue[mesSeleccionado])
                            ).toFixed(2)
                          : calcularDiferenciaPorcentual(
                              promedios2023.blue[mesSeleccionado],
                              promedioBlue
                            ) + "%"}
                      </div>
                      <div className="w-24 h-8  text-red-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "moneda"
                          ? "$" +
                            (
                              promedioMep -
                              parseFloat(promedios2023.mep[mesSeleccionado])
                            ).toFixed(2)
                          : calcularDiferenciaPorcentual(
                              promedios2023.mep[mesSeleccionado],
                              promedioMep
                            ) + "%"}
                      </div>
                      <div className="w-24 h-8  text-cyan-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "moneda"
                          ? "$" +
                            (
                              promedioCcl -
                              parseFloat(promedios2023.ccl[mesSeleccionado])
                            ).toFixed(2)
                          : calcularDiferenciaPorcentual(
                              promedios2023.ccl[mesSeleccionado],
                              promedioCcl
                            ) + "%"}
                      </div>
                      <div className="w-24 h-8  text-pink-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "moneda"
                          ? "$" +
                            (
                              promedioCripto -
                              parseFloat(promedios2023.cripto[mesSeleccionado])
                            ).toFixed(2)
                          : calcularDiferenciaPorcentual(
                              promedios2023.cripto[mesSeleccionado],
                              promedioCripto
                            ) + "%"}
                      </div>
                      <div className="w-24 h-8  text-yellow-200 font-semibold rounded-lg flex items-center justify-center">
                        {porcentajeOmoneda === "moneda"
                          ? "$" +
                            (
                              promedioTarjeta -
                              parseFloat(promedios2023.tarjeta[mesSeleccionado])
                            ).toFixed(2)
                          : calcularDiferenciaPorcentual(
                              promedios2023.tarjeta[mesSeleccionado],
                              promedioTarjeta
                            ) + "%"}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/12 h-full flex flex-col items-start justify-evenly text-xs tracking-wider text-black">
                    <div className="w-2 h-8 bg-black font-semibold rounded-lg flex items-center justify-center"></div>
                    <div className="w-2 h-8 bg-green-400 font-semibold rounded-lg flex items-center justify-center"></div>
                    <div className="w-2 h-8 bg-orange-400 font-semibold rounded-lg flex items-center justify-center"></div>
                    <div className="w-2 h-8 bg-blue-400 font-semibold rounded-lg flex items-center justify-center"></div>
                    <div className="w-2 h-8 bg-red-400 font-semibold rounded-lg flex items-center justify-center"></div>
                    <div className="w-2 h-8 bg-cyan-400 font-semibold rounded-lg flex items-center justify-center"></div>
                    <div className="w-2 h-8 bg-pink-400 font-semibold rounded-lg flex items-center justify-center"></div>
                    <div className="w-2 h-8 bg-yellow-400 font-semibold rounded-lg flex items-center justify-center"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="h-full w-1/3 bg-black">
            <div className="w-full bg-transparent rounded-lg h-[10%] flex flex-col items-center justify-center border-b-2 border-gray-600 relative">
              <button
                className={`absolute top-1 left-2 h-6 w-24 bg-blue-500 text-xs flex items-center justify-center rounded-xl ${
                  comparativoOEvolutivo === "evolutivo" ? "hidden" : ""
                }`}
                onClick={() => setComparativoOEvolutivo("evolutivo")}
              >
                VER DATOS
              </button>
              <p className="text-lg h-2/3 flex items-center justify-center">
                EVOLUTIVO DE PROMEDIOS
              </p>
              <p className="text-xs flex items-end h-1/3 justify-evenly w-full pb-1 ">
                <span className="text-green-400">● Oficial</span>
                <span className="text-orange-400">● Mayorista</span>
                <span className="text-blue-400">● Blue</span>
                <span className="text-red-400">● MEP</span>
                <span className="text-cyan-400">● CCL</span>
                <span className="text-pink-400">● Cripto</span>
                <span className="text-yellow-400">● Tarjeta</span>
              </p>
            </div>
            <ResponsiveContainer height={"85%"}>
              <LineChart
                className="p-2 font-bold text-white"
                width={1030}
                height={350}
                data={evolutivo}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                style={{ color: "white" }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" tick={{ fill: "white" }} />
                <YAxis
                  tick={{ fill: "white" }}
                  domain={[600, 1600]}
                  tickFormatter={(value) => `$${value}`}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "none",
                    color: "white",
                    textTransform: "uppercase",
                  }}
                  formatter={(value) => `$${value}`.toUpperCase()}
                />

                {tiposDolar.map((tipo, index) => (
                  <Line
                    key={index}
                    type="monotone"
                    dataKey={tipo}
                    name={tipo}
                    stroke={getColorByName(tipo)}
                    strokeWidth={2}
                    dot={{ stroke: getColorByName(tipo), strokeWidth: 4, r: 2 }} // Establecer el color del punto
                  />
                ))}
                <ReferenceLine
                  style={{ opacity: 0.2 }}
                  x={mesSeleccionado}
                  stroke="gray"
                  strokeWidth={18}
                  // strokeDasharray="1 1"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="w-full h-1/4 bg-gray-300 flex flex-col">
        <div className="w-full h-[15%] bg-pink-200 font-semibold tracker-wider text-black flex items-center justify-center ">
          COTIZACION AL DIA
        </div>
        <div className="w-full h-[85%]">
          <DolarVivo
            ultimos2Dias={ultimos2Dias}
            porcentajeOmoneda={porcentajeOmoneda}
          />
        </div>
      </div>
    </div>
  );
}
