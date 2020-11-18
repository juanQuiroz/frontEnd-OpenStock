import React,{ Fragment,useEffect,useState } from "react";
import useProduct from '../../hooks/product/index'

const Productos = () => {
  const  {products, addProduct}  = useProduct()
  const [name,setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [imgURL, setImgURL] = useState('')

  console.log(products)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("ASdasdasd")
    addProduct({name, category, description, imgURL})
  }
  return (
    <Fragment>
      <div>
        <form onSubmit={handleSubmit} className="border-2 border-blue-700  rounded mx-10 mt-10 px-6 pt-3 pb-8 mb-8">
          <h1 className="font-base text-2xl text-center mb-4 text-gray-700">
            Registro de Productos
          </h1>
            
          <div className="grid grid-cols-2 gap-3">
         
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Nombre de producto
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={e => setName(e.target.value)} 
                value={name}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Descripción
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={e => setDescription(e.target.value)} 
                value={description}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Código interno
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Categoria
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={e => setCategory(e.target.value)} 
                value={category}
              />
            </div>
          </div>
      
          <div className="flex items-center justify-center">
            <button
              className="shadow-md h-auto w-auto bg-blue-800 hover:bg-blue-900 text-white font-bold py-1  mt-6 px-2 focus:outline-none focus:shadow-outline mx-5"
              type="submit"
            >
              Confirmar
            </button>
            <button
              className="shadow-md h-auto w-auto bg-blue-800 hover:bg-blue-900 text-white font-bold py-1  mt-6 px-2 focus:outline-none focus:shadow-outline mx-5"
              type="submit"
            >
              Cancelar
            </button>
          </div>
        </form>
        
      </div>
      <div className="px-8 pb-4">
        <h1 className="font-base text-2xl text-center mb-4 text-gray-700">
          Productos Registrados
        </h1>

        <table className="shadow text-sm table-auto bg-white rounded-md mt-2 w-full">
          <thead>
            <tr className="bg-gray-600 rounded-md text-white">
              <th className="px-4 py-2">Nombre de producto</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Cod. Interno</th>
              <th className="px-4 py-2">Categoria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Coca cola</td>
              <td className="border px-4 py-2">Cocacola 2L descartable</td>
              <td className="border px-4 py-2">cc2ld</td>
              <td className="border px-4 py-2">Bebidas</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Coca cola</td>
              <td className="border px-4 py-2">Cocacola 2L descartable</td>
              <td className="border px-4 py-2">cc2ld</td>
              <td className="border px-4 py-2">Bebidas</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Coca cola</td>
              <td className="border px-4 py-2">Cocacola 2L descartable</td>
              <td className="border px-4 py-2">cc2ld</td>
              <td className="border px-4 py-2">Bebidas</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Coca cola</td>
              <td className="border px-4 py-2">Cocacola 2L descartable</td>
              <td className="border px-4 py-2">cc2ld</td>
              <td className="border px-4 py-2">Bebidas</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Coca cola</td>
              <td className="border px-4 py-2">Cocacola 2L descartable</td>
              <td className="border px-4 py-2">cc2ld</td>
              <td className="border px-4 py-2">Bebidas</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Coca cola</td>
              <td className="border px-4 py-2">Cocacola 2L descartable</td>
              <td className="border px-4 py-2">cc2ld</td>
              <td className="border px-4 py-2">Bebidas</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Coca cola</td>
              <td className="border px-4 py-2">Cocacola 2L descartable</td>
              <td className="border px-4 py-2">cc2ld</td>
              <td className="border px-4 py-2">Bebidas</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Coca cola</td>
              <td className="border px-4 py-2">Cocacola 2L descartable</td>
              <td className="border px-4 py-2">cc2ld</td>
              <td className="border px-4 py-2">Bebidas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Productos;
