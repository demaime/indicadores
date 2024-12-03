import categoriasImage from "./categorias.jpg";
import calorImage from "./calor1.jpg";

export default function Slide2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white text-white text-xl">
      <div className="w-full h-1/2 flex items-center justify-evenly relative">
        {" "}
        <img className="w-[60%] h-5/6" src={categoriasImage} alt="" />
        <div className="w-[35%] h-full flex items-center justify-center">
          <div className="w-full h-[90%] rounded bg-[#044c7e] relative shadow shadow-black">
            <div className="w-full h-full rounded bg-blue-300 absolute top-2 -right-2 shadow shadow-black"></div>
            <div className="w-full h-full rounded bg-[#044c7e] absolute top-4 -right-4 text-blue-200 flex items-center justify-center text-center p-2 font-semibold shadow shadow-black">
              Los distintos rubros que componen la industria metalúrgica han
              registrado, en su mayoría, variaciones interanuales negativas
              durante el mes de septiembre. Sin embargo, los dos sectores que
              más perjudicados resultaron por la sequía del año previo han
              verificado aumentos en su producción con respecto a septiembre del
              2023: Maquinaria agrícola y Carrocerías y remolques.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 flex items-center justify-center">
        <img className="h-[90%]" src={calorImage} alt="" />
      </div>
    </div>
  );
}
