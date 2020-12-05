import React from "react";
import Navbar from "../layouts/Navbar";

const Kardex = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 pb-4">
        <table className="shadow text-xs table-auto bg-white rounded-md mt-2 w-full">
          <thead>
            <tr className="bg-gray-600 rounded-md text-white">
              <th className="px-4 py-2  border-white border-2" rowspan="2">
                Fecha
              </th>
              <th className="px-4 py-2  border-white border-2" rowspan="2">
                Movimiento
              </th>
              <th className="px-4 py-2  border-white border-2" rowspan="2">
                Descripción
              </th>
              <th className="px-4 py-2  border-white border-2" rowspan="2">
                N° Factura
              </th>
              <th
                className="px-4 py-2 border-white border-2 bg-gray-700"
                colSpan="3"
              >
                Entradas al inventario
              </th>
              <th
                className="px-4 py-2  border-white border-2 bg-gray-700"
                colSpan="3"
              >
                Salidas inventario
              </th>
              <th
                className="px-4 py-2  border-white border-2 bg-gray-700"
                colSpan="3"
              >
                Saldo inventario
              </th>
            </tr>
            <tr className="bg-gray-600 rounded-md text-white">
              <th className="px-4 py-2  border-white border-2">Cantidad</th>
              <th className="px-4 py-2  border-white border-2">
                Costo unitario
              </th>
              <th className="px-4 py-2  border-white border-2">Precio total</th>
              <th className="px-4 py-2  border-white border-2">Cantidad</th>
              <th className="px-4 py-2  border-white border-2">
                Costo unitario
              </th>
              <th className="px-4 py-2  border-white border-2">Precio total</th>
              <th className="px-4 py-2  border-white border-2">Cantidad</th>
              <th className="px-4 py-2  border-white border-2">
                Costo unitario
              </th>
              <th className="px-4 py-2  border-white border-2">Precio total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="py-0">
              <td className="border px-1 py-1">21/11/2020</td>
              <td className="border px-1 py-1">venta</td>
              <td className="border px-1 py-1">venta de mercaderia</td>
              <td className="border px-1 py-1">EB01-252</td>
              <td className="border px-1 py-1"></td>
              <td className="border px-1 py-1"></td>
              <td className="border px-1 py-1"></td>
              <td className="border px-1 py-1">12</td>
              <td className="border px-1 py-1">0.6</td>
              <td className="border px-1 py-1">7.18</td>
              <td className="border px-1 py-1"></td>
              <td className="border px-1 py-1">0.6</td>
              <td className="border px-1 py-1"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kardex;
