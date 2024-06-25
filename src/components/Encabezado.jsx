import React, { useState, useEffect, useRef } from "react";
import { GoMultiSelect } from "react-icons/go";
import { LuHome } from "react-icons/lu";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

export default function Encabezado({ title, description }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="font-bold py-1 bg-gray-700 text-white text-2xl w-full flex items-center justify-between px-4">
        <a href="#home">
          <LuHome className="hover:scale-125 cursor-pointer transition-all" />
        </a>
        {title}
        <div className="relative" ref={menuRef}>
          <GoMultiSelect
            onClick={toggleMenu}
            className="hover:scale-125 cursor-pointer transition-all"
          />
          {menuVisible && (
            <div className="absolute top-2 right-0 rounded-xl w-80 shadow-md z-50">
              <ul className="h-96 w-full flex flex-col justify-evenly bg-gray-300 text-gray-900 rounded">
                <a href="#inflacion">
                  <li className="hover:bg-blue-900 hover:text-gray-200 text-sm p-2 flex items-center flex items-center    ">
                    <IoArrowRedoCircleOutline className="mr-4" />
                    INFLACION
                  </li>
                </a>
                <a href="#canasta-salario">
                  <li className="hover:bg-blue-900 hover:text-gray-200 text-sm p-2 flex items-center  ">
                    <IoArrowRedoCircleOutline className="mr-4" />
                    SALARIO - CANASTA - JUBILACION
                  </li>
                </a>
                <a href="#dolar">
                  <li className="hover:bg-blue-900 hover:text-gray-200 text-sm p-2 flex items-center  ">
                    <IoArrowRedoCircleOutline className="mr-4" />
                    DOLAR
                  </li>
                </a>
                <a href="#transporte">
                  <li className="hover:bg-blue-900 hover:text-gray-200 text-sm p-2 flex items-center  ">
                    <IoArrowRedoCircleOutline className="mr-4" />
                    TRANSPORTE
                  </li>
                </a>
                <a href="#alquiler">
                  <li className="hover:bg-blue-900 hover:text-gray-200 text-sm p-2 flex items-center  ">
                    <IoArrowRedoCircleOutline className="mr-4" />
                    ALQUILER
                  </li>
                </a>
                <a href="#cotidianos">
                  <li className="hover:bg-blue-900 hover:text-gray-200 text-sm p-2 flex items-center  ">
                    <IoArrowRedoCircleOutline className="mr-4" />
                    GASTOS COTIDIANOS
                  </li>
                </a>

                <a href="#ocio">
                  <li className="hover:bg-blue-900 hover:text-gray-200 text-sm p-2 flex items-center  ">
                    <IoArrowRedoCircleOutline className="mr-4" />
                    OCIO
                  </li>
                </a>

                <a href="#industrial">
                  <li className="hover:bg-blue-900 hover:text-gray-200 text-sm p-2 flex items-center  ">
                    <IoArrowRedoCircleOutline className="mr-4" />
                    INDUSTRIA
                  </li>
                </a>

                <a href="#actividadeconomica">
                  <li className="hover:bg-blue-900 hover:text-gray-200 text-sm p-2 flex items-center  ">
                    <IoArrowRedoCircleOutline className="mr-4" />
                    ACTIVIDAD ECONOMICA
                  </li>
                </a>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="h-4 bg-gray-200 text-black font-semibold text-xs w-full flex items-center justify-center italic">
        {description}
      </div>
    </>
  );
}
