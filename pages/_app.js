import '../styles/globals.css'
import Layout from '../components/Layout'

// wraps around your components
// can add header, footer etc here

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
