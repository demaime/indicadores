import InflacionDesglose from "./components/InflacionDesglose.jsx";
import Portada from "./components/Portada.jsx";
import Dolar from "./components/Dolar.jsx";
import DolarVivo from "./components/DolarVivo.jsx";
import DolarDesglose from "./components/DolarDesglose.jsx";
import Encabezado from "./components/Encabezado.jsx";
import Transporte from "./components/Transporte.jsx";
import CanastaSalario from "./components/CanastaSalario.jsx";
import Alquiler from "./components/Alquiler.jsx";
import GastosCotidianos from "./components/GastosCotidianos.jsx";
import DolarNuevo from "./components/DolarNuevo.jsx";
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
          title={"CANASTA BASICA - SALARIO MINIMO"}
          description={
            "Hogar 4 integrantes: Matrimonio con 2 hijos. Nacional: INDEC - CABA: Estadisticas Ciudad"
          }
        />
        <CanastaSalario />
      </section>
      <section className="section">
        <Encabezado
          title={"DOLAR NUEVO - *EN DESARROLLO*"}
          description={
            "DolarAPI - Registro histórico y valores promedio del dolar y sus distintas cotizaciones"
          }
        />
        <DolarNuevo />
      </section>
      <section className="section bg-gray-800 text-white" id="dolar">
        <Encabezado title={"DOLAR"} />
        <div className="w-full h-2/3 flex">
          <div className="w-2/3">
            <Dolar />
          </div>
          <div className="w-2/3">
            <DolarDesglose />
          </div>
        </div>
        <div className="h-1/3 w-full bg-gray-700">
          <DolarVivo />
        </div>
      </section>
      <section className="section" id="transporte">
        <Encabezado title={"TRANSPORTE"} />
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

      {/* <section className="section" id="comparativa">
        <Encabezado title={"COMPARATIVA"} />
        <Comparativa />
      </section> */}
    </div>
  );
}
