import React,{useContext} from 'react'
import {products} from './product.data'

const ProductContext = React.createContext()

export function useDataProducts(){return useContext(ProductContext)}

function ProductProvider({children}) {
  return(
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
    )
}

export default ProductProvider