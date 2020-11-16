import React, { Fragment } from "react";

const Movimientos = () => {
  return (
    <Fragment>
      <div>
        <div className="border-2 border-blue-700  rounded  mx-10 mt-10 px-6 pt-3 pb-8 mb-8">
          <form className="">
            <h1 className="font-base text-2xl text-center mb-4 text-gray-700">
              Registro de Movimientos
            </h1>
            <div className="grid grid-cols-3 gap-0">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Nombre de producto
                </label>
                <input
                  className="rounded-none appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>

              <button
                className="rounded-none w-24 bg-blue-800 hover:bg-blue-900 text-white font-bold py-1  mt-6 px-2 focus:outline-none focus:shadow-outline mx-0"
                type="submit"
              >
                Buscar
              </button>
              <button
                className="rounded-none w-auto bg-blue-700 hover:bg-blue-800 text-white font-bold py-1  mt-6  focus:outline-none focus:shadow-outline "
                type="submit"
              >
                Nuevo producto
              </button>
            </div>
          </form>
          <div className="mt-2 grid grid-cols-5 gap-2">
            <div className="p-2 border-2 border-gray-600 col-span-2">
              <h3 className="font-bold">Datos del producto</h3>
              <h4>Nombre:</h4>
              <h4>Descripción:</h4>
              <h4>Fecha:</h4>
              <h4>Hora:</h4>
              <h4>Categoria:</h4>
            </div>
            <div className="p-2 border-2 border-gray-600 col-span-3">
              <form className="grid grid-cols-3 gap-2">
                <div className="flex col-span-2">
                  <input
                    className="rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Proveedor"
                  />
                  <button
                    className="rounded-none h-8 w-10 bg-blue-800 hover:bg-blue-900 text-white font-bold py-1 px-2 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    &#43;
                  </button>
                </div>
                <div className="col-span-1">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="N° de Factura"
                  />
                </div>
                <div className="">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Unidad"
                  />
                </div>
                <div className="">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Precio Unidad"
                  />
                </div>
                <div className="">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Precio total"
                  />
                </div>
                <div className="">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="Date"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder=" tipo de movimiento"
                  />
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <button
                    className="rounded-none w-24 bg-blue-800 hover:bg-blue-900 text-white font-bold px-3 py-1  mx-3  mt-4 focus:outline-none focus:shadow-outline "
                    type="submit"
                  >
                    Buscar
                  </button>
                  <button
                    className="rounded-none w-auto bg-blue-800 hover:bg-blue-900 text-white font-bold px-3 py-1   mt-4  focus:outline-none focus:shadow-outline "
                    type="submit"
                  >
                    Nuevo producto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="px-8 pb-4">
          <h1 className="font-base text-2xl text-center mb-4 text-gray-700">
            Movimiento de productos
          </h1>

          <table className="shadow text-sm table-auto bg-white rounded-md mt-2 w-full">
            <thead>
              <tr className="bg-gray-600 rounded-md text-white">
                <th className="px-4 py-2">Nombre de producto</th>
                <th className="px-4 py-2">Descripción</th>
                <th className="px-4 py-2">Cod. Interno</th>
                <th className="px-4 py-2">Categoria</th>
                <th className="px-4 py-2">movimiento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Coca cola</td>
                <td className="border px-4 py-2">Cocacola 2L descartable</td>
                <td className="border px-4 py-2">cc2ld</td>
                <td className="border px-4 py-2">Bebidas</td>
                <td className="border px-4 py-2">Compra</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Coca cola</td>
                <td className="border px-4 py-2">Cocacola 2L descartable</td>
                <td className="border px-4 py-2">cc2ld</td>
                <td className="border px-4 py-2">Bebidas</td>
                <td className="border px-4 py-2">Compra</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Coca cola</td>
                <td className="border px-4 py-2">Cocacola 2L descartable</td>
                <td className="border px-4 py-2">cc2ld</td>
                <td className="border px-4 py-2">Bebidas</td>
                <td className="border px-4 py-2">Perdida</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Coca cola</td>
                <td className="border px-4 py-2">Cocacola 2L descartable</td>
                <td className="border px-4 py-2">cc2ld</td>
                <td className="border px-4 py-2">Bebidas</td>
                <td className="border px-4 py-2">Venta</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Coca cola</td>
                <td className="border px-4 py-2">Cocacola 2L descartable</td>
                <td className="border px-4 py-2">cc2ld</td>
                <td className="border px-4 py-2">Bebidas</td>
                <td className="border px-4 py-2">Compra</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Coca cola</td>
                <td className="border px-4 py-2">Cocacola 2L descartable</td>
                <td className="border px-4 py-2">cc2ld</td>
                <td className="border px-4 py-2">Bebidas</td>
                <td className="border px-4 py-2">Venta</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Coca cola</td>
                <td className="border px-4 py-2">Cocacola 2L descartable</td>
                <td className="border px-4 py-2">cc2ld</td>
                <td className="border px-4 py-2">Bebidas</td>
                <td className="border px-4 py-2">Compra</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Movimientos;
