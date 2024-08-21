import React, { useState, useMemo } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowDown } from "react-icons/fa";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
} from "recharts";

export default function Industria() {
  const dataPyme = {
    enero: {
      intermensual: -9.1,
      acumulada: -9.1,
      interanual: -30,
      capacidad: 70.8,
    },
    febrero: {
      intermensual: -7.7,
      acumulada: -21.7,
      interanual: -9.9,
      capacidad: 70.9,
    },
    marzo: {
      intermensual: -3.4,
      acumulada: -19.1,
      interanual: -11.9,
      capacidad: 70,
    },
    abril: {
      intermensual: 3.1,
      acumulada: -19,
      interanual: -18.3,
      capacidad: 70.1,
    },
    mayo: {
      intermensual: 5.3,
      acumulada: -19.1,
      interanual: -19,
      capacidad: 70.3,
    },
    junio: {
      intermensual: -3.1,
      acumulada: -19.2,
      interanual: -20.4,
      capacidad: 60.1,
    },
    julio: {
      intermensual: -2.6,
      acumulada: 0.6,
      interanual: -3.2,
      capacidad: 71.9,
    },
  };

  const aperturaIntermensualPyme = {
    enero: {
      "textiles e indumentaria": -2.3,
      "alimentos y bebidas": -8.7,
      "madera y muebles": -13.5,
      "papel e impresiones": -3,
      "quimicos y plasticos": -11.8,
      "metal y maquinaria": -13.5,
    },
    febrero: {
      "textiles e indumentaria": -2.4,
      "alimentos y bebidas": -1.1,
      "madera y muebles": -3,
      "papel e impresiones": -4.8,
      "quimicos y plasticos": -6.2,
      "metal y maquinaria": -4.9,
    },
    marzo: {
      "textiles e indumentaria": -0.5,
      "alimentos y bebidas": -3.6,
      "madera y muebles": -4.4,
      "papel e impresiones": -5,
      "quimicos y plasticos": -4.4,
      "metal y maquinaria": -4.8,
    },
    abril: {
      "textiles e indumentaria": 2.6,
      "alimentos y bebidas": 0.4,
      "madera y muebles": 6,
      "papel e impresiones": 0.2,
      "quimicos y plasticos": 3.9,
      "metal y maquinaria": 4,
    },
    mayo: {
      "textiles e indumentaria": 3.5,
      "alimentos y bebidas": 2,
      "madera y muebles": 6.1,
      "papel e impresiones": -1.5,
      "quimicos y plasticos": 3.9,
      "metal y maquinaria": 4.6,
    },
    junio: {
      "textiles e indumentaria": -4.3,
      "alimentos y bebidas": -4.8,
      "madera y muebles": -3,
      "papel e impresiones": -2.6,
      "quimicos y plasticos": -2.3,
      "metal y maquinaria": -1.5,
    },
    julio: {
      "textiles e indumentaria": -2.9,
      "alimentos y bebidas": -0.8,
      "madera y muebles": -7.9,
      "papel e impresiones": 0.5,
      "quimicos y plasticos": -3.3,
      "metal y maquinaria": -2.9,
    },
  };

  const aperturaInteranualPyme = {
    enero: {
      "textiles e indumentaria": -18.2,
      "alimentos y bebidas": -22,
      "madera y muebles": -30.6,
      "papel e impresiones": -41.7,
      "quimicos y plasticos": -35.6,
      "metal y maquinaria": -34.8,
    },
    febrero: {
      "textiles e indumentaria": 10.5,
      "alimentos y bebidas": -0.3,
      "madera y muebles": -10,
      "papel e impresiones": -24.6,
      "quimicos y plasticos": -23.1,
      "metal y maquinaria": -15.2,
    },
    marzo: {
      "textiles e indumentaria": 10.9,
      "alimentos y bebidas": -5.6,
      "madera y muebles": -11.9,
      "papel e impresiones": -27.4,
      "quimicos y plasticos": -20.7,
      "metal y maquinaria": -16.8,
    },
    abril: {
      "textiles e indumentaria": -0.2,
      "alimentos y bebidas": -13.7,
      "madera y muebles": -15.7,
      "papel e impresiones": -32.3,
      "quimicos y plasticos": -21.6,
      "metal y maquinaria": -23.7,
    },
    mayo: {
      "textiles e indumentaria": -4.3,
      "alimentos y bebidas": -14.7,
      "madera y muebles": -10.4,
      "papel e impresiones": -45.8,
      "quimicos y plasticos": -22.9,
      "metal y maquinaria": -20.6,
    },
    junio: {
      "textiles e indumentaria": -7.4,
      "alimentos y bebidas": -17.4,
      "madera y muebles": -20.7,
      "papel e impresiones": -31.5,
      "quimicos y plasticos": -30.3,
      "metal y maquinaria": -20,
    },
    julio: {
      "textiles e indumentaria": 1.6,
      "alimentos y bebidas": 4.4,
      "madera y muebles": -4.8,
      "papel e impresiones": -22.9,
      "quimicos y plasticos": -6.2,
      "metal y maquinaria": -4.2,
    },
  };

  const aperturaAcumuladaPyme = {
    enero: {
      "textiles e indumentaria": -2.3,
      "alimentos y bebidas": -8.7,
      "madera y muebles": -13.5,
      "papel e impresiones": -3,
      "quimicos y plasticos": -11.8,
      "metal y maquinaria": -13.5,
    },
    febrero: {
      "textiles e indumentaria": -1.3,
      "alimentos y bebidas": -14.6,
      "madera y muebles": -24.6,
      "papel e impresiones": -26,
      "quimicos y plasticos": -31.2,
      "metal y maquinaria": -27.9,
    },
    marzo: {
      "textiles e indumentaria": 2.3,
      "alimentos y bebidas": -14.2,
      "madera y muebles": -20.1,
      "papel e impresiones": -23.7,
      "quimicos y plasticos": -28.7,
      "metal y maquinaria": -24.5,
    },
    abril: {
      "textiles e indumentaria": -0.1,
      "alimentos y bebidas": -15,
      "madera y muebles": -19.2,
      "papel e impresiones": -23.4,
      "quimicos y plasticos": -27.3,
      "metal y maquinaria": -23.8,
    },
    mayo: {
      "textiles e indumentaria": -0.9,
      "alimentos y bebidas": -15.8,
      "madera y muebles": -17.7,
      "papel e impresiones": -25.9,
      "quimicos y plasticos": -27.1,
      "metal y maquinaria": -23,
    },
    junio: {
      "textiles e indumentaria": -2.7,
      "alimentos y bebidas": -16.7,
      "madera y muebles": -18.7,
      "papel e impresiones": -23.6,
      "quimicos y plasticos": -27.2,
      "metal y maquinaria": -22.4,
    },
    julio: {
      "textiles e indumentaria": 1.4,
      "alimentos y bebidas": 5.3,
      "madera y muebles": 1.5,
      "papel e impresiones": -14.8,
      "quimicos y plasticos": 0.7,
      "metal y maquinaria": 0,
    },
  };

  const capacidadInstaladaPyme = {
    "ENE-23": {
      "Textiles e indumentaria": 72.5,
      "Alimentos y bebidas": 80.1,
      "Madera y muebles": 72.4,
      "Papel e impresiones": 77.5,
      "Químicos y plásticos": 68.7,
      "Metal, maquinaria y equipo, y material de transporte": 67.5,
      MANUFACTURERA: 62.0,
      PYME: 72.5,
    },
    "FEB-23": {
      "Textiles e indumentaria": 71.7,
      "Alimentos y bebidas": 73.5,
      "Madera y muebles": 75,
      "Papel e impresiones": 73.7,
      "Químicos y plásticos": 68.9,
      "Metal, maquinaria y equipo, y material de transporte": 69.9,
      MANUFACTURERA: 65.0,
      PYME: 71.7,
    },
    "MAR-23": {
      "Textiles e indumentaria": 73.3,
      "Alimentos y bebidas": 76.7,
      "Madera y muebles": 74.2,
      "Papel e impresiones": 81.4,
      "Químicos y plásticos": 69.9,
      "Metal, maquinaria y equipo, y material de transporte": 69.9,
      MANUFACTURERA: 67.3,
      PYME: 73.3,
    },
    "ABR-23": {
      "Textiles e indumentaria": 73.2,
      "Alimentos y bebidas": 73.6,
      "Madera y muebles": 73.9,
      "Papel e impresiones": 76.4,
      "Químicos y plásticos": 72.8,
      "Metal, maquinaria y equipo, y material de transporte": 71.3,
      MANUFACTURERA: 68.9,
      PYME: 73.2,
    },
    "MAY-23": {
      "Textiles e indumentaria": 73.6,
      "Alimentos y bebidas": 74.2,
      "Madera y muebles": 71.7,
      "Papel e impresiones": 82.4,
      "Químicos y plásticos": 70,
      "Metal, maquinaria y equipo, y material de transporte": 71.3,
      MANUFACTURERA: 67.8,
      PYME: 73.6,
    },
    "JUN-23": {
      "Textiles e indumentaria": 72.5,
      "Alimentos y bebidas": 72.9,
      "Madera y muebles": 75.3,
      "Papel e impresiones": 80.5,
      "Químicos y plásticos": 68.1,
      "Metal, maquinaria y equipo, y material de transporte": 70.5,
      MANUFACTURERA: 68.6,
      PYME: 72.5,
    },
    "JUL-23": {
      "Textiles e indumentaria": 71.9,
      "Alimentos y bebidas": 74.3,
      "Madera y muebles": 75.5,
      "Papel e impresiones": 77.5,
      "Químicos y plásticos": 65.8,
      "Metal, maquinaria y equipo, y material de transporte": 69.9,
      MANUFACTURERA: 65.0,
      PYME: 71.9,
    },
    "AGO-23": {
      "Textiles e indumentaria": 73.1,
      "Alimentos y bebidas": 71.6,
      "Madera y muebles": 76.5,
      "Papel e impresiones": 80.7,
      "Químicos y plásticos": 69.6,
      "Metal, maquinaria y equipo, y material de transporte": 71.7,
      MANUFACTURERA: 67.9,
      PYME: 73.1,
    },
    "SEP-23": {
      "Textiles e indumentaria": 73,
      "Alimentos y bebidas": 70.9,
      "Madera y muebles": 76.7,
      "Papel e impresiones": 78.9,
      "Químicos y plásticos": 72.1,
      "Metal, maquinaria y equipo, y material de transporte": 70.9,
      MANUFACTURERA: 67.9,
      PYME: 73,
    },
    "OCT-23": {
      "Textiles e indumentaria": 71.8,
      "Alimentos y bebidas": 71.3,
      "Madera y muebles": 73.3,
      "Papel e impresiones": 80.5,
      "Químicos y plásticos": 69.9,
      "Metal, maquinaria y equipo, y material de transporte": 70,
      MANUFACTURERA: 65.3,
      PYME: 71.8,
    },
    "NOV-23": {
      "Textiles e indumentaria": 73.3,
      "Alimentos y bebidas": 72.7,
      "Madera y muebles": 76.3,
      "Papel e impresiones": 76.7,
      "Químicos y plásticos": 72,
      "Metal, maquinaria y equipo, y material de transporte": 71.8,
      MANUFACTURERA: 66.4,
      PYME: 73.3,
    },
    "DIC-23": {
      "Textiles e indumentaria": 73.1,
      "Alimentos y bebidas": 75.8,
      "Madera y muebles": 71.6,
      "Papel e impresiones": 74.5,
      "Químicos y plásticos": 70.8,
      "Metal, maquinaria y equipo, y material de transporte": 70.8,
      MANUFACTURERA: 54.9,
      PYME: 73.1,
    },
    ENERO: {
      "Textiles e indumentaria": 68.2,
      "Alimentos y bebidas": 71.9,
      "Madera y muebles": 70.2,
      "Papel e impresiones": 76.3,
      "Químicos y plásticos": 69.9,
      "Metal, maquinaria y equipo, y material de transporte": 67,
      MANUFACTURERA: 54.6,
      PYME: 70.8,
    },
    FEBRERO: {
      "Textiles e indumentaria": 72.6,
      "Alimentos y bebidas": 73.3,
      "Madera y muebles": 72.6,
      "Papel e impresiones": 77.9,
      "Químicos y plásticos": 65.6,
      "Metal, maquinaria y equipo, y material de transporte": 66.6,
      MANUFACTURERA: 57.6,
      PYME: 70.9,
    },
    MARZO: {
      "Textiles e indumentaria": 71,
      "Alimentos y bebidas": 73.1,
      "Madera y muebles": 70.3,
      "Papel e impresiones": 76.8,
      "Químicos y plásticos": 67.4,
      "Metal, maquinaria y equipo, y material de transporte": 67.1,
      MANUFACTURERA: 53.4,
      PYME: 70,
    },
    ABRIL: {
      "Textiles e indumentaria": 70.8,
      "Alimentos y bebidas": 73.3,
      "Madera y muebles": 70.3,
      "Papel e impresiones": 76.8,
      "Químicos y plásticos": 67.4,
      "Metal, maquinaria y equipo, y material de transporte": 67.1,
      MANUFACTURERA: 56.6,
      PYME: 70.1,
    },
    MAYO: {
      "Textiles e indumentaria": 71.5,
      "Alimentos y bebidas": 72.4,
      "Madera y muebles": 70.8,
      "Papel e impresiones": 78.8,
      "Químicos y plásticos": 68.8,
      "Metal, maquinaria y equipo, y material de transporte": 66.6,
      MANUFACTURERA: 56.8,
      PYME: 70.3,
    },
    JUNIO: {
      "Textiles e indumentaria": 63.3,
      "Alimentos y bebidas": 58.1,
      "Madera y muebles": 63.4,
      "Papel e impresiones": 63.1,
      "Químicos y plásticos": 63.1,
      "Metal, maquinaria y equipo, y material de transporte": 57.9,
      MANUFACTURERA: 54.5,
      PYME: 60.1,
    },
    JULIO: {
      "Textiles e indumentaria": 74,
      "Alimentos y bebidas": 74.3,
      "Madera y muebles": 75.5,
      "Papel e impresiones": 77.5,
      "Químicos y plásticos": 65.8,
      "Metal, maquinaria y equipo, y material de transporte": 69.9,
      MANUFACTURERA: "-",
      PYME: 71.9,
    },
  };

  const colorsPyme = {
    "textiles e indumentaria": "#8884d8",
    "alimentos y bebidas": "#f261da",
    "madera y muebles": "#ffc658",
    "papel e impresiones": "#ff8042",
    "quimicos y plasticos": "#8dd1e1",
    "metal y maquinaria": "#a4de6c",
    MANUFACTURERA: "red",
    PYME: "blue",
  };

  const variacionesManufacturera = {
    enero: {
      intermensual: -0.54,
      interanual: -11.9,
      capacidad: 54.6,
    },
    febrero: {
      intermensual: 5.49,
      interanual: -11.38,
      capacidad: 57.6,
    },
    marzo: {
      intermensual: -7.29,
      interanual: -20.65,
      capacidad: 53.4,
    },
    abril: {
      intermensual: 5.9,
      interanual: -17.8,
      capacidad: 56.6,
    },
    mayo: {
      intermensual: 0.35,
      interanual: -16.2,
      capacidad: 56.8,
    },
    junio: {
      intermensual: 4.04,
      interanual: -20.55,
      capacidad: 54.5,
    },
    julio: {
      intermensual: "-",
      interanual: "-",
      capacidad: "-",
    },
  };

  const capacidadInstaladaIndustria = {
    "ENE-23": {
      Textiles: 41.0,
      "Alimentos y bebidas": 60.4,
      "Minerales no metálicos": 68.3,
      "Papel y cartón": 76.4,
      "Refinación de petróleo": 84.1,
      "Edición e impresión": 57.9,
      Tabaco: 55.7,
      Metálicas: 81.7,
      "Caucho y plástico": 52.2,
      Automotriz: 31.0,
      "Sustancias y productos químicos": 72.1,
      "Metalmecánica (sin automotriz)": 45.3,
      MANUFACTURERA: 62.0,
      PYME: 72.5,
    },
    "FEB-23": {
      Textiles: 52.4,
      "Alimentos y bebidas": 59.3,
      "Minerales no metálicos": 74.4,
      "Papel y cartón": 77.2,
      "Refinación de petróleo": 86.0,
      "Edición e impresión": 59.6,
      Tabaco: 51.7,
      Metálicas: 74.5,
      "Caucho y plástico": 53.7,
      Automotriz: 60.5,
      "Sustancias y productos químicos": 74.2,
      "Metalmecánica (sin automotriz)": 52.2,
      MANUFACTURERA: 65.0,
      PYME: 71.7,
    },
    "MAR-23": {
      Textiles: 52.5,
      "Alimentos y bebidas": 61.3,
      "Minerales no metálicos": 76.3,
      "Papel y cartón": 76.9,
      "Refinación de petróleo": 85.1,
      "Edición e impresión": 62.5,
      Tabaco: 61.3,
      Metálicas: 77.2,
      "Caucho y plástico": 58.0,
      Automotriz: 72.5,
      "Sustancias y productos químicos": 72.1,
      "Metalmecánica (sin automotriz)": 57.3,
      MANUFACTURERA: 67.3,
      PYME: 73.3,
    },
    "ABR-23": {
      Textiles: 53.9,
      "Alimentos y bebidas": 62.7,
      "Minerales no metálicos": 72.3,
      "Papel y cartón": 74.6,
      "Refinación de petróleo": 86.8,
      "Edición e impresión": 60.6,
      Tabaco: 63.3,
      Metálicas: 82.0,
      "Caucho y plástico": 56.8,
      Automotriz: 66.6,
      "Sustancias y productos químicos": 77.0,
      "Metalmecánica (sin automotriz)": 61.0,
      MANUFACTURERA: 68.9,
      PYME: 73.2,
    },
    "MAY-23": {
      Textiles: 58.0,
      "Alimentos y bebidas": 64.6,
      "Minerales no metálicos": 72.7,
      "Papel y cartón": 78.7,
      "Refinación de petróleo": 83.1,
      "Edición e impresión": 58.1,
      Tabaco: 65.5,
      Metálicas: 81.7,
      "Caucho y plástico": 55.9,
      Automotriz: 62.4,
      "Sustancias y productos químicos": 74.5,
      "Metalmecánica (sin automotriz)": 56.3,
      MANUFACTURERA: 67.8,
      PYME: 73.6,
    },
    "JUN-23": {
      Textiles: 64.4,
      "Alimentos y bebidas": 64.2,
      "Minerales no metálicos": 74.4,
      "Papel y cartón": 77.4,
      "Refinación de petróleo": 82.4,
      "Edición e impresión": 61.2,
      Tabaco: 56.8,
      Metálicas: 81.0,
      "Caucho y plástico": 55.4,
      Automotriz: 64.9,
      "Sustancias y productos químicos": 74.7,
      "Metalmecánica (sin automotriz)": 60.1,
      MANUFACTURERA: 68.6,
      PYME: 72.5,
    },
    "JUL-23": {
      Textiles: 63.2,
      "Alimentos y bebidas": 61.3,
      "Minerales no metálicos": 71.7,
      "Papel y cartón": 77.4,
      "Refinación de petróleo": 82.3,
      "Edición e impresión": 60.2,
      Tabaco: 59.1,
      Metálicas: 66.5,
      "Caucho y plástico": 55.4,
      Automotriz: 57.9,
      "Sustancias y productos químicos": 73.6,
      "Metalmecánica (sin automotriz)": 56.5,
      MANUFACTURERA: 65.0,
      PYME: 71.9,
    },
    "AGO-23": {
      Textiles: 59.3,
      "Alimentos y bebidas": 64.5,
      "Minerales no metálicos": 77.8,
      "Papel y cartón": 79.8,
      "Refinación de petróleo": 72.2,
      "Edición e impresión": 60.0,
      Tabaco: 59.7,
      Metálicas: 78.7,
      "Caucho y plástico": 57.1,
      Automotriz: 74.3,
      "Sustancias y productos químicos": 70.4,
      "Metalmecánica (sin automotriz)": 61.2,
      MANUFACTURERA: 67.9,
      PYME: 73.1,
    },
    "SEP-23": {
      Textiles: 59.1,
      "Alimentos y bebidas": 62.4,
      "Minerales no metálicos": 76.3,
      "Papel y cartón": 77.4,
      "Refinación de petróleo": 82.0,
      "Edición e impresión": 62.4,
      Tabaco: 52.6,
      Metálicas: 85.0,
      "Caucho y plástico": 60.0,
      Automotriz: 68.6,
      "Sustancias y productos químicos": 75.5,
      "Metalmecánica (sin automotriz)": 51.0,
      MANUFACTURERA: 67.9,
      PYME: 73,
    },
    "OCT-23": {
      Textiles: 55.8,
      "Alimentos y bebidas": 59.6,
      "Minerales no metálicos": 72.9,
      "Papel y cartón": 76.4,
      "Refinación de petróleo": 72.1,
      "Edición e impresión": 56.4,
      Tabaco: 48.2,
      Metálicas: 84.5,
      "Caucho y plástico": 57.8,
      Automotriz: 61.0,
      "Sustancias y productos químicos": 70.7,
      "Metalmecánica (sin automotriz)": 55.4,
      MANUFACTURERA: 65.3,
      PYME: 71.8,
    },
    "NOV-23": {
      Textiles: 59.1,
      "Alimentos y bebidas": 65.2,
      "Minerales no metálicos": 74.3,
      "Papel y cartón": 72.7,
      "Refinación de petróleo": 84.7,
      "Edición e impresión": 54.8,
      Tabaco: 56.2,
      Metálicas: 79.4,
      "Caucho y plástico": 56.8,
      Automotriz: 68.3,
      "Sustancias y productos químicos": 71.4,
      "Metalmecánica (sin automotriz)": 50.3,
      MANUFACTURERA: 66.4,
      PYME: 73.3,
    },
    "DIC-23": {
      Textiles: 39.9,
      "Alimentos y bebidas": 57.4,
      "Minerales no metálicos": 60.8,
      "Papel y cartón": 67.3,
      "Refinación de petróleo": 85.0,
      "Edición e impresión": 44.2,
      Tabaco: 44.0,
      Metálicas: 64.5,
      "Caucho y plástico": 46.5,
      Automotriz: 42.6,
      "Sustancias y productos químicos": 58.2,
      "Metalmecánica (sin automotriz)": 37.9,
      MANUFACTURERA: 54.9,
      PYME: 73.1,
    },
    ENERO: {
      Textiles: 36.7,
      "Alimentos y bebidas": 57.7,
      "Minerales no metálicos": 57.0,
      "Papel y cartón": 69.8,
      "Refinación de petróleo": 83.5,
      "Edición e impresión": 53.9,
      Tabaco: 50.5,
      Metálicas: 76.3,
      "Caucho y plástico": 43.5,
      Automotriz: 25.7,
      "Sustancias y productos químicos": 57.1,
      "Metalmecánica (sin automotriz)": 33.4,
      MANUFACTURERA: 54.6,
      PYME: 70.8,
    },
    FEBRERO: {
      Textiles: 45.6,
      "Alimentos y bebidas": 58.1,
      "Minerales no metálicos": 59.6,
      "Papel y cartón": 75.4,
      "Refinación de petróleo": 79.2,
      "Edición e impresión": 51.3,
      Tabaco: 52.2,
      Metálicas: 66.5,
      "Caucho y plástico": 45.9,
      Automotriz: 47.3,
      "Sustancias y productos químicos": 67.8,
      "Metalmecánica (sin automotriz)": 37.3,
      MANUFACTURERA: 57.6,
      PYME: 70.9,
    },
    MARZO: {
      Textiles: 38.5,
      "Alimentos y bebidas": 54.5,
      "Minerales no metálicos": 47.2,
      "Papel y cartón": 63.5,
      "Refinación de petróleo": 80.0,
      "Edición e impresión": 48.3,
      Tabaco: 50.5,
      Metálicas: 50.0,
      "Caucho y plástico": 44.1,
      Automotriz: 50.8,
      "Sustancias y productos químicos": 64.9,
      "Metalmecánica (sin automotriz)": 38.0,
      MANUFACTURERA: 53.4,
      PYME: 70,
    },
    ABRIL: {
      Textiles: 37.7,
      "Alimentos y bebidas": 57.9,
      "Minerales no metálicos": 42.7,
      "Papel y cartón": 69.5,
      "Refinación de petróleo": 82.2,
      "Edición e impresión": 49.9,
      Tabaco: 52.0,
      Metálicas: 63.7,
      "Caucho y plástico": 42.4,
      Automotriz: 52.6,
      "Sustancias y productos químicos": 63.3,
      "Metalmecánica (sin automotriz)": 44.5,
      MANUFACTURERA: 56.6,
      PYME: 70.1,
    },
    MAYO: {
      Textiles: 41.4,
      "Alimentos y bebidas": 59.4,
      "Minerales no metálicos": 47.2,
      "Papel y cartón": 60.5,
      "Refinación de petróleo": 84.1,
      "Edición e impresión": 46,
      Tabaco: 53,
      Metálicas: 61.3,
      "Caucho y plástico": 41.6,
      Automotriz: 45.5,
      "Sustancias y productos químicos": 67.7,
      "Metalmecánica (sin automotriz)": 45.3,
      MANUFACTURERA: 56.8,
      PYME: 70.3,
    },
    JUNIO: {
      Textiles: 43.9,
      "Alimentos y bebidas": 59.4,
      "Minerales no metálicos": 46.8,
      "Papel y cartón": 60.4,
      "Refinación de petróleo": 80.8,
      "Edición e impresión": 41.3,
      Tabaco: 35.4,
      Metálicas: 56.6,
      "Caucho y plástico": 39.4,
      Automotriz: 39,
      "Sustancias y productos químicos": 66.3,
      "Metalmecánica (sin automotriz)": 42,
      MANUFACTURERA: 54.5,
      PYME: 60.1,
    },
    JULIO: {
      Textiles: "-",
      "Alimentos y bebidas": "-",
      "Minerales no metálicos": "-",
      "Papel y cartón": "-",
      "Refinación de petróleo": "-",
      "Edición e impresión": "-",
      Tabaco: "-",
      Metálicas: "-",
      "Caucho y plástico": "-",
      Automotriz: "-",
      "Sustancias y productos químicos": "-",
      "Metalmecánica (sin automotriz)": "-",
      MANUFACTURERA: "-",
      PYME: 60.1,
    },
  };

  const dataIndustria = Object.keys(capacidadInstaladaIndustria).map((key) => ({
    mes: key,
    ...capacidadInstaladaIndustria[key],
  }));

  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
  ];
  const [mesSeleccionado, setMesSeleccionado] = useState(
    meses[meses.length - 1]
  );
  const [vista, setVista] = useState("PYME");

  const handleMesAnterior = () => {
    const currentIndex = meses.indexOf(mesSeleccionado);
    const newIndex = currentIndex === 0 ? meses.length - 1 : currentIndex - 1;
    setMesSeleccionado(meses[newIndex]);
  };

  const handleMesSiguiente = () => {
    const currentIndex = meses.indexOf(mesSeleccionado);
    const newIndex = currentIndex === meses.length - 1 ? 0 : currentIndex + 1;
    setMesSeleccionado(meses[newIndex]);
  };

  const barData = Object.keys(aperturaInteranualPyme[mesSeleccionado]).map(
    (key) => ({
      name: key.toUpperCase(),
      valor: aperturaInteranualPyme[mesSeleccionado][key],
      fill: colorsPyme[key],
    })
  );

  const transformData = (data) => {
    const filteredData = data.filter((item) => item.name !== "PYME");

    const transformedData = filteredData.map((item) => ({
      ...item,
      name: item.name === "MANUFACTURERA" ? "GENERAL" : item.name,
    }));

    return transformedData;
  };

  const industrialData = useMemo(() => {
    const data =
      capacidadInstaladaIndustria[mesSeleccionado.toLocaleUpperCase()];

    const filteredData = Object.entries(data).map(([key, value]) => ({
      name: key,
      value,
      fill: key === "MANUFACTURERA" ? "#372879" : "#8884d8",
    }));

    const sortedData = filteredData.sort((a, b) => b.value - a.value);

    return sortedData;
  }, [mesSeleccionado]);

  const transformedIndustrialData = transformData(industrialData);

  const intermensualPymeData = Object.keys(
    aperturaIntermensualPyme[mesSeleccionado]
  ).map((key) => ({
    valor: aperturaIntermensualPyme[mesSeleccionado][key],
  }));

  const acumuladaPymeData = Object.keys(
    aperturaInteranualPyme[mesSeleccionado]
  ).map((key) => ({
    valor: aperturaAcumuladaPyme[mesSeleccionado][key],
  }));

  const charPymedata = Object.keys(capacidadInstaladaPyme).map((mes) => ({
    mes,
    "textiles e indumentaria":
      capacidadInstaladaPyme[mes]["Textiles e indumentaria"],
    "alimentos y bebidas": capacidadInstaladaPyme[mes]["Alimentos y bebidas"],
    "madera y muebles": capacidadInstaladaPyme[mes]["Madera y muebles"],
    "papel e impresiones": capacidadInstaladaPyme[mes]["Papel e impresiones"],
    "quimicos y plasticos": capacidadInstaladaPyme[mes]["Químicos y plásticos"],
    "metal y maquinaria":
      capacidadInstaladaPyme[mes][
        "Metal, maquinaria y equipo, y material de transporte"
      ],
    MANUFACTURERA: capacidadInstaladaPyme[mes]["MANUFACTURERA"],
    PYME: capacidadInstaladaPyme[mes]["PYME"],
  }));

  const colorsIndustria = {
    Textiles: "#8884d8",
    "Alimentos y bebidas": "#f261da",
    "Minerales no metálicos": "#ffc658",
    "Papel y cartón": "#ff8042",
    "Refinación de petróleo": "#8dd1e1",
    "Edición e impresión": "#a4de6c",
    Tabaco: "#d0ed57",
    Metálicas: "#82ca9d",
    "Caucho y plástico": "#ff6666",
    Automotriz: "#66b3ff",
    "Sustancias y productos químicos": "#c658ff",
    "Metalmecánica (sin automotriz)": "#66ffb3",
    MANUFACTURERA: "red",
    PYME: "blue",
  };

  const categoriasIndustria = Object.keys(colorsIndustria);

  const [visibleLinesManufacturera, setVisibleLinesManufacturera] = useState([
    "MANUFACTURERA",
    "PYME",
  ]);
  const [visibleLinesPyme, setVisibleLinesPyme] = useState([
    "MANUFACTURERA",
    "PYME",
  ]);

  const toggleLineVisibilityManufacturera = (categoria) => {
    setVisibleLinesManufacturera((prev) =>
      prev.includes(categoria)
        ? prev.filter((item) => item !== categoria)
        : [...prev, categoria]
    );
  };

  const categoriasPyme = Object.keys(colorsPyme);

  const toggleLineVisibilityPyme = (categoria) => {
    setVisibleLinesPyme((prev) =>
      prev.includes(categoria)
        ? prev.filter((item) => item !== categoria)
        : [...prev, categoria]
    );
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-[5%] bg-gray-600 text-white flex justify-center items-center relative">
        <FaArrowLeft className="cursor-pointer" onClick={handleMesAnterior} />
        <span className="mx-4 flex items-center justify-center w-1/3">
          {mesSeleccionado.toUpperCase()}
        </span>
        <FaArrowRight className="cursor-pointer" onClick={handleMesSiguiente} />
        <div className="absolute right-0 flex space-x-2">
          <button
            onClick={() => setVista("COMPARATIVA")}
            className={`w-32 h-6 flex items-center justify-center text-xs font-semibold rounded-xl ${
              vista === "COMPARATIVA"
                ? "bg-pink-600 text-white"
                : "bg-gray-600 text-white"
            } hover:bg-pink-800`}
          >
            COMPARATIVA
          </button>
          <button
            onClick={() => setVista("PYME")}
            className={`w-32 h-6 flex items-center justify-center text-xs font-semibold rounded-xl ${
              vista === "PYME"
                ? "bg-pink-600 text-white"
                : "bg-gray-600 text-white"
            } hover:bg-pink-800`}
          >
            PYME
          </button>
          <button
            onClick={() => setVista("INDUSTRIA")}
            className={`w-32 h-6 flex items-center justify-center text-xs font-semibold rounded-xl ${
              vista === "INDUSTRIA"
                ? "bg-pink-600 text-white"
                : "bg-gray-600 text-white"
            } hover:bg-pink-800`}
          >
            MANUFACTURERA
          </button>
        </div>
      </div>
      {vista === "PYME" ? (
        <div className="w-full h-[95%]">
          <div className="w-full h-1/5 bg-gray-400 flex items-center justify-evenly relative">
            <FaArrowDown
              className="text-yellow-400 absolute left-24 font-bolder -bottom-4"
              size={50}
            />

            <div className="w-1/6 h-3/4 rounded-xl bg-yellow-100 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                VARIACIÓN INTERANUAL
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {dataPyme[mesSeleccionado].interanual} pp
              </span>
            </div>
            <div className="w-1/6 h-3/4 rounded-xl bg-gray-200 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                VARIACIÓN MENSUAL
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {dataPyme[mesSeleccionado].intermensual} pp
              </span>
            </div>
            <div className="w-1/6 h-3/4 rounded-xl bg-gray-200 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                VARIACIÓN ACUMULADA
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {dataPyme[mesSeleccionado].acumulada} pp
              </span>
            </div>
            <div className="w-1/6 h-3/4 rounded-xl bg-gray-200 flex flex-col text-white text-xs">
              <span className="w-full h-1/4 bg-gray-700 flex items-center justify-center font-semibold">
                CAPACIDAD INDUSTRIAL UTILIZADA
              </span>
              <span className="w-full h-3/4 font-black flex items-center justify-center text-4xl text-gray-700">
                {dataPyme[mesSeleccionado].capacidad} %
              </span>
            </div>
          </div>
          <div className="w-full h-4/5 flex flex items-start relative justify-start">
            <ResponsiveContainer width="95%" height="90%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                />
                <YAxis domain={[-50, 50]} y tickCount={9} />
                <Tooltip />

                <Bar
                  dataKey="valor"
                  label={{ position: "insideTop", fill: "#000" }}
                ></Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="w-[90%] h-[10%] flex items-center justify-around absolute top-2 mx-auto left-0 right-4">
              <div className="rounded-full h-12 w-12">
                <img src="/assets/textiles.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/alimentos.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/madera.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/papel.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/quimicos.png" alt="" />
              </div>
              <div className="rounded-full h-12 w-12">
                <img src="/assets/metal.png" alt="" />
              </div>
            </div>
            <div className="w-32 absolute h-[10%]  left-1 bottom-2 text-[12px] font-bold">
              <div className="w-full h-1/2 flex items-center text-green-500">
                Intermensual
              </div>
              <div className="w-full h-1/2 flex items-center text-blue-500">
                Acumulada
              </div>
            </div>
            <div className="w-[90%] h-[10%] absolute bottom-2 mx-auto left-0 right-4">
              <div className="w-full h-1/2 flex items-center justify-around text-green-500">
                {intermensualPymeData.map((item) => (
                  <div className="flex flex-col items-center w-24 items-center justify-center rounded-xl text-white bg-green-500">
                    {item.valor} pp
                  </div>
                ))}
              </div>
              <div className="w-full h-1/2 flex items-center justify-around text-green-500">
                {acumuladaPymeData.map((item) => (
                  <div className="flex flex-col items-center w-24 items-center justify-center rounded-xl text-white bg-blue-500">
                    {item.valor} pp
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : vista === "COMPARATIVA" ? (
        <div className="w-full h-[95%]">
          <div className="w-full h-[90%] flex relative">
            <div className="absolute top-3 left-[15%] w-64 rounded bg-blue-800 text-gray-100 flex items-center justify-center">
              MANUFACTURERA
            </div>
            <div className="absolute top-3 right-[15%] w-64 rounded bg-blue-800 text-gray-100 flex items-center justify-center">
              PYME
            </div>
            <div className="h-full w-1/2 bg-gray-100 flex items-end justify-start">
              <ResponsiveContainer width="90%" height={"90%"}>
                <LineChart data={dataIndustria}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis domain={[20, 90]} />
                  <Tooltip />
                  {visibleLinesManufacturera.map((categoria) => (
                    <Line
                      key={categoria}
                      type="monotone"
                      dataKey={categoria}
                      stroke={colorsIndustria[categoria]}
                      dot={{
                        stroke: colorsIndustria[categoria],
                        fill: colorsIndustria[categoria],
                      }}
                    />
                  ))}
                  <ReferenceLine
                    x="DIC-23"
                    stroke="black"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                  <ReferenceLine
                    style={{ opacity: 0.2 }}
                    x={mesSeleccionado.toUpperCase()}
                    stroke="gray"
                    strokeWidth={18}
                    // strokeDasharray="1 1"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="h-full w-1/2 bg-gray-900 flex items-end justify-start">
              <ResponsiveContainer width="95%" height={"90%"}>
                <LineChart data={charPymedata}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis domain={[20, 90]} />
                  <Tooltip />
                  {visibleLinesPyme.map((categoria) => (
                    <Line
                      key={categoria}
                      type="monotone"
                      dataKey={categoria}
                      stroke={colorsPyme[categoria]}
                      strokeWidth={1}
                      dot={{
                        stroke: colorsPyme[categoria],
                        fill: colorsPyme[categoria],
                      }}
                    />
                  ))}
                  <ReferenceLine
                    x="DIC-23"
                    stroke="white"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                  <ReferenceLine
                    style={{ opacity: 0.2 }}
                    x={mesSeleccionado.toUpperCase()}
                    stroke="gray"
                    strokeWidth={18}
                    // strokeDasharray="1 1"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-full h-[10%] flex">
            <div className="w-1/2 h-full bg-white border-t-2 border-gray-500 flex items-center justify-evenly font-semibold text-xs text-white">
              <div className="w-full flex flex-wrap justify-center h-full items-center">
                {categoriasIndustria.map((categoria, index) => (
                  <div
                    key={index}
                    className="w-24 m-1 h-[1rem] rounded-full flex items-center justify-center cursor-pointer text-gray-800"
                    style={{
                      backgroundColor: visibleLinesManufacturera.includes(
                        categoria
                      )
                        ? colorsIndustria[categoria]
                        : "gray",
                    }}
                    onClick={() => toggleLineVisibilityManufacturera(categoria)}
                  >
                    <span className="font-semibold text-[10px]">
                      {categoria.split(" ")[0].toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 h-full bg-gray-800 border-t-2 border-gray-400 flex items-center justify-evenly pl-2">
              {categoriasPyme.map((categoria, index) => (
                <div
                  key={index}
                  className="w-32 h-8 m-[2px] rounded-full flex items-center justify-center cursor-pointer"
                  style={{
                    backgroundColor: visibleLinesPyme.includes(categoria)
                      ? colorsPyme[categoria]
                      : "gray",
                  }}
                  onClick={() => toggleLineVisibilityPyme(categoria)}
                >
                  <span className="font-semibold text-white text-[8px]">
                    {categoria.split(" ")[0].toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[95%] flex">
          <ResponsiveContainer
            width="75%"
            height={"100%"}
            className={"relative"}
          >
            {mesSeleccionado === meses[meses.length - 1] ? (
              <div className="text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 text-center p-4 rounded-xl border-gray-700 h-24 bg-yellow-200 z-50 text-gray-700 flex flex-col items-center justify-evenly">
                <p>
                  {" "}
                  Este informe se produce con un mes más de rezago que el de
                  industria Pyme.{" "}
                </p>
                <p className="flex">
                  <span>El último disponible es el mes de&nbsp; </span>
                  <span className="font-semibold">
                    {meses[meses.length - 2]}
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
            <BarChart
              layout="vertical"
              data={transformedIndustrialData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis
                type="category"
                dataKey="name"
                width={160}
                tick={{ fontSize: 12 }}
                label={{ fontSize: 14 }}
              />
              <Tooltip />
              <Bar dataKey="value">
                <LabelList dataKey="value" position="insideRight" fill="#fff" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="w-1/4 h-full bg-gray-700 flex flex-col items-center justify-evenly">
            <div className="rounded text-yellow-200 border-2 border-yellow-200 w-56 h-32 flex flex-col items-center justify-between">
              <span className="h-1/5 w-full bg-yellow-200 text-gray-700 text-center text-xs flex items-center justify-center font-bold">
                CAPACIDAD INSUTRIAL UTILIZADA
              </span>
              <p className="text-5xl pb-8">
                {variacionesManufacturera[mesSeleccionado].capacidad} %
              </p>
            </div>
            <div className="rounded text-yellow-400 border-2 border-yellow-500 w-56 h-32 flex flex-col items-center justify-between">
              <span className="h-1/5 w-full bg-yellow-500 text-gray-700 text-center text-xs flex items-center justify-center font-bold">
                VARIACION INTERANUAL
              </span>
              <p className="text-5xl pb-8">
                {variacionesManufacturera[mesSeleccionado].interanual} pp.
              </p>
            </div>{" "}
            <div className="rounded text-yellow-400 border-2 border-yellow-500 w-56 h-32 flex flex-col items-center justify-between">
              <span className="h-1/5 w-full bg-yellow-500 text-gray-700 text-center text-xs flex items-center justify-center font-bold">
                VARIACION INTERMENSUAL
              </span>
              <p className="text-5xl pb-8">
                {variacionesManufacturera[mesSeleccionado].intermensual} pp.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
