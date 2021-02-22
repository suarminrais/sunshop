import '../styles/globals.css'
import ProductProvider from "../components/context/product/product.context";

function MyApp({ Component, pageProps }) {
  return (
          <ProductProvider>
            <Component {...pageProps} />
          </ProductProvider>
          )
        }
export default MyApp

