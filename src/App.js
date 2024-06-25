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

// import Comparativa from "./components/Comparativa-DESARROLLO.jsx";

export default function App() {
  return (
    <div className="full-container">
      <Portada />
      <section className="section" id="inflacion">
        <Encabezado
          title={"INFLACION"}
          description={"Nacional: INDEC - CABA: Estadisticas Ciudad"}
        />
        <InflacionDesglose />
      </section>
      <section className="section" id="canasta-salario">
        <Encabezado
          title={"CANASTA BASICA - SALARIO MINIMO - JUBILACION"}
          description={
            "Hogar 4 integrantes: Matrimonio con 2 hijos. Nacional: INDEC - CABA: Estadisticas Ciudad. SMVM y Jubilación mínima: ANSES"
          }
        />
        <CanastaSalario />
      </section>
      <section className="section" id="dolar">
        <Encabezado
          title={"DOLAR"}
          description={
            "DolarAPI - Registro histórico y valores promedio del dolar y sus distintas cotizaciones"
          }
        />
        <Dolar />
      </section>

      <section className="section" id="transporte">
        <Encabezado
          title={"TRANSPORTE"}
          description={
            "Valor del litro de nafta, peajes, pasajes de transportes públicos y cantidad de patentamientos vehiculares a nivel nacional"
          }
        />
        <Transporte />
      </section>

      <section className="section" id="alquiler">
        <Encabezado title={"ALQUILER"} />
        <Alquiler />
      </section>
      <section className="section" id="cotidianos">
        <Encabezado title={"GASTOS COTIDIANOS CABA"} />
        <GastosCotidianos />
      </section>

      <section className="section" id="ocio">
        <Encabezado title={"OCIO"} />
        <Ocio />
      </section>
      <section className="section" id="industrial">
        <Encabezado title={"INDUSTRIA"} />
        <Industria />
      </section>
      <section className="section" id="actividadeconomica">
        <Encabezado
          title={"ACTIVIDAD ECONOMICA"}
          description={
            "Indicador provisorio de la evolución del PIB a precios constantes de 2004, difundido con un rezago de 50 a 60 días de concluido el mes de referencia. Fuente: INDEC"
          }
        />
        <ActividadEconomica />
      </section>
    </div>
  );
}
