import React, { useContext } from 'react'
import {productsContext} from '../../pages/_app'
import { GridContainer } from './product.styles';

function ProductDetail({result}) {
  const products = useContext(productsContext);

  const data = result;
  console.log(data)
  return (
    <>
      <GridContainer></GridContainer>
    </>
  )
}

export default ProductDetail
