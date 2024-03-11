import InflacionDesglose from "./components/InflacionDesglose.jsx";

import Banner from "./components/Banner.jsx";
import Dolar from "./components/Dolar.jsx";

export default function App() {
  return (
    <div className="w-full h-full">
      <Banner />
      <InflacionDesglose />

      <section className="w-full h-96 bg-gray-800 flex items-center text-white">
        <div className="w-2/3 h-full">
          <Dolar />
        </div>
        <div>ACA LE MANDO UNOS DATOS</div>
      </section>
    </div>
  );
}
