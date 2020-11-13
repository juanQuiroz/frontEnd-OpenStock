import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap shadow fondo-nav px-6 h-16 border-b-2 border-blue-600">
      <div className="flex items-center flex-shrink-0 text-black mr-6 ">
        <div className="ml-2 flex flex-col">
          <span className="font-semibold text-lg tracking-tight text-blue-800">
            OPENSTOCK
          </span>
        </div>
      </div>
      <div className="flex h-full">
        <Link
          to="/principal"
          className="hover:bg-gray-400 hover:shadow-md hover:text-black text-gray-800 font-bold ml-2 py-2 pl-4 mr-2 pr-4 h-full inline-flex"
        >
          <span className="font-hairline text-xl mt-2">Productos</span>
        </Link>
        <Link
          to="/principal"
          className="hover:bg-gray-400 hover:shadow-md hover:text-black text-gray-800 font-bold ml-2 py-2 pl-4 mr-2 pr-4 h-full inline-flex"
        >
          <span className="font-hairline text-xl mt-2">Movimientos</span>
        </Link>
        <Link
          to="/principal"
          className="hover:bg-gray-400 hover:shadow-md hover:text-black text-gray-800 font-bold ml-2 py-2 pl-4 mr-2 pr-4 h-full inline-flex"
        >
          <span className="font-hairline text-xl mt-2">Kardex</span>
        </Link>
      </div>
      <div className="flex">
        <Link
          type="button"
          to="/"
          className="bg-blue-800 shadow-md text-white font-bold ml-2 py-1 pl-4 mr-2 pr-4  rounded inline-flex items-center"
        >
          <button className="font-hairline text-xl">Nosotros</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
