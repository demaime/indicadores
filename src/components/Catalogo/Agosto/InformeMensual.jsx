import React, { useState } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [<Slide1 key="1" />, <Slide2 key="2" />, <Slide3 key="3" />];

export default function InformeMensual() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="section w-full h-full flex flex-col items-center justify-evenly relative bg-red-700 ">
      <IoIosArrowBack
        onClick={handlePrev}
        size={35}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white z-50 p-2 rounded-full"
      ></IoIosArrowBack>
      <IoIosArrowForward
        onClick={handleNext}
        size={35}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white z-50 p-2 rounded-full"
      ></IoIosArrowForward>
      <div className="w-[90%] h-[5%] border-2 border-black rounded-xl flex items-center justify-center text-center font-semibold text-lg bg-gray-200">
        CÁMARA DE LA INDUSTRIA Y COMERCIO DE CARNES Y DERIVADOS DE LA REPÚBLICA
        ARGENTINA (CICCRA)&nbsp;
        <strong className="tracking-wider">- AGOSTO </strong>
      </div>
      <div className="w-[90%] h-[90%] border-2 border-black rounded-xl overflow-hidden bg-gray-100">
        <div
          className="flex transition-transform duration-300 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.key} className="w-full h-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
