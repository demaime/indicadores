import InflacionDesglose from "./components/InflacionDesglose.jsx";

import Banner from "./components/Banner.jsx";
import Dolar from "./components/Dolar.jsx";
import DolarVivo from "./components/DolarVivo.jsx";
import DolarDesglose from "./components/DolarDesglose.jsx";
import Encabezado from "./components/Encabezado.jsx";

export default function App() {
  return (
    <div className="full-container">
      <Banner />
      <section className="section" id="inflacion">
        <Encabezado content={"INFLACION"} />
        <InflacionDesglose />
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
        <div className="h-full w-full">TRANSPORTE</div>
      </section>
    </div>
  );
}
