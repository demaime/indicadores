import InflacionDesglose from "./components/InflacionDesglose.jsx";

import Banner from "./components/Banner.jsx";
import Dolar from "./components/Dolar.jsx";
import DolarVivo from "./components/DolarVivo.jsx";
import DolarDesglose from "./components/DolarDesglose.jsx";

export default function App() {
  return (
    <div className="full-container">
      <Banner />
      <section className="section" id="inflacion">
        <h1 className="font-bold py-1 bg-gray-700 text-white text-2xl w-full text-center">
          INFLACION
        </h1>
        <InflacionDesglose />
      </section>
      <section className="section h-96 bg-gray-800 text-white" id="dolar">
        <h1 className="font-bold py-1 bg-gray-700 text-white text-2xl w-full text-center">
          DOLAR
        </h1>
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
    </div>
  );
}
