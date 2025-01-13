import expectativas from "./expectativas.jpg";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
const RADIAN = Math.PI / 180;

export default function Slide2() {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly bg-white text-white text-xl">
      <div className="w-full h-1/2 flex items-center justify-evenly p-2">
        <img className="w-90 h-60" src={expectativas} alt="" />
        <div className="w-1/2 h-full bg-blue-900 text-white rounded flex items-center justify-center p-4 shadow-md shadow-black">
          {" "}
          <div className="text-2xl text-center">
            El volumen fuerte de ventas ocurrió entre el viernes y sábado, donde
            se pudo ver más movimiento en los locales comerciales. Más allá de
            la comparación anual, fue una fecha con actividad moderada. Aun así,{" "}
            <span className="text-teal-400 font-semibold">
              7 de cada 10 negocios consultados señalaron que los resultados
              fueron igual o mejores de lo esperado,
            </span>
            ya que las expectativas eran muy mesuradas.
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 flex">
        <div className="w-2/3 h-full flex items-center justify-center">
          <div className="w-[90%] h-[90%] flex items-center justify-center bg-gray-200 p-4 text-2xl shadow-md shadow-black">
            <div className="rounded text-black text-center">
              En las semanas previas, los comerciantes de 246 locales del país
              fueron relevados acerca de las espectativas para este día de la
              Madre. Al consultarles si consideraban que este evento impulsaría
              sus ventas mensuales, resultó que un{" "}
              <span className="font-semibold text-green-500">
                23.3% consideró que estaba totalmente de acuerdo
              </span>
              , un
              <span className="font-semibold text-yellow-500">
                &nbsp;53% estaba parcialmente de acuerdo
              </span>
              , mientras que{" "}
              <span className="font-semibold text-orange-500">
                23.7% estaba en desacuerdo
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full flex items-center justify-center">
          <PieChart
            width={200}
            height={200}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Pie
              data={[
                { name: "Parcialmente de acuerdo", value: 53 },
                { name: "Totalmente de acuerdo", value: 23.3 },
                { name: "En desacuerdo", value: 23.7 },
              ]}
              cx={100}
              cy={100}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              <Cell fill="#ffc658" />
              <Cell fill="#82ca9d" />
              <Cell fill="#ff8042" />
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
