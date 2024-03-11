import InflacionDesglose from "./components/InflacionDesglose.jsx";

import Banner from "./components/Banner.jsx";
import Dolar from "./components/Dolar.jsx";

export default function App() {
  return (
    <div className="w-full h-full">
      <Banner />
      <InflacionDesglose />

      <section className="w-full h-96 bg-gray-800 flex items-center">
        <Dolar />
      </section>
    </div>
  );
}
