import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const dataNacion = [
  {
    "Diciembre '23 ": {
      GENERAL: 25.5,
      "Bienes y servicios": 32.7,
      Transporte: 31.7,
      Comunicación: 15.6,
      "Recreación y cultura": 20.2,
      "Equipamiento y mantenimiento del hogar": 30.7,
      "Bebidas alcohólicas y tabaco": 20.2,
      Salud: 32.6,
      "Alimentos y bebidas no alcohólicas": 29.7,
      "Restaurantes y hoteles": 21.6,
      "Vivienda, agua, electricidad, gas y otros combustibles": 13.8,
      "Prendas de vestir y calzado": 17.2,
      Educación: 6.2,
    },
  },
  {
    Enero: {
      GENERAL: 20.6,
      "Bienes y servicios": 44.4,
      Transporte: 26.3,
      Comunicación: 25.1,
      "Recreación y cultura": 24,
      "Equipamiento y mantenimiento del hogar": 22.3,
      "Bebidas alcohólicas y tabaco": 21,
      Salud: 20.5,
      "Alimentos y bebidas no alcohólicas": 20.4,
      "Restaurantes y hoteles": 19.4,
      "Vivienda, agua, electricidad, gas y otros combustibles": 14,
      "Prendas de vestir y calzado": 11.9,
      Educación: 0.9,
    },
  },
  {
    Febrero: {
      GENERAL: 13.2,
      "Bienes y servicios": 16.6,
      Transporte: 21.6,
      Comunicación: 24.7,
      "Recreación y cultura": 8.6,
      "Equipamiento y mantenimiento del hogar": 10.3,
      "Bebidas alcohólicas y tabaco": 17.7,
      Salud: 13.6,
      "Alimentos y bebidas no alcohólicas": 11.9,
      "Restaurantes y hoteles": 11.2,
      "Vivienda, agua, electricidad, gas y otros combustibles": 20.2,
      "Prendas de vestir y calzado": 7.2,
      Educación: 9.9,
    },
  },
  {
    Marzo: {
      GENERAL: 11,
      "Bienes y servicios": 9.6,
      Transporte: 13,
      Comunicación: 15.9,
      "Recreación y cultura": 8.5,
      "Equipamiento y mantenimiento del hogar": 5,
      "Bebidas alcohólicas y tabaco": 12.3,
      Salud: 12.2,
      "Alimentos y bebidas no alcohólicas": 10.5,
      "Restaurantes y hoteles": 8.3,
      "Vivienda, agua, electricidad, gas y otros combustibles": 13.3,
      "Prendas de vestir y calzado": 10.9,
      Educación: 36.8,
    },
  },
  {
    Abril: {
      GENERAL: 8.8,
      "Bienes y servicios": 5.7,
      Transporte: 6.3,
      Comunicación: 14.2,
      "Recreación y cultura": 7.1,
      "Equipamiento y mantenimiento del hogar": 6.5,
      "Bebidas alcohólicas y tabaco": 5.5,
      Salud: 9.1,
      "Alimentos y bebidas no alcohólicas": 6,
      "Restaurantes y hoteles": 7.3,
      "Vivienda, agua, electricidad, gas y otros combustibles": 35.6,
      "Prendas de vestir y calzado": 9.6,
      Educación: 8.6,
    },
  },
  {
    Mayo: {
      GENERAL: 4.2,
      "Bienes y servicios": 4.3,
      Transporte: 4,
      Comunicación: 8.2,
      "Recreación y cultura": 4.6,
      "Equipamiento y mantenimiento del hogar": 3.2,
      "Bebidas alcohólicas y tabaco": 6.7,
      Salud: 0.7,
      "Alimentos y bebidas no alcohólicas": 4.8,
      "Restaurantes y hoteles": 5.5,
      "Vivienda, agua, electricidad, gas y otros combustibles": 2.5,
      "Prendas de vestir y calzado": 3.5,
      Educación: 7.6,
    },
  },
  {
    Junio: {
      GENERAL: 4.6,
      "Bienes y servicios": 2.8,
      Transporte: 3.9,
      Comunicación: 5.3,
      "Recreación y cultura": 5.6,
      "Equipamiento y mantenimiento del hogar": 2.3,
      "Bebidas alcohólicas y tabaco": 2.1,
      Salud: 4.7,
      "Alimentos y bebidas no alcohólicas": 3,
      "Restaurantes y hoteles": 6.3,
      "Vivienda, agua, electricidad, gas y otros combustibles": 14.3,
      "Prendas de vestir y calzado": 2.7,
      Educación: 5.7,
    },
  },
  {
    Julio: {
      GENERAL: 4,
      "Bienes y servicios": 3.5,
      Transporte: 2.6,
      Comunicación: 3.5,
      "Recreación y cultura": 5.7,
      "Equipamiento y mantenimiento del hogar": 3.5,
      "Bebidas alcohólicas y tabaco": 6.1,
      Salud: 5.8,
      "Alimentos y bebidas no alcohólicas": 3.2,
      "Restaurantes y hoteles": 6.5,
      "Vivienda, agua, electricidad, gas y otros combustibles": 6,
      "Prendas de vestir y calzado": 1.6,
      Educación: 4.2,
    },
  },
  {
    Agosto: {
      GENERAL: 4.2,
      "Bienes y servicios": 2.3,
      Transporte: 5.1,
      Comunicación: 4.9,
      "Recreación y cultura": 3.7,
      "Equipamiento y mantenimiento del hogar": 4.3,
      "Bebidas alcohólicas y tabaco": 3,
      Salud: 4.1,
      "Alimentos y bebidas no alcohólicas": 3.6,
      "Restaurantes y hoteles": 4.8,
      "Vivienda, agua, electricidad, gas y otros combustibles": 7,
      "Prendas de vestir y calzado": 2.1,
      Educación: 6.6,
    },
  },
  {
    Septiembre: {
      GENERAL: 3.5,
      "Bienes y servicios": 3.3,
      Transporte: 3.4,
      Comunicación: 3.0,
      "Recreación y cultura": 2.1,
      "Equipamiento y mantenimiento del hogar": 2.7,
      "Bebidas alcohólicas y tabaco": 2.2,
      Salud: 3.3,
      "Alimentos y bebidas no alcohólicas": 2.3,
      "Restaurantes y hoteles": 3.7,
      "Vivienda, agua, electricidad, gas y otros combustibles": 7.3,
      "Prendas de vestir y calzado": 6.0,
      Educación: 4.3,
    },
  },
  {
    Octubre: {
      GENERAL: 2.7,
      "Bienes y servicios": 3.3,
      Transporte: 3.4,
      Comunicación: 3.0,
      "Recreación y cultura": 2.1,
      "Equipamiento y mantenimiento del hogar": 2.7,
      "Bebidas alcohólicas y tabaco": 2.2,
      Salud: 3.3,
      "Alimentos y bebidas no alcohólicas": 2.3,
      "Restaurantes y hoteles": 3.7,
      "Vivienda, agua, electricidad, gas y otros combustibles": 7.3,
      "Prendas de vestir y calzado": 6.0,
      Educación: 4.3,
    },
  },
  {
    Noviembre: {
      GENERAL: 2.4,
      "Bienes y servicios": 2.3,
      Transporte: 3.4,
      Comunicación: 1.5,
      "Recreación y cultura": 3.0,
      "Equipamiento y mantenimiento del hogar": 1.5,
      "Bebidas alcohólicas y tabaco": 4.0,
      Salud: 2.9,
      "Alimentos y bebidas no alcohólicas": 0.9,
      "Restaurantes y hoteles": 3.6,
      "Vivienda, agua, electricidad, gas y otros combustibles": 4.5,
      "Prendas de vestir y calzado": 1.9,
      Educación: 5.1,
    },
  },
  {
    Diciembre: {
      GENERAL: 2.1,
      "Bienes y servicios": 2.2,
      Transporte: 5.0,
      Comunicación: 2.8,
      "Recreación y cultura": 0.9,
      "Equipamiento y mantenimiento del hogar": 2.5,
      "Bebidas alcohólicas y tabaco": 2.1,
      Salud: 2.2,
      "Alimentos y bebidas no alcohólicas": 4.6,
      "Restaurantes y hoteles": 5.3,
      "Vivienda, agua, electricidad, gas y otros combustibles": 1.6,
      "Prendas de vestir y calzado": 2.2,
      Educación: 6.2,
    },
  },
];

