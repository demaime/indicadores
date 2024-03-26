import React, { useState, useRef, useEffect } from "react";

function Comparativa() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const options1 = [
    { id: 1, label: "Opción 1" },
    { id: 2, label: "Opción 2" },
    { id: 3, label: "Opción 3" },
    // Agrega más opciones según sea necesario
  ];

  const options2 = [
    { id: 4, label: "Opción 4" },
    { id: 5, label: "Opción 5" },
    { id: 6, label: "Opción 6" },
    // Agrega más opciones según sea necesario
  ];

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionClick1 = (optionId) => {
    setSelectedOptions1([optionId]);
    setIsOpen1(false);
  };

  const handleOptionClick2 = (optionId) => {
    if (selectedOptions2.includes(optionId)) {
      setSelectedOptions2(selectedOptions2.filter((id) => id !== optionId));
    } else {
      setSelectedOptions2([...selectedOptions2, optionId]);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target) &&
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setIsOpen1(false);
        setIsOpen2(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="h-full w-full">
      <div className="w-full h-18 flex">
        <div
          ref={dropdownRef1}
          className="w-1/2 h-full bg-gray-300 text-gray-500 text-2xl pl-6"
          onClick={toggleDropdown1}
        >
          <button className="text-gray-800">
            {selectedOptions1.length > 0
              ? `Opción ${selectedOptions1[0]}`
              : "Seleccione opción"}
          </button>
          {isOpen1 && (
            <ul>
              {options1.map((option) => (
                <li key={option.id} className="border-b p-1 border-gray-700">
                  <label
                    htmlFor={option.id}
                    className="option-label"
                    onClick={() => handleOptionClick1(option.id)}
                  >
                    <input
                      type="radio"
                      id={option.id}
                      name="option1"
                      value={option.id}
                      checked={selectedOptions1.includes(option.id)}
                      onChange={() => {}}
                    />
                    <span className="checkmark"></span>
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          ref={dropdownRef2}
          className="dropdown w-1/2 h-full bg-blue-200 text-blue-500"
          onClick={toggleDropdown2}
        >
          <button className="dropdown-toggle">
            {selectedOptions2.length > 0
              ? selectedOptions2.length === 1
                ? `Opción ${selectedOptions2[0]}`
                : `Opción ${selectedOptions2[0]} + ${
                    selectedOptions2.length - 1
                  } más`
              : "Seleccione opciones"}
          </button>
          {isOpen2 && (
            <ul className="dropdown-menu">
              {options2.map((option) => (
                <li key={option.id}>
                  <label
                    htmlFor={option.id}
                    className="option-label"
                    onClick={() => handleOptionClick2(option.id)}
                  >
                    <input
                      type="checkbox"
                      id={option.id}
                      value={option.id}
                      checked={selectedOptions2.includes(option.id)}
                      onChange={() => {}}
                    />
                    <span className="checkmark"></span>
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comparativa;
