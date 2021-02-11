import React from 'react'
import Card from './card.component'
import { Container } from './product.styles'

const ProductData = [
  {
    title : "Alat Bantu Hidup",
    img : "/product/product1.jpg",
    price : "120.900.10",
    loc : "Jakarta",
    rating : "5",
    addition : "Casback",
    link :"/product"
  },
  {
    title : "Alat Bantu Mati",
    img : "/product/product1.jpg",
    price : "120.900.10",
    loc : "Jakarta",
    rating : 5,
    addition : "Casback",
    link :"/product"
  },
  {
    title : "Wadah Gunung",
    img : "/product/kutang.jpeg",
    price : "120.900.10",
    loc : "Makasar",
    rating : 10,
    addition : "Casback",
    link :"/product"
  }
];

function Products() {
  return (
    <>
      <Container>
        {ProductData.map((item,i) => {
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
