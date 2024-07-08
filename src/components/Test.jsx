import React, { useEffect, useState } from "react";
import Papa from "papaparse";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://infra.datos.gob.ar/catalog/sspm/dataset/41/distribution/41.3/download/indicadores-produccion-industria-manufacturera-valores-anuales.csv"
    )
      .then((response) => response.text())
      .then((text) => {
        const results = Papa.parse(text, { header: true });
        setData(results.data);
      });
  }, []);

  console.log(data);

  return (
    <div className="w-full h-full">
      <h1>CSV Data</h1>
      {/* <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
