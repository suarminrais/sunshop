import Head from 'next/head'
import React from 'react'
import Footer from '../components/footer/footer.component'
import Navbar from '../components/navbar/navbar.component'
import Products from '../components/product/product.component'



export default function Home() {
  return (
    <>   
      <Head>
        <title>Sun Shop | </title>
        <link rel="favicon" href=""/>
      </Head>
      <Navbar/>
      <Products />
      <Footer />
    </>
  )
}
