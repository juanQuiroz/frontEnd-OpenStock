import React from "react";
import imgLogin from "../../assets/img/imgLogin.svg";
import { Link } from "react-router-dom";

const Login = props => {
  return (
    <div className="bg-blue-700">
      <div className="w-full h-20">
        <div className="flex justify-between items-center mx-5">
          <h1 className="flex-1 text-center text-5xl mt-6 font-light text-white">
            OPENSTOCK
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 h-full">
        <div className="col-span-2 h-full px-12">
          <form className="mx-12 mt-20 px-10 pt-6 pb-8 mb-32">
            <h1 className="font-thin text-5xl text-center p-6 text-white">
              Iniciar Sesión
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="usuario"
              >
                Usuario
              </label>
              <input
                className="bg-blue-700 placeholder-gray-200 appearance-none border-b-2 border-white  w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none"
                id="usuario"
                type="text"
                placeholder="Usuario"
                name="nombreUsuario"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="contraseña"
              >
                Contraseña
              </label>
              <input
                className=" bg-blue-700 placeholder-gray-200 appearance-none border-b-2 border-white  w-full py-2 px-3 text-gray-100 mb-3 leading-tight focus:outline-none "
                id="password"
                type="password"
                placeholder="******************"
                name="contraseña"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to="/productos" className="w-full">
                <button
                  className="shadow-md w-full h-12 bg-gray-100 hover:bg-gray-200 text-blue-700 text-md font-bold py-2 px-4  focus:outline-none focus:shadow-outline  "
                  type="submit"
                >
                  Iniciar Sesión
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="col-span-2">
          <img className="mx-24 my-6 mt-32" src={imgLogin} width="55%" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
