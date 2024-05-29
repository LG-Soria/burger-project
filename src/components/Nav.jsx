import React from "react";
import logo from "./../assets/img/Hamburguesa_Logo.svg";
import search from "./../assets/img/Search.svg";
import menu from "./../assets/img/Menu.svg";
import cart from "./../assets/img/Cart.svg";

export default function Nav() {
  return (
    <div id="navbar" 
     className="bg-transparent text-[#5D544D] flex flex-row h-14  pt-6 justify-between" >
      <div className="my-auto left-28 flex flex-row gap-4 items-center  relative ">
        <img src={logo} alt="" className="w-10" />
        <p className="font-extrabold text-3xl ">ZoomBite</p>
      </div>

      <ul className="flex flex-row  list-none gap-20  pl-16  my-auto font-medium">
        <li>
          <button>Inicio</button>
        </li>
        <li>
          <button>Menu</button>
        </li>
        <li>
          <button>Servicios</button>
        </li>
        <li>
          <button>Contacto</button>
        </li>
      </ul>

      <div className="my-auto mx-10 " id="busqueda">
        <ul className="flex flex-row gap-20  ">
          <li>
            <img src={search} alt=""  className="w-7"/>
          </li>{" "}
          <li>
            <img src={menu} alt="" className="w-7" />
          </li>{" "}
          <li>
            <img src={cart} alt="" className="w-7" />
          </li>
        </ul>
      </div>
    </div>
  );
}
