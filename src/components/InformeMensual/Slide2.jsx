import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

export default function Slide2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly bg-white text-white text-xl">
      <div className="w-full h-1/2 flex">
        <div className="w-1/2 h-full flex items-end justify-center">
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={[
                { name: "Mucho mejor", value: 8.2 },
                { name: "Mejor", value: 39.7 },
                { name: "Igual", value: 37 },
                { name: "Peor", value: 14.7 },
                { name: "Mucho peor", value: 0.4 },
              ]}
              margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
            >
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />

              <Bar dataKey="value" fill="#159e39">
                <LabelList
                  dataKey="value"
                  position="top"
                  formatter={(value) => `${value}%`}
                  style={{ fontSize: "12px" }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded bg-red-700 flex flex-col items-center justify-evenly text-[14px]">
            {" "}
            <p className="px-8 text-justify text-gray-100">
              La Navidad 2024 fue abundante en ofertas, donde el{" "}
              <strong className="text-green-500">86,2%</strong> de los comercios
              consultados realizó alguna promoción. Por otro lado, mostró a un
              consumidor más tranquilo frente a la estabilidad de precios, pero
              con sus ingresos limitados por una economía que aún está en
              proceso de recuperación.
            </p>
            <p className="px-8 text-justify text-gray-100">
              Para el <strong className="text-green-500">47,9%</strong> de los
              comerciantes, las ventas fueron mejor o mucho mejor de lo
              esperado, mientras que el{" "}
              <strong className="text-green-500">15,1% </strong>
              señaló que fueron peor o mucho peor, y el{" "}
              <strong className="text-green-500">37% </strong>
              opinó que fueron iguales a lo esperado.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4/5 h-[90%] bg-gray-200 rounded flex">
            <div className="w-2/3 h-full bg-green-500 text-red-700 font-semibold p-4 rounded text-center flex flex-col items-center justify-evenly font-semibold text-lg">
              <p>
                El balance no fue bueno si se tiene en cuenta que se compara con
                una navidad muy austera, como fue la de 2023. Pero encontró a un
                comercio más prolijo financieramente, y junto con las ofertas en
                efectivo y las cuotas sin interés, morigeraron el impacto del
                resultado.
              </p>
              <p>
                Respecto a la afirmación de que "la Navidad impulsará sus ventas
                mensuales", el 95,3% de los comerciantes indicó estar total o
                parcialmente de acuerdo, mientras que solo el 4,7% expresó su
                desacuerdo.
              </p>
            </div>
            <div className="w-1/3 h-full flex flex-col items-center justify-evenly relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      {
                        name: "Totalmente de acuerdo",
                        value: 47,
                        fill: "#991b1b",
                      },
                      {
                        name: "Parcialmente de acuerdo",
                        value: 48.3,
                        fill: "#dc2626",
                      },
                      {
                        name: "En desacuerdo",
                        value: 4.7,
                        fill: "#f87171",
                      },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={120}
                    dataKey="value"
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      value,
                    }) => {
                      const RADIAN = Math.PI / 180;
                      const radius =
                        innerRadius + (outerRadius - innerRadius) * 0.5;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);
                      return (
                        <text
                          x={x}
                          y={y}
                          fill="#fff"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="12"
                        >
                          {`${value}%`}
                        </text>
                      );
                    }}
                    labelLine={false}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-2 text-black text-sm absolute bottom-4 -right-32 rounded bg-gray-200 p-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#991b1b]"></div>
                  <span>Totalmente de acuerdo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#dc2626]"></div>
                  <span>Parcialmente de acuerdo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f87171]"></div>

                  <span>En desacuerdo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
