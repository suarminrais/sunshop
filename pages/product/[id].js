import React from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Head from 'next/head';
import Navbar from '../../components/navbar/navbar.component'
import Footer from '../../components/footer/footer.component'
import {useDataProducts} from '../../components/context/product/product.context'


function Product() {
  const products = useDataProducts();
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>{`Sunshop | ${id?products[id]?.title:""}`}</title>
        <link rel="favicon" href=""/>
      </Head>
       <Navbar/>
       <div style={{padding:"5rem 20rem"}}>
          <div style={{maxWidth:"500px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{textAlign:"center"}}>{id?products[id]?.title:""}</h1>
            <Image src={id?products[id]?.img:"not-loaded-yet"} width="100%" height="auto"/>
          </div>
       </div>
      <Footer />
    </>
  )
}
export default Product
