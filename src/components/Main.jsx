import React from "react";
import burgerCentro from "./../assets/img/burger-centro.png";
import burgerLeft from "./../assets/img/burguerLeft.png";
import burgerRight from "./../assets/img/burguerRight.png";
import pedidosYa from "./../assets/img/pedidosYa.png";
import rappi from "./../assets/img/rappi.png";
import uberEats from "./../assets/img/uberEats.png";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

export default function Main() {
  return (
    <div className="main">
      <div className="h-[720px]  mt-2 bg-transparent flex flex-row  gap-10  circle1   ">
       
        <div className="ml-24 ohidden ">
          <div className="mainUno flex flex-col gap-16 w-[45rem]  ">
            <h1 className="text-5xl  mt-12 w-[42rem] text-[#EA804C] font-extrabold title">
              Tu Destino para Comida Rápida y Deliciosa
            </h1>

            <p className="leading-9 text-xl font-medium">
              Experiencia única de comida rápida. Nuestras variedades
              excepcionales te sorprenderán en cada mordisco. Descubre un nuevo
              nivel de sabor y rapidez en cada visita
            </p>

            <button className="w-[13rem] h-[2.4rem] text-xl title font-medium text-[#fff3cb] rounded-full bg-[#EA804C]">
              Ordenar acá {">"}
            </button>
          </div>
          <div className="mt-20 circle2 circle3">
            <h3 className="text-[#EA804C] font-bold title text-2xl">
              También podes encontrarnos en:
            </h3>
            <ul className="flex flex-row gap-20 w-[25rem] ml-2 mt-[2rem]">
              <li  className="flex justify-center items-center">
                <img src={rappi} alt="rappiLogo" className="w-[16rem]" />
              </li>
              <li  className="flex justify-center items-center">
                <img src={pedidosYa} alt="pedidosYa"  className="w-52"/>
              </li>
              <li className="flex justify-center items-center">
                <img src={uberEats} alt="uberEats" className="w-[20rem]" />
              </li>
            </ul>
          </div>
        </div>


        <div
          className="w-[48rem] bg-[#FACF7D] h-[35rem] rounded-3xl 
        mt-[3.5rem] p-10 flex flex-col  justify-between z-50  "
        >
          <div className="flex flex-row">
            <h4 className="text-[#EA804C] text-4xl w-[10rem]  title font-extrabold">
              Hamburguesa Suprema
            </h4>
            <div className="left-[24rem] relative ">
              <div className="flex flex-row gap-2 relative ">
                <CiCircleChevLeft className="w-14 h-14 mt-3 text-[#EA804C] " />
                <CiCircleChevRight className="w-14 h-14 mt-3 text-[#EA804C] " />
              </div>
            </div>
          </div>
          <div>
            <ul className="flex flex-row  pt-24 ">
              <li>
                <img
                  src={burgerRight}
                  alt="burguer-one"
                  className="w-[75rem]"
                />{" "}
              </li>
              <li className="bottom-20 relative">
                <img
                  src={burgerLeft}
                  alt="burguer-left"
                  className="w-[108rem] relative  "
                />
              </li>
              <li>
                <img
                  src={burgerRight}
                  alt="burguer-right"
                  className="w-[75rem]"
                />{" "}
              </li>
            </ul>
            <div className="flex justify-center">
              <ul className="flex flex-row  mx-auto ">
                <li>
                  <div className="w-3 h-3 rounded-full mx-2 bg-[#fff3cb]"></div>
                </li>
                <li className="flex flex-row">
                  <div className="w-7 h-3 rounded-full  mx-2 bg-[#EA804C]"></div>
                </li>
                <li>
                  <div className="w-3 h-3 rounded-full mx-2 bg-[#fff3cb]"></div>
                </li>
                <li>
                  <div className="w-3 h-3 rounded-full mx-2 bg-[#fff3cb]"></div>
                </li>
              </ul>
            </div>
          </div>
          <button className="w-[13rem] h-[2.6rem] mx-[16rem] text-[1.2rem] title 
          font-extralight text-[#fff3cb] rounded-full bg-[#EA804C] mt-10">
            Explorá el menú
          </button>
        </div>
      </div>
    </div>
  );
}
