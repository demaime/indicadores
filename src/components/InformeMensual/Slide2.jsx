import categoriasImage from "./categorias.jpg";
import calorImage from "./calor1.jpg";

export default function Slide2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white text-white text-xl">
      <div className="w-full h-1/2 flex items-center justify-evenly relative">
        {" "}
        <img className="w-[60%] h-5/6" src={categoriasImage} alt="" />
        <div className="w-[35%] h-full flex items-center justify-center">
          <div className="w-full h-[90%] rounded bg-[#044c7e]"></div>
        </div>
      </div>
      <div className="w-full h-1/2 flex items-center justify-center">
        <img className="h-[90%]" src={calorImage} alt="" />
      </div>
    </div>
  );
}
