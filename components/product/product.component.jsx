import React, { useContext } from 'react'
import Card from './card.component'
import { Container } from './product.styles'
import {productsContext} from '../../pages/_app'

function Products() {
  const products = useContext(productsContext);
  return (
    <>
      <Container>
        {products.map((item,i) => {
          return <Card
            id = {i}
            title={item.title}
            img = {item.img}
            price = {item.price}
            loc = {item.loc}
            rating = {item.rating}
            addition = {item.addition}
            link ={item.link}
            key ={item.title}
          />}
        )
        }
      </Container>
    </>
  )
}

export default Products
