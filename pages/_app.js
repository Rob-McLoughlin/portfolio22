import '@/styles/globals.scss'
import Standard from '@/layouts/Standard'

function MyApp ({ Component, pageProps }) {
  return (
    <Standard>
      <Component {...pageProps} />
    </Standard>
  )
}

export default MyApp
