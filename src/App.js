import InflacionDesglose from "./components/InflacionDesglose.jsx";
import Portada from "./components/Portada.jsx";
import Dolar from "./components/Dolar.jsx";
import DolarVivo from "./components/DolarVivo.jsx";
import DolarDesglose from "./components/DolarDesglose.jsx";
import Encabezado from "./components/Encabezado.jsx";
import Transporte from "./components/Transporte.jsx";
import CanastaSalario from "./components/CanastaSalario.jsx";
import Servicios from "./components/Servicios.jsx";
import Alquiler from "./components/Alquiler.jsx";
// import Comparativa from "./components/Comparativa-DESARROLLO.jsx";

export default function App() {
  return (
    <div className="full-container">
      <Portada />
      <section className="section" id="inflacion">
        <Encabezado content={"INFLACION"} />
        <InflacionDesglose />
      </section>
      <section className="section" id="canasta-salario">
        <Encabezado content={"CANASTA BASICA - SALARIO MINIMO"} />
        <CanastaSalario />
      </section>
      <section className="section bg-gray-800 text-white" id="dolar">
        <Encabezado content={"DOLAR"} />
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
        <Encabezado content={"TRANSPORTE"} />
        <Transporte />
      </section>

      <section className="section" id="servicios">
        <Encabezado content={"SERVICIOS"} />
        <Servicios />
      </section>

      {/* <section className="section" id="comparativa">
        <Encabezado content={"COMPARATIVA"} />
        <Comparativa />
      </section> */}
      <section className="section" id="alquiler">
        <Encabezado content={"ALQUILER"} />
        <Alquiler />
      </section>
    </div>
  );
}
