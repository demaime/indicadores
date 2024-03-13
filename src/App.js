import InflacionDesglose from "./components/InflacionDesglose.jsx";

import Banner from "./components/Banner.jsx";
import Dolar from "./components/Dolar.jsx";
import DolarDesglose from "./components/DolarDesglose.jsx";

export default function App() {
  return (
    <div className="w-full h-full">
      <Banner />
      <h1 className="font-bold py-1 bg-gray-700 text-white text-2xl w-full text-center">
        INFLACION
      </h1>
      <InflacionDesglose />

      <h1 className="font-bold py-1 bg-gray-700 text-white text-2xl w-full text-center">
        DOLAR
      </h1>
      <section className="w-full h-96 bg-gray-800 flex items-center text-white">
        <div className="w-2/3 h-full">
          <Dolar />
        </div>
        <div className="w-1/3 h-full">
          <DolarDesglose />
        </div>
      </section>
    </div>
  );
}
