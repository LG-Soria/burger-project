import React, { useState, useEffect } from "react";
import image2 from "./../assets/img/burger-centro.png";
import image1 from "./../assets/img/burguerLeft.png";
import image3 from "./../assets/img/burguerRight.png";
import pedidosYa from "./../assets/img/pedidosYa.png";
import rappi from "./../assets/img/rappi.png";
import uberEats from "./../assets/img/uberEats.png";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";


export default function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: image1, title: "Hamburguesa Triple Cheddar" },
    { id: 2, image: image2, title: "Hamburguesa Suprema", },
    { id: 3, image: image2, title: "Hamburguesa BigTastty" },

  ];

  const slidesWithClones = [...slides, ...slides,];


  const nextSlide = () => {
    setCurrentSlide((prev) => {
      // Si prev + 1 es igual a la longitud total, volver al inicio
      if (prev + 1 >= slidesWithClones.length) {
        return prev - 1 ;
      } else {
        return prev + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      // Si prev + 1 es igual a la longitud total, volver al inicio
      if (prev - 1 < 0) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  };


  return (
    <div className="main">
      <div className="h-[720px]  mt-2 bg-transparent flex flex-row  gap-10  circle1   ">

        <div className="ml-24 ohidden ">
          <div className="mainUno flex flex-col gap-16 w-[45rem]  relative top-12">
            <h1 className="text-5xl  mt-12 w-[42rem] text-[#EA804C] font-extrabold title">
              Tu Destino para Comida Rápida y Deliciosa
            </h1>

            <p className="leading-9 text-xl font-medium">
              Experiencia única de comida rápida. Nuestras variedades
              excepcionales te sorprenderán en cada mordisco. Descubre un nuevo
              nivel de sabor y rapidez en cada visita
            </p>

            <button id="orden" className="w-[15rem]  h-[2.4rem] text-xl title font-medium text-[#fff3cb] rounded-full bg-[#EA804C] transition-all duration-200 hover:scale-95 hover:text-black">
              Ordenar acá {">"}
            </button>
          </div>
          <div id="contacto" className="mt-20 circle2 circle3">
            <h3 className="text-[#EA804C] font-bold title text-2xl">
              También podes encontrarnos en:
            </h3>
            <ul className="flex flex-row gap-20 w-[25rem] ml-2 mt-[2rem]">
              <li className="flex justify-center items-center">
                <img src={rappi} alt="rappiLogo" className="w-[16rem]" />
              </li>
              <li className="flex justify-center items-center">
                <img src={pedidosYa} alt="pedidosYa" className="w-52" />
              </li>
              <li className="flex justify-center items-center">
                <img src={uberEats} alt="uberEats" className="w-[20rem]" />
              </li>
            </ul>
          </div>
        </div>


        <div
          id="menu"
          className="w-[48rem] bg-[#FACF7D] h-[35rem] rounded-3xl 
        mt-[3.5rem] p-10 flex flex-col  justify-between z-50  "
        >
          {/**cabecera */}
      
          <div className="flex flex-row">
       
          <h4 className="text-[#834527] text-4xl  w-[18rem] absolute title font-extrabold">
                {slidesWithClones[currentSlide].title} 
              </h4>
            {/**butons */}
            <div className="left-[35rem] relative">
              <div className="flex flex-row gap-2 relative ">
                <CiCircleChevLeft className="w-14 h-14 mt-3 text-[#EA804C] cursor-pointer hover:scale-105 hover:text-white  transition-all duration-300" onClick={prevSlide} />
                <CiCircleChevRight className="w-14 h-14 mt-3 text-[#EA804C] cursor-pointer hover:scale-105 hover:text-white  transition-all duration-300" onClick={nextSlide} />
              </div>
            </div>

          </div>

          <div>
            <div className="relative overflow-hidden">
              <ul className="flex transition-transform duration-300 w-[80rem] h-[25rem] gap-x-2 " >
                {slidesWithClones.map((slide, index) => {


                  return (
                    <li key={index}
                    className={` relative right-[-14rem] w-[22rem] h-[22rem]  justify-center items-center flex transition-transform  duration-300 ${index === currentSlide - 1 ? `` : ``}`} 
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                      <img 
                      onClick={()=> setCurrentSlide(index)}
                      className={`w-[18rem] h-[10rem] cursor-pointer  p-0 transition-transform duration-300 ${index === currentSlide ? ` scale-100  ` : `scale-75`}`} 
                      src={slide.image} alt={`Slide ${slide.id}`} />
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="relative bottom-10">
              <ul className="flex flex-row justify-center mx-auto">

                {slidesWithClones.map((slide, index) => {
                  return(<li key={index}> <div onClick={()=> setCurrentSlide(index)} id={slide.id} className={`cursor-pointer h-3 rounded-full mx-2 transition-all duration-300 ${index === currentSlide ? " bg-[#EA804C] scale-125 w-5" : " bg-[#fff3cb] w-3"}`}></div></li>)
                })}
          
              </ul>
            </div>
          </div>
          <button className="w-[13rem] h-[2.6rem] mx-[16rem] text-[1rem] p-1 title 
          font-extralight text-[#fff3cb] rounded-full bg-[#EA804C] relative bottom-5">
            Explorá el menú
          </button>
        </div>
      </div>
    </div>
  );
}
