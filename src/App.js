import InflacionDesglose from "./components/InflacionDesglose.jsx";
import Portada from "./components/Portada.jsx";
import Dolar from "./components/Dolar.jsx";
import Encabezado from "./components/Encabezado.jsx";
import Transporte from "./components/Transporte.jsx";
import CanastaSalario from "./components/CanastaSalario.jsx";
import Alquiler from "./components/Alquiler.jsx";
import GastosCotidianos from "./components/GastosCotidianos.jsx";
import Ocio from "./components/Ocio.jsx";
import Industria from "./components/Industria.jsx";
import ActividadEconomica from "./components/ActividadEconomica.jsx";
import Supermercados from "./components/Supermercados.jsx";
import { useState } from "react";
// import Test from "./components/Test.jsx";

export default function App() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordSubmit = () => {
    const correctPassword = "dgop"; // contraseña sin requerimientos de seguridad
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Contraseña incorrecta. Inténtalo de nuevo.");
      setIsAuthenticated(false);
    }
  };

  return !isAuthenticated ? (
    <div className="full-container">
      <section className="section !justify-evenly bg-gray-800">
        <h1 className="text-yellow-500 logo flex flex-col items-center justify-evenly">
          INDICADORES
          <span className="!text-xl">DE</span>
          REALIDAD
        </h1>
        <div className="w-full h-1/2 flex flex-col items-center justify-evenly">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa la contraseña"
            className="p-2 border-2 rounded-lg w-1/2"
          />
          <button
            className="p-2 w-44 bg-gray-200 mt-4 rounded-lg font-semibold"
            onClick={handlePasswordSubmit}
          >
            Entrar
          </button>
          {error && <p style={{ color: "#fa776b" }}>{error}</p>}
        </div>
      </section>
    </div>
  ) : (
    <div className="full-container">
      <Portada />
      <section className="section" id="inflacion">
        <Encabezado
          title={"INFLACION"}
          description={"Nacional: INDEC - CABA: Estadisticas Ciudad"}
          mensual="mensual"
        />
        <InflacionDesglose />
      </section>
      <section className="section" id="canasta-salario">
        <Encabezado
          title={"CANASTA BASICA - SALARIO MINIMO - JUBILACION"}
          description={
            "Hogar 4 integrantes: Matrimonio con 2 hijos. Nacional: INDEC - CABA: Estadisticas Ciudad. SMVM y Jubilación mínima: ANSES"
          }
          mensual="mensual"
        />
        <CanastaSalario />
      </section>
      <section className="section" id="dolar">
        <Encabezado
          title={"DOLAR"}
          description={
            "DolarAPI - Registro histórico y valores promedio del dolar y sus distintas cotizaciones"
          }
          mensual="mensual"
        />
        <Dolar />
      </section>

      <section className="section" id="transporte">
        <Encabezado
          title={"TRANSPORTE"}
          description={
            "Valor del litro de nafta, peajes, pasajes de transportes públicos y cantidad de patentamientos vehiculares a nivel nacional"
          }
          mensual="mensual"
        />
        <Transporte />
      </section>

      <section className="section" id="alquiler">
        <Encabezado
          title={"ALQUILER"}
          description={
            "Promedio alquileres departamento 2 ambientes . Fuente: ZonaProp"
          }
          mensual="mensual"
        />
        <Alquiler />
      </section>
      <section className="section" id="cotidianos">
        <Encabezado
          title={"GASTOS COTIDIANOS CABA"}
          description={
            "Precios de referencia de servicios y alimentos básicos para joven adulto independiente residente en CABA. Fuente: Elaboración propia"
          }
          mensual="mensual"
        />

        <GastosCotidianos />
      </section>

      <section className="section" id="ocio">
        <Encabezado
          title={"OCIO"}
          description={
            "Promedio de precios de actividades recreativas CABA. Fuente: Elaboración propia"
          }
          mensual="mensual"
        />

        <Ocio />
      </section>
      <section className="section" id="industrial">
        <Encabezado
          title={"INDUSTRIA"}
          description={
            "Evolución de la facturación de la industria manufacturera PyME (CAME) - Proporción de la capacidad instalada del sector industrial de nuestro país que está siendo actualmente utilizada (INDEC)"
          }
          mensual="mensual"
        />
        <Industria />
      </section>
      <section className="section" id="actividadeconomica">
        <Encabezado
          title={"ACTIVIDAD ECONOMICA"}
          description={
            "Indicador provisorio de la evolución del PIB a precios constantes de 2004, difundido con un rezago de 50 a 60 días de concluido el mes de referencia. Fuente: INDEC"
          }
          mensual="mensual"
        />
        <ActividadEconomica />
      </section>
      <section className="section" id="supermercados">
        <Encabezado
          title={"SUPERMERCADOS"}
          description={
            "Encuesta sobre una nómina de supermercados que cuentan por lo menos con alguna boca de expendio cuya superficie sea igual o supere los 200 m2. Publicación: 2 meses de rezago. Fuente: INDEC"
          }
          mensual="mensual"
        />
        <Supermercados />
      </section>
      {/* <section className="section" id="test">
        <Encabezado
          title={"TEST"}
          description={"Testeando datos.gob.ar"}
          mensual="mensual"
        />
        <Test />
      </section> */}
    </div>
  );
}
