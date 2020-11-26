import React, { createContext, useState, useEffect,useCallback } from "react";
import { ProductService } from '../services/productServices';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const productService = new ProductService()

  const [products, setProducts] = useState([])

  const [editProduct, setEditProduct] = useState(null)
 

  useEffect(() => {
    productService.readAll().then((data) => setProducts(data));
    //showProduct()
  }, []);

  const createProduct = (product) => {
    productService
      .create(product)
      .then((data) => setProducts([...products, data]));
  };

  const deleteProduct = (id) => {
      console.log("Context: ",id)
    productService
      .delete(id)
      .then(() => setProducts(products.filter((p) => p._id !== id)));
  };

  const findProduct = (id) => {
    const product = products.find((p) => p._id === id);

    setEditProduct(product);
  };

  const updateProduct = (product) => {
    productService
      .update(product)
      .then(res => {
        console.log("context: ", res)
        productService.readAll().then((data) => setProducts(data));
      }
      );
  };

  return (
    <ProductContext.Provider
      value={{
        createProduct,
        deleteProduct,
        findProduct,
        updateProduct,
        editProduct,
        products,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;