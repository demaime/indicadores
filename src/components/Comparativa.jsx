import React, { useState, useRef, useEffect } from "react";
import data from "../fulldata.js";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Comparativa() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const [chartData1, setChartData1] = useState([]);
  const [chartData2, setChartData2] = useState([]);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionClick1 = (optionName) => {
    setSelectedOption1(optionName);
    setIsOpen1(false);
  };

  const handleOptionClick2 = (optionName) => {
    setSelectedOption2(optionName);
    setIsOpen2(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (selectedOption1) {
      setChartData1(data[selectedOption1]);
    }
  }, [selectedOption1]);

  useEffect(() => {
    if (selectedOption2) {
      setChartData2(data[selectedOption2]);
    }
  }, [selectedOption2]);

  const handleOutsideClick = (event) => {
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setIsOpen1(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsOpen2(false);
    }
  };

  return (
    <div className="h-full w-full relative">
      <div className="w-full h-18 flex relative z-10">
        <div
          ref={dropdownRef1}
          className={`w-1/2 h-full border-r border-gray-600 bg-gray-300 text-gray-500 text-xl pl-6 relative ${
            isOpen1 ? "z-20" : ""
          }`}
          onClick={toggleDropdown1}
        >
          <button className="font-semibold p-2">
            {selectedOption1 ? selectedOption1 : "Seleccione opción"}
          </button>

          {isOpen1 && (
            <ul className="absolute left-0 w-full bg-gray-300 border border-gray-300 shadow">
              {Object.keys(data).map((key, index) => (
                <li key={index} className="border-b p-1 border-gray-700">
                  <label
                    htmlFor={index}
                    className="option-label hover:bg-gray-400 block cursor-pointer flex items-center"
                    onClick={() => handleOptionClick1(key)}
                  >
                    <input
                      type="radio"
                      id={index}
                      name="option1"
                      value={key}
                      checked={selectedOption1 === key}
                      onChange={() => {}}
                      className="mr-2 h-5 w-5"
                    />
                    <span className="checkmark"></span>
                    {key}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          ref={dropdownRef2}
          className={`w-1/2 h-full bg-gray-600 text-gray-200 text-xl pl-6 relative ${
            isOpen2 ? "z-20" : ""
          }`}
          onClick={toggleDropdown2}
        >
          <button className="font-semibold p-2">
            {selectedOption2 ? selectedOption2 : "Seleccione opción"}
          </button>

          {isOpen2 && (
            <ul className="absolute  left-0 w-full bg-gray-600 border-gray-400 shadow">
              {Object.keys(data).map((key, index) => (
                <li
                  key={index}
                  className="border-b p-1 border-gray-200 bg-gray-600"
                >
                  <label
                    htmlFor={index}
                    className="option-label hover:bg-gray-400 block cursor-pointer flex items-center"
                    onClick={() => handleOptionClick2(key)}
                  >
                    <input
                      type="radio"
                      id={index}
                      name="option2"
                      value={key}
                      checked={selectedOption2 === key}
                      onChange={() => {}}
                      className="mr-2 h-5 w-5"
                    />
                    <span className="checkmark"></span>
                    {key}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="w-full h-[92%] flex justify-center relative z-0">
        <div className="w-1/2 h-full flex items-center justify-center border-r border-gray-600">
          <ResponsiveContainer width="95%" height="100%">
            <LineChart
              className="p-2 font-bold text-white"
              data={chartData1}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              style={{ color: "white" }}
            >
              <XAxis dataKey="mes" />
              <YAxis domain={[500, "dataMax"]} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              -r
              <Legend verticalAlign="bottom" height={36} />
              <Line
                type="monotone"
                dataKey="valor"
                stroke="#facc15"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <ResponsiveContainer width="95%" height="100%">
            <LineChart
              className="p-2 font-bold text-white"
              data={chartData2}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              style={{ color: "white" }}
            >
              <XAxis dataKey="mes" />
              <YAxis domain={[500, "dataMax"]} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
              <Line
                type="monotone"
                dataKey="valor"
                stroke="#f57b6dff"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Comparativa;
