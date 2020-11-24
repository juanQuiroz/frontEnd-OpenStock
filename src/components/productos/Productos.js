import React,{ Fragment,useState,useContext} from "react";
import {ProductContext} from '../../context/ProductContext'

const Productos = () => {
  const { 
    products, 
    findProduct, 
    createProduct,
    deleteProduct,
    editProduct,
    updateProduct, 
  } = useContext(ProductContext);

  //print all Products
  console.log(products)

  const [productData, setProductData] = useState({_id:'', name:'', category:'', description:''});

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("Agregar Producto: ",productData)
    createProduct(productData);
    setProductData({_id:'', name:'', category:'', description:''});
  }

  const updateField = (data, field) => {
    setProductData({
      ...productData,
      [field]: data,
    });
    console.log(productData);
  };

  const _deleteProduct = (product) => {
    console.log("Delete product: ",product._id)
      deleteProduct(product._id);
      setProductData({_id:'', name:'', category:'', description:''});
  };
  
  const _editProduct = (product) => {
    console.log("Edit product: ",product)
    setProductData(product)
    //editProduct(product);
    //setProductData({_id:'', name:'', category:'', description:''});
  };

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
                Código interno
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => updateField(e.target.value, "_id")} 
                value={productData._id}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => updateField(e.target.value, "name")} 
                value={productData.name}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Categoria
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => updateField(e.target.value, "category")} 
                value={productData.category}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Descripción
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => updateField(e.target.value, "description")} 
                value={productData.description}
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
              <th className="px-4 py-2">Codigo Interno</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Categoria</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
          {
          products.map((item)=>{
            return(
              <tr key={item._id}>
                <td >{item._id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>
                <button className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline" onClick={() => _editProduct(item)}>Edit</button>
                <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => _deleteProduct(item)}>Delete</button>
                </td>
              </tr>
            )
          })
          }
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Productos;
