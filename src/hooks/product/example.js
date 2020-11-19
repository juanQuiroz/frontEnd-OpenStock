import {useCallback, useContext,useEffect} from 'react'
import getProductsService from '../../services/product'
import {DataContext} from '../../context/DataContext'

export default function useExample(){
    const{data,setData} = useContext(DataContext)
    
    useEffect(function(){

      getProductsService()
      .then(products => {
        setData(products)
      }).catch(err => {
        console.log("New Error")
      })
    }, [setData])

    return {
        data
    }
}