const dataCaba = [
  {
    "Diciembre '23": {
      GENERAL: 21.7,
      "Bienes y servicios": 12.4,
      Transporte: 30.4,
      Comunicación: 22.2,
      "Recreación y cultura": 16,
      "Equipamiento y mantenimiento del hogar": 21.9,
      "Bebidas alcohólicas y tabaco": 23,
      Salud: 19.4,
      "Alimentos y bebidas no alcohólicas": 30.4,
      "Restaurantes y hoteles": 19.8,
      "Vivienda, agua, electricidad, gas y otros combustibles": 11.6,
      "Prendas de vestir y calzado": 16.2,
      Educación: 15.9,
    },
  },
  {
    Enero: {
      GENERAL: 21.1,
      "Bienes y servicios": 24.2,
      Transporte: 33.7,
      Comunicación: 16.7,
      "Recreación y cultura": 30.5,
      "Equipamiento y mantenimiento del hogar": 20.2,
      "Bebidas alcohólicas y tabaco": 22.7,
      Salud: 30.3,
      "Alimentos y bebidas no alcohólicas": 25.4,
      "Restaurantes y hoteles": 24.1,
      "Vivienda, agua, electricidad, gas y otros combustibles": 10,
      "Prendas de vestir y calzado": 10.6,
      Educación: 1.5,
    },
  },
  {
    Febrero: {
      GENERAL: 14.1,
      "Bienes y servicios": 30,
      Transporte: 21,
      Comunicación: 19.4,
      "Recreación y cultura": 9.4,
      "Equipamiento y mantenimiento del hogar": 7.5,
      "Bebidas alcohólicas y tabaco": 21.1,
      Salud: 21.1,
      "Alimentos y bebidas no alcohólicas": 14.7,
      "Restaurantes y hoteles": 8,
      "Vivienda, agua, electricidad, gas y otros combustibles": 13.2,
      "Prendas de vestir y calzado": 9.8,
      Educación: 9.4,
    },
  },
  {
    Marzo: {
      GENERAL: 13.2,
      "Bienes y servicios": 15,
      Transporte: 8.5,
      Comunicación: 24.5,
      "Recreación y cultura": 6,
      "Equipamiento y mantenimiento del hogar": 8.6,
      "Bebidas alcohólicas y tabaco": 13.1,
      Salud: 16.9,
      "Alimentos y bebidas no alcohólicas": 11,
      "Restaurantes y hoteles": 7.6,
      "Vivienda, agua, electricidad, gas y otros combustibles": 17.9,
      "Prendas de vestir y calzado": 11.5,
      Educación: 36.8,
    },
  },
  {
    Abril: {
      GENERAL: 9.8,
      "Bienes y servicios": 11.7,
      Transporte: 4.4,
      Comunicación: 11.7,
      "Recreación y cultura": 3.6,
      "Equipamiento y mantenimiento del hogar": 6.9,
      "Bebidas alcohólicas y tabaco": 5.8,
      Salud: 13,
      "Alimentos y bebidas no alcohólicas": 5.1,
      "Restaurantes y hoteles": 6.1,
      "Vivienda, agua, electricidad, gas y otros combustibles": 22.9,
      "Prendas de vestir y calzado": 6.2,
      Educación: 15.1,
    },
  },
  {
    Mayo: {
      GENERAL: 4.4,
      "Bienes y servicios": 12.6,
      Transporte: 5.2,
      Comunicación: 7.7,
      "Recreación y cultura": 5.9,
      "Equipamiento y mantenimiento del hogar": 5.7,
      "Bebidas alcohólicas y tabaco": 6,
      Salud: -4.2,
      "Alimentos y bebidas no alcohólicas": 4.8,
      "Restaurantes y hoteles": 5.7,
      "Vivienda, agua, electricidad, gas y otros combustibles": 4.8,
      "Prendas de vestir y calzado": 2.2,
      Educación: 6.2,
    },
  },
  {
    Junio: {
      GENERAL: 4.8,
      "Bienes y servicios": 11.7,
      Transporte: 4.7,
      Comunicación: 4.9,
      "Recreación y cultura": 4.4,
      "Equipamiento y mantenimiento del hogar": 3.1,
      "Bebidas alcohólicas y tabaco": 3.2,
      Salud: -4.3,
      "Alimentos y bebidas no alcohólicas": 2.7,
      "Restaurantes y hoteles": 6.4,
      "Vivienda, agua, electricidad, gas y otros combustibles": 7.3,
      "Prendas de vestir y calzado": 3.3,
      Educación: 6.5,
    },
  },
  {
    Julio: {
      GENERAL: 5.1,
      "Bienes y servicios": 3.8,
      Transporte: 6.8,
      Comunicación: 0.8,
      "Recreación y cultura": 5.7,
      "Equipamiento y mantenimiento del hogar": 1,
      "Bebidas alcohólicas y tabaco": 7.3,
      Salud: 3.6,
      "Alimentos y bebidas no alcohólicas": 3.9,
      "Restaurantes y hoteles": 7.6,
      "Vivienda, agua, electricidad, gas y otros combustibles": 5.8,
      "Prendas de vestir y calzado": 9.3,
      Educación: 6.7,
    },
  },
  {
    Agosto: {
      GENERAL: 4.2,
      "Bienes y servicios": 6.6,
      Transporte: 9,
      Comunicación: 4.2,
      "Recreación y cultura": 0.6,
      "Equipamiento y mantenimiento del hogar": 1.9,
      "Bebidas alcohólicas y tabaco": 4.8,
      Salud: 5.4,
      "Alimentos y bebidas no alcohólicas": 3.1,
      "Restaurantes y hoteles": 2.3,
      "Vivienda, agua, electricidad, gas y otros combustibles": 4.4,
      "Prendas de vestir y calzado": 3.7,
      Educación: 6,
    },
  },
  {
    Septiembre: {
      GENERAL: 4.0,
      "Bienes y servicios": 6.9,
      Transporte: 5.1,
      Comunicación: 1.6,
      "Recreación y cultura": 5.2,
      "Equipamiento y mantenimiento del hogar": 6.1,
      "Bebidas alcohólicas y tabaco": 4.6,
      Salud: 5.0,
      "Alimentos y bebidas no alcohólicas": 2.2,
      "Restaurantes y hoteles": 3.7,
      "Vivienda, agua, electricidad, gas y otros combustibles": 4.3,
      "Prendas de vestir y calzado": 5.6,
      Educación: 3.6,
    },
  },
  {
    Octubre: {
      GENERAL: 3.2,
      "Bienes y servicios": 6.6,
      Transporte: 9.0,
      Comunicación: 4.2,
      "Recreación y cultura": 0.6,
      "Equipamiento y mantenimiento del hogar": 1.9,
      "Bebidas alcohólicas y tabaco": 4.8,
      Salud: 5.4,
      "Alimentos y bebidas no alcohólicas": 3.1,
      "Restaurantes y hoteles": 2.3,
      "Vivienda, agua, electricidad, gas y otros combustibles": 4.4,
      "Prendas de vestir y calzado": 3.7,
      Educación: 6.0,
    },
  },
  {
    Noviembre: {
      GENERAL: 3.2,
      "Bienes y servicios": 3.2,
      Transporte: 4.7,
      Comunicación: 1.2,
      "Recreación y cultura": 2.8,
      "Equipamiento y mantenimiento del hogar": 3.3,
      "Bebidas alcohólicas y tabaco": 3.9,
      Salud: 4.2,
      "Alimentos y bebidas no alcohólicas": 1.7,
      "Restaurantes y hoteles": 3.1,
      "Vivienda, agua, electricidad, gas y otros combustibles": 4.2,
      "Prendas de vestir y calzado": 2.2,
      Educación: 2.9,
    },
  },
  {
    Diciembre: {
      GENERAL: 5.8,
      "Bienes y servicios": 3.5,
      Transporte: 4.3,
      Comunicación: 2.3,
      "Recreación y cultura": 0.6,
      "Equipamiento y mantenimiento del hogar": 4.4,
      "Bebidas alcohólicas y tabaco": 3.7,
      Salud: 2.3,
      "Alimentos y bebidas no alcohólicas": 5.2,
      "Restaurantes y hoteles": 3.9,
      "Vivienda, agua, electricidad, gas y otros combustibles": 0.5,
      "Prendas de vestir y calzado": 4.0,
      Educación: 3.0,
    },
  },
];

