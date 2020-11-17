import {useEffect, useState} from 'react'
import getProductsService from '../../services/product'

export default function useProduct () {
  const [products, setProducts] = useState([])
  

  useEffect(function(){
    getProductsService()
    .then(products => {
      setProducts(products)
    }).catch(err => {
      console.log("New Error")
    })

  }, [])

  return{products}

}