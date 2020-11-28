import React, { Fragment } from "react";
import imgLogin from "../../assets/img/imgLogin.svg";

const Login = props => {
  return (
    <Fragment className="bg-blue-600">
      <div className="w-full h-20">
        <div className="flex justify-between items-center mx-5">
          <h1 className="flex-1 text-center text-4xl mt-6 font-light text-blue-700">
            OPENSTOCK
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 h-full">
        <div className="col-span-2">
          <form className="bg-white shadow-lg mx-12 mt-20 px-10 pt-6 pb-8 mb-4">
            <h1 className="font-semibold text-5xl text-center p-6 text-blue-600">
              Iniciar Sesión
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="usuario"
              >
                Usuario
              </label>
              <input
                className=" appearance-none border-b-2 border-blue-700  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="usuario"
                type="text"
                placeholder="Usuario"
                name="nombreUsuario"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contraseña"
              >
                Contraseña
              </label>
              <input
                className="  appearance-none border-b-2 border-blue-700  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                id="password"
                type="password"
                placeholder="******************"
                name="contraseña"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="shadow-md w-full h-12 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline  "
                type="submit"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-3">
          <img className="mx-24 my-6 mt-20" src={imgLogin} width="80%" alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