const coloresCategorias = {
  GENERAL: "#FF0000",
  "Bienes y servicios": "#00FF00",
  Transporte: "#6b6ff2",
  Comunicación: "#eefa48",
  "Recreación y cultura": "#20B2AA",
  "Equipamiento y mantenimiento del hogar": "#f765b3",
  "Bebidas alcohólicas y tabaco": "#FFA500",
  Salud: "#F6905F",
  "Alimentos y bebidas no alcohólicas": "#32a852",
  "Restaurantes y hoteles": "#b80208",
  "Vivienda, agua, electricidad, gas y otros combustibles": "#000080",
  "Prendas de vestir y calzado": "#FFC0CB",
  Educación: "#ADC2E2",
};

const descripciones = [
  {
    GENERAL: ["Valor total de la inflación mensual"],
  },
  {
    "Alimentos y bebidas no alcohólicas": [
      "Pan y cereales",
      "Carnes y derivados",
      "Pescados y Mariscos",
      "Leche, productos lácteos y huevos",
      "Aceites, grasas y manteca",
      "Frutas",
      "Verduras, tubérculos y legumbres",
      "Azúcar, dulces, chocolate, golosinas, etc.",
      "Otros alimentos",
      "Café, té, yerba y cacao",
      "Aguas minerales, bebidas gaseosas y jugos",
    ],
  },
  {
    "Bebidas alcohólicas y tabaco": [
      "Tabaco",
      "Bebidas espirituosas, destiladas y licores",
      "Vinos",
      "Cerveza",
    ],
  },
  {
    "Prendas de vestir y calzado": [
      "Prendas de vestir y materiales",
      "Calzado",
      "Materiales textiles, telas e hilados",
      "Prendas de vestir",
      "Otros artículos y accesorios para el vestir",
      "Limpieza, reparación, alquiler de ropa",
      "Zapatos y otros calzados",
      "Limpieza, reparación, alquiler de calzados",
    ],
  },
  {
    "Vivienda, agua, electricidad, gas y otros combustibles": [
      "Alquiler de la vivienda y gastos conexos",
      "Mantenimiento y reparación de la vivienda",
      "Suministro de agua",
      "Electricidad, gas y otros combustibles",
      "Alquiler de la vivienda",
      "Gastos comunes por la vivienda y/o cochera y otros gastos",
      "Materiales para la reparación de la vivienda",
      "Servicios para la reparación de la vivienda",
      "Electricidad",
      "Gas",
    ],
  },
  {
    "Equipamiento y mantenimiento del hogar": [
      "Muebles, accesorios, alfombras y otros materiales para pisos",
      "Artículos textiles para el hogar",
      "Artefactos para el hogar",
      "Vajilla, utensilios, loza y cristalería",
      "Herramientas y equipos para el hogar y el jardín",
      "Bienes y servicios para la conservación del hogar",
      "Bienes para el hogar no durables",
      "Servicios domésticos y para el hogar",
    ],
  },
  {
    Salud: [
      "Productos medicinales, artefactos y equipos para la salud",
      "Servicios para pacientes externos",
      "Gastos de prepagas y obras sociales",
      "Productos farmacéuticos",
      "Otros productos medicinales",
      "Artefactos y equipos terapéuticos y sus reparaciones",
      "Servicios médicos para pacientes externos",
      "Servicios y tratamientos odontológicos",
      "Servicios auxiliares para pacientes externos",
    ],
  },
  {
    Transporte: [
      "Adquisición de vehículos",
      "Funcionamiento de equipos de transporte personal",
      "Transporte público",
      "Vehículos a motor",
      "Motocicletas",
      "Bicicletas",
      "Funcionamiento de equipos de transporte de uso del hogar",
      "Combustibles y lubricantes para vehículos de uso del hogar",
      "Conservación y reparación de vehículos de uso del hogar",
      "Otros servicios relativos al equipo de vehículos de uso del hogar",
      "Servicios de transporte automotor",
      "Servicios de transporte ferroviario",
      "Servicios de transporte aéreo",
      "Otros servicios de transporte",
    ],
  },
  {
    Comunicación: [
      "Servicios postales",
      "Equipos telefónicos",
      "Servicios de telefonía e internet",
      "Equipos teléfonicos fijos",
      "Equipos telefónicos móviles",
      "Servicio de teléfonos fijos",
      "Servicio de telefonía móvil",
      "Servicio de conexión a internet",
    ],
  },
  {
    "Recreación y cultura": [
      "Equipos audiovisuales, fotográficos y de procesamiento de la información",
      "Otros artículos para la recreación, jardines y animales",
      "Servicios recreativos y culturales",
      "Periódicos, diarios, revistas, libros y artículos de papelería",
      "Paquete turístico",
      "Equipos para la recepción, grabación y reproducción de sonidos e imágenes",
      "Equipo fotográfico y cinematográfico e instrumentos ópticos",
      "Equipos de procesamiento e información",
      "Medios para grabación",
      "Juegos, juguetes y hobbies",
      "Equipo para el deporte, campamento y recreación al aire libre",
      "Mascotas y productos conexos",
      "Servicios recreativos y deportivos",
      "Servicios culturales",
      "Libros",
      "Diarios y publicaciones periódicas",
      "Papel y útiles de oficina y materiales de dibujo",
    ],
  },
  {
    Educación: [
      "Educación preescolar y primaria",
      "Educación secundaria",
      "Educación postsecundaria, no terciaria",
      "Educación no atribuible a ningún nivel",
    ],
  },
  {
    "Restaurantes y hoteles": [
      "Restaurantes y comidas fuera del hogar",
      "Hoteles",
    ],
  },
  {
    "Bienes y servicios": [
      "Seguros",
      "Otros servicios",
      "Salones de peluquería y establecimientos de cuidados personales",
      "Otros aparatos, artículos y productos para la atención personal",
    ],
  },
];

