import React from "react";
import logo from "./../assets/img/Hamburguesa_Logo.svg";
import search from "./../assets/img/Search.svg";
import menu from "./../assets/img/Menu.svg";
import cart from "./../assets/img/Cart.svg";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
export default function Nav() {
  return (
    <div id="navbar" 
     className="bg-transparent text-[#5D544D] flex flex-row h-14  pt-6 justify-between" >
      <div className="my-auto left-28 flex flex-row gap-4 items-center  relative cursor-default ">
        <img src={logo} alt="" className="w-10" />
        <p className="font-extrabold text-3xl ">ZoomBite</p>
      </div>

      <ul className="flex flex-row  list-none gap-20  pl-16  my-auto font-medium">
        <li className="hover:scale-105 hover:font-semibold transform-all duration-300  hover:text-black">
          <button className="uppercase">Inicio</button>
        </li>
        <li className="hover:scale-105 hover:font-semibold transform-all duration-300  hover:text-black">
         <button className="uppercase">Menu</button>
        </li>
       <li className="hover:scale-105 hover:font-semibold transform-all duration-300  hover:text-black">
           <button className="uppercase">Servicios</button>
        </li>
        <li className="hover:scale-105 hover:font-semibold transform-all duration-300  hover:text-black">
          <button className="uppercase">Contacto</button>
        </li>
      </ul>

      <div className="my-auto mx-10 " id="busqueda">
        <ul className="flex flex-row gap-20 items-center ">
          <li>
          <FaSearch className="w-7 h-5 cursor-pointer transition-all duration-300 hover:text-black hover:scale-105"/>
          </li>{" "}
          <li>
          <FaUserAlt  className="w-7 h-5 cursor-pointer transition-all duration-300 hover:text-black hover:scale-105" />
          </li>{" "}
          <li>
          <FaShoppingCart  className="w-7 h-5 cursor-pointer transition-all duration-300 hover:text-black hover:scale-105" />
          </li>
        </ul>
      </div>
    </div>
  );
}
