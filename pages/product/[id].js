import React from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
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
       <div style={{padding:"5rem 30rem"}}>
          <div style={{maxWidth:"500px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{textAlign:"center"}}>{ProductData[id].title}</h1>
            <Image src={ProductData[id].img} width="100%" height="auto"/>
          </div>
       </div>
      <Footer />
    </>
  )
}
export default Product