const variacionAcumuladaNacion = {
  Enero: "20.6%",
  Febrero: "36.6%",
  Marzo: "51.6%",
  Abril: "65%",
  Mayo: "71.9%",
  Junio: "79.8%",
  Julio: "87%",
  Agosto: "94.8%",
  Septiembre: "101.6%",
  Octubre: "107%",
  Noviembre: "112%",
  Diciembre: "117.8%",
};
const variacionAcumuladaCaba = {
  Enero: "21.7%",
  Febrero: "38.9%",
  Marzo: "57.3%",
  Abril: "67.1%",
  Mayo: "80.2%",
  Junio: "88.9%",
  Julio: "98.5%",
  Agosto: "106.8%",
  Septiembre: "115.1%",
  Octubre: "122.1%",
  Noviembre: "129.1%",
  Diciembre: "136.7%",
};
const variacionInteranualNacion = {
  Enero: "254.2%",
  Febrero: "276.2%",
  Marzo: "287.9%",
  Abril: "289.4%",
  Mayo: "276.4%",
  Junio: "271.5%",
  Julio: "263.4%",
  Agosto: "236.7%",
  Septiembre: "209%",
  Octubre: "193%",
  Noviembre: "166%",
  Diciembre: "117.8%",
};
const variacionInteranualCaba = {
  Enero: "238.5%",
  Febrero: "264.5%",
  Marzo: "285.3%",
  Abril: "292.5%",
  Mayo: "287.9%",
  Junio: "272.7%",
  Julio: "264.9%",
  Agosto: "243.1%",
  Septiembre: "218.8%",
  Octubre: "200.9%",
  Noviembre: "177.4%",
  Diciembre: "136.7%",
};

