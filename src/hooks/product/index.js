import {useEffect, useState, useCallback,useContext} from 'react'
import getProductsService from '../../services/product'
import addProductService from '../../services/addProduct'



export default function useProduct () {
  const [products, setProducts] = useState([])
  const [inputProduct, setInputProduct] = useState(null)

  useEffect(function(){

    getProductsService()
    .then(products => {
      setProducts(products)
    }).catch(err => {
      console.log("New Error")
    })
  }, [])

  const addProduct = useCallback(({name,category,description,imgURL}) => {
    addProductService({name,category,description,imgURL})
      .then(setInputProduct)
      .catch(err => {
        console.error(err)
      })
  }, [setInputProduct]) 

  return{products, addProduct}

}