import '../styles/globals.css'
import React,{} from 'react'

const products = [
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

export const productsContext = React.createContext();

function MyApp({ Component, pageProps }) {
  return (
    <productsContext.Provider value={products}>
        <Component {...pageProps} />
    </productsContext.Provider>
  )
}

export default MyApp
