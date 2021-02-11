import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head';
import Navbar from '../../components/navbar/navbar.component';
import Footer from '../../components/footer/footer.component';

function Product() {
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
    }
  
  ];
    const router = useRouter()
    const { id } = router.query
  return (
    <>
      <Head>
        <title>{`Sunshop | ${ProductData[id].title}`}</title>
        <link rel="favicon" href=""/>
      </Head>
       <Navbar/>
       <h1>Product: {id}</h1>
      <Footer />
    </>
  )
}
export default Product
