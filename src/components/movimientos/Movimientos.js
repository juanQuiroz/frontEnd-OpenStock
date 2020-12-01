import React, { Fragment, useContext, useState } from "react";
import {MovementContext} from '../../context/MovementContext'
import Navbar from "../../components/layouts/Navbar";
import { Link } from "react-router-dom";

const Movimientos = () => {

  const {
    createMovement,
    deleteMovement,
    findMovement,
    updateMovement,
    editMovement,
    movements,
  } = useContext(MovementContext);

  console.log("API MOVEMENT: ", movements)

  const [movementData, setMovementData] = useState({
    _id: "",
    provider: "",
    invoice: "",
    price_unit: "",
    price_total: "",
    quantity: "",
    type_movement: "",
    date: ""
  });
  const [modoEdicion, setModoEdicion] = React.useState(false);

  const _savedMovement = async e => {
    e.preventDefault();
    console.log("Agregar Movimiento: ", movementData);
    createMovement(movementData);
    setMovementData({ _id: "", provider: "", invoice: "", price_unit: "" , price_total:"", quantity: "",type_movement:"", date:""});
  };

  const updateField = (data, field) => {
    setMovementData({
      ...movementData,
      [field]: data,
    });
  };

  const _deleteMovement = movement => {
    console.log("Delete movement: ", movement._id);
    deleteMovement(movement._id);
    setMovementData({ _id: "", provider: "", invoice: "", price_unit: "" , price_total:"", quantity: "",type_movement:"", date:""});
  };

  const _activeEdit = async (e, item) => {
    e.preventDefault();
    console.log("Edit product: ", item);
    setModoEdicion(true);
    setMovementData(item);
  };

  const _cancelMovement = () => {
    setMovementData({ _id: "", provider: "", invoice: "", price_unit: "" , price_total:"", quantity: "",type_movement:"", date:""});
  };

  const edicionX = async e => {
    e.preventDefault();
    console.log("edicionX: ", movementData);
    updateMovement(movementData);
    setMovementData({ _id: "", provider: "", invoice: "", price_unit: "" , price_total:"", quantity: "",type_movement:"", date:""});
    setModoEdicion(false);
  };


  return (
    <Fragment>
      <Navbar />
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
              <Link to="/productos" className="w-full">
                <button
                  className="rounded-none w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2   mt-6  focus:outline-none focus:shadow-outline "
                  type="submit"
                >
                  Nuevo producto
                </button>
              </Link>
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
                    onChange={e => updateField(e.target.value, "provider")}
                    value={movementData.provider}
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
                    onChange={e => updateField(e.target.value, "invoice")}
                    value={movementData.invoice}
                  />
                </div>
                <div className="">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Unidad"
                    onChange={e => updateField(e.target.value, "quantity")}
                    value={movementData.quantity}
                  />
                </div>
                <div className="">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Precio Unidad"
                    onChange={e => updateField(e.target.value, "price_unit")}
                    value={movementData.price_unit}
                  />
                </div>
                <div className="">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Precio total"
                    onChange={e => updateField(e.target.value, "price_total")}
                    value={movementData.price_total}
                  />
                </div>
                <div className="">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="Date"
                    onChange={e => updateField(e.target.value, "date")}
                    value={movementData.date}
                  />
                </div>
                <div className="col-span-2">
                  <input
                    className="mt-0 rounded-none h-8 appearance-none border  w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder=" tipo de movimiento"
                    onChange={e => updateField(e.target.value, "type_movement")}
                    value={movementData.type_movement}
                  />
                </div>
                <div className="col-span-3 flex items-center justify-center">
                {modoEdicion ? (
              <button
                className="shadow-md h-auto w-auto bg-blue-800 hover:bg-blue-900 text-white font-bold py-1  mt-6 px-2 focus:outline-none focus:shadow-outline mx-5"
                onClick={e => {
                  edicionX(e);
                }}
              >
                Editar
              </button>
            ) : (
              <button
                className="shadow-md h-auto w-auto bg-blue-800 hover:bg-blue-900 text-white font-bold py-1  mt-6 px-2 focus:outline-none focus:shadow-outline mx-5"
                onClick={e => {
                  _savedMovement(e);
                }}
              >
                Agregar
              </button>
            )}

            <button
              className="shadow-md h-auto w-auto bg-blue-800 hover:bg-blue-900 text-white font-bold py-1  mt-6 px-2 focus:outline-none focus:shadow-outline mx-5"
              onClick={_cancelMovement}
            >
              Cancelar
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
                <th className="px-4 py-2">Codigo</th>
                <th className="px-4 py-2">Proveedor</th>
                <th className="px-4 py-2">N° Factura</th>
                <th className="px-4 py-2">Precio Unit</th>
                <th className="px-4 py-2">Cantidad</th>
                <th className="px-4 py-2">Precio Total</th>
                <th className="px-4 py-2">Tipo Mov</th>
                <th className="px-4 py-2">Fecha</th> 
                <th className="px-4 py-2">Acciones</th>                
              </tr>
            </thead>
            <tbody>
              {
                movements.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item._id}</td>
                      <td>{item.provider}</td>
                      <td>{item.inovice}</td>
                      <td>{item.price_unit}</td>
                      <td>{item.quantity}</td>
                      <td>S/ {item.price_unit * item.quantity}</td>
                      <td>{item.type_movement}</td>
                      <td>{item.date}</td>
                      <td>
                    <button
                      className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                      onClick={e => {
                        _activeEdit(e, item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                      onClick={() => _deleteMovement(item)}
                    >
                      Delete
                    </button>
                  </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Movimientos;
