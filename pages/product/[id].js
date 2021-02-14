import React from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Head from 'next/head';
import Navbar from '../../components/navbar/navbar.component';
import Footer from '../../components/footer/footer.component';
import ProductDetail from '../../components/product/product-detail.component';

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
    const router = useRouter()
    const { id } = router.query
  return (
    <>
      <Head>
        <title>{`Sunshop | ${ProductData[id].title}`}</title>
        <link rel="favicon" href=""/>
      </Head>
       <Navbar/>
      <ProductDetail result={ProductData[id]}></ProductDetail>
      <Footer />
    </>
  )
}
export default Product