const CustomizedLabel = ({ x, y, stroke, value }) => {
  return (
    <text
      x={x}
      y={y}
      dy={-10}
      dx={12}
      fill={stroke}
      fontSize={12}
      className="font-bold"
      textAnchor="middle"
    >
      {`%${value}`}
    </text>
  );
};

export default function InflacionDesglose() {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([
    "GENERAL",
  ]);
  const [dataInflacion, setDataInflacion] = useState("nacional");
  let data = dataInflacion === "nacional" ? dataNacion : dataCaba;
  const [mesSeleccionadoIndex, setMesSeleccionadoIndex] = useState(
    data.length - 1
  );

  const categorias =
    (data[0] && Object.keys(data[0][Object.keys(data[0])[0]])) || [];

  const handleCategoriaSeleccionada = (categoria) => {
    if (categoriasSeleccionadas.includes(categoria)) {
      setCategoriasSeleccionadas(
        categoriasSeleccionadas.filter((cat) => cat !== categoria)
      );
    } else {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, categoria]);
    }
  };

  let variacionAnual =
    dataInflacion === "nacional"
      ? variacionInteranualNacion
      : variacionInteranualCaba;

  let variacionAcumulada =
    dataInflacion === "nacional"
      ? variacionAcumuladaNacion
      : variacionAcumuladaCaba;

  const graficoData = data.map((mes) => {
    const item = { Mes: Object.keys(mes)[0] };
    categoriasSeleccionadas.forEach((categoria) => {
      item[categoria] = mes[item.Mes][categoria];
    });
    return item;
  });

  const cambiarMes = (direccion) => {
    if (direccion === "anterior") {
      setMesSeleccionadoIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    } else if (direccion === "siguiente") {
      setMesSeleccionadoIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-full h-1/5 flex border-b">
        <div
          className={`h-full w-1/6 text-center text-gray-800 text-4xl flex items-center justify-center ${
            dataInflacion === "caba" ? "bg-yellow-300" : "bg-pink-300"
          }`}
        >
          Valores Mensuales
        </div>
        <div
          className={`h-full w-5/6 flex flex-col border-y-4 ${
            dataInflacion === "caba" ? "border-yellow-300" : "border-pink-300"
          }`}
        >
          <div className="w-full h-1/5 bg-gray-800 flex items-center">
            {" "}
            <RiArrowLeftSLine
              className="text-white cursor-pointer"
              onClick={() => cambiarMes("anterior")}
            />{" "}
            <select
              value={Object.keys(data[mesSeleccionadoIndex])[0]}
              onChange={(e) =>
                setMesSeleccionadoIndex(
                  data.findIndex(
                    (mesData) => Object.keys(mesData)[0] === e.target.value
                  )
                )
              }
              className="text-white bg-gray-800 text-center w-full appearance-none"
            >
              {data.map((mesData, index) => (
                <option key={index} value={Object.keys(mesData)[0]}>
                  {Object.keys(mesData)[0]}
                </option>
              ))}
            </select>
            <RiArrowRightSLine
              className="text-white cursor-pointer"
              onClick={() => cambiarMes("siguiente")}
            />{" "}
          </div>
          <div className="w-full h-4/5 bg-gray-500 flex items-center justify-evenly">
            <div
              className={`bg-gray-800 w-1/6 h-2/3 rounded flex flex-col items-center justify-between ${
                dataInflacion === "caba" ? "text-yellow-300" : "text-pink-300"
              }`}
            >
              <span className="h-1/3 text-xs border-b flex items-center justify-center w-full text-gray-200">
                Valor Mensual
              </span>
              <span className="h-2/3 text-2xl flex items-center justify-center w-full">
                {data[mesSeleccionadoIndex][
                  Object.keys(data[mesSeleccionadoIndex])[0]
                ].GENERAL.toFixed(1)}{" "}
                %
              </span>
            </div>
            <div
              className={`bg-gray-800 w-1/6 h-2/3 rounded flex flex-col items-center justify-between ${
                dataInflacion === "caba" ? "text-yellow-300" : "text-pink-300"
              }`}
            >
              <span className="h-1/3 text-xs border-b flex items-center justify-center w-full text-gray-200">
                Variación mensual
              </span>
              <span className="h-2/3 text-2xl flex items-center justify-center w-full">
                {mesSeleccionadoIndex === 0
                  ? "-"
                  : `${(
                      data[mesSeleccionadoIndex][
                        Object.keys(data[mesSeleccionadoIndex])[0]
                      ].GENERAL -
                      data[mesSeleccionadoIndex - 1][
                        Object.keys(data[mesSeleccionadoIndex - 1])[0]
                      ].GENERAL
                    ).toFixed(1)}pp`}
              </span>
            </div>
            <div
              className={`bg-gray-800 w-1/6 h-2/3 rounded flex flex-col items-center justify-between ${
                dataInflacion === "caba" ? "text-yellow-300" : "text-pink-300"
              }`}
            >
              <span className="h-1/3 text-xs border-b flex items-center justify-center w-full text-gray-200">
                Variación Acumulada Anual (2024)
              </span>
              <span className="h-2/3 text-2xl flex items-center justify-center w-full">
                {mesSeleccionadoIndex === 0
                  ? "-"
                  : variacionAcumulada[
                      Object.keys(data[mesSeleccionadoIndex])[0]
                    ]}
              </span>
            </div>
            <div
              className={`bg-gray-800 w-1/6 h-2/3 rounded flex flex-col items-center justify-between ${
                dataInflacion === "caba" ? "text-yellow-300" : "text-pink-300"
              }`}
            >
              <span className="h-1/3 text-xs border-b flex items-center justify-center w-full text-gray-200">
                Variación Interanual (vs{" "}
                {mesSeleccionadoIndex === 0
                  ? "Dic"
                  : Object.keys(data[mesSeleccionadoIndex])[0].slice(0, 3)}{" "}
                {mesSeleccionadoIndex === 0 ? "2022" : "2023"})
              </span>
              <span className="h-2/3 text-2xl flex items-center justify-center w-full">
                {mesSeleccionadoIndex === 0
                  ? "-"
                  : variacionAnual[Object.keys(data[mesSeleccionadoIndex])[0]]}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-4/5 flex">
        <div className="h-full w-3/4 flex flex-col items-center justify-around">
          <h1 className="w-2/3 text-center text-white bg-gray-800 rounded">
            Gráfico evolutivo de variables específicas
          </h1>
          <ResponsiveContainer width={"95%"} height={"80%"}>
            <LineChart data={graficoData} margin={{ right: 50 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Mes" />
              <YAxis domain={[0, 50]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(60, 60, 60, 1)",
                  border: "none",
                  borderRadius: "15px",
                }}
              />

              {categoriasSeleccionadas.map((categoria) => (
                <Line
                  type="monotone"
                  dataKey={categoria}
                  key={categoria}
                  label={
                    <CustomizedLabel color={coloresCategorias[categoria]} />
                  }
                  strokeWidth={2}
                  stroke={coloresCategorias[categoria]}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div
          className={`h-full w-1/4 border-l-2 flex flex-col items-center justify-between  ${
            dataInflacion === "caba"
              ? "bg-yellow-50 border-yellow-400"
              : "bg-pink-50 border-pink-400"
          }`}
        >
          <div className="w-full h-16 p-4 justify-evenly flex ">
            <button
              onClick={() => setDataInflacion("caba")}
              className={`h-full rounded h-14 bg-yellow-300 p-2 w-1/3 justify-center flex items-center border-2 border-yellow-600 ${
                dataInflacion === "caba" ? "font-bold" : ""
              }`}
            >
              CABA
            </button>
            <button
              onClick={() => setDataInflacion("nacional")}
              className={`h-full rounded h-[5%] bg-pink-200 p-2 w-1/3 justify-center flex items-center border-2 border-[#f57b6dff] ${
                dataInflacion === "nacional" ? "font-bold" : ""
              }`}
            >
              NACIONAL
            </button>
          </div>
          <div className="w-full h-[80%] flex flex-col justify-evenly items-center">
            {categorias.map((categoria) => {
              // Buscar la descripción correspondiente en descripciones
              const descripcion = descripciones.find((desc) =>
                desc.hasOwnProperty(categoria)
              )[categoria];

              return (
                <div
                  key={categoria}
                  className="flex items-center justify-between w-full"
                >
                  <input
                    type="checkbox"
                    id={categoria}
                    checked={categoriasSeleccionadas.includes(categoria)}
                    onChange={() => handleCategoriaSeleccionada(categoria)}
                    className="hidden"
                  />
                  <label
                    className={`w-full text-center text-[10px] font-semibold relative cursor-pointer rounded-xl py-1 ${
                      dataInflacion === "nacional"
                        ? "hover:bg-pink-200"
                        : "hover:bg-yellow-200"
                    }`}
                    htmlFor={categoria}
                    style={{
                      "--checkbox-color": coloresCategorias[categoria],
                    }}
                  >
                    <div className="checkbox"></div> {categoria.toUpperCase()}
                  </label>
                  <Tippy
                    content={
                      <ul className="list-disc pl-4 text-xs">
                        {descripcion.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    }
                  >
                    <span className="mr-1 flex rounded-full bg-black text-white items-center justify-center w-4 h-4 text-[8px]">
                      ?
                    </span>
                  </Tippy>
                </div>
              );
            })}
          </div>
          <div className="h-[5%] flex items-center w-full justify-evenly">
            {" "}
            <button
              onClick={() => setCategoriasSeleccionadas(categorias)}
              className="rounded text-gray-400 text-[10px] w-1/3 justify-center flex items-center border-b-2 border-gray-600"
            >
              Seleccionar todas
            </button>
            <button
              onClick={() => setCategoriasSeleccionadas([])}
              className="rounded text-gray-400 text-[10px] w-1/3 justify-center flex items-center border-b-2 border-gray-600"
            >
              Borrar selección
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
