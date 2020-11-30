import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap shadow fondo-nav px-6 h-16 border-b-2 border-blue-700">
      <div className="flex items-center flex-shrink-0 text-black mr-6 ">
        <div className="ml-2 flex flex-col">
          <Link to="/productos">
            {" "}
            <span className="font-bold text-lg tracking-tight text-blue-800">
              OPENSTOCK
            </span>
          </Link>
        </div>
      </div>
      <div className="flex h-full">
        <Link
          to="/productos"
          className="hover:bg-gray-600 hover:shadow-md hover:text-white text-gray-800 font-bold ml-2 py-2 pl-4 mr-2 pr-4 h-full inline-flex"
        >
          <span className="font-hairline text-xl mt-2">Productos</span>
        </Link>
        <Link
          to="/movimientos"
          className="hover:bg-gray-600 hover:shadow-md hover:text-white text-gray-800 font-bold ml-2 py-2 pl-4 mr-2 pr-4 h-full inline-flex"
        >
          <span className="font-hairline text-xl mt-2">Movimientos</span>
        </Link>
        <Link
          to="/kardex"
          className="hover:bg-gray-600 hover:shadow-md hover:text-white text-gray-800 font-bold ml-2 py-2 pl-4 mr-2 pr-4 h-full inline-flex"
        >
          <span className="font-hairline text-xl mt-2">Kardex</span>
        </Link>
      </div>
      <div className="flex">
        <Link
          type="button"
          to="/nosotros"
          className="bg-blue-800 shadow-md text-white font-bold ml-2 py-1 pl-4 mr-2 pr-4  rounded inline-flex items-center"
        >
          <button className="font-hairline text-xl">Nosotros</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
