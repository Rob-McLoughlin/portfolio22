import '@/styles/globals.scss'
import Standard from '@/templates/Standard'

function MyApp ({ Component, pageProps }) {
  return (
    <Standard>
      <Component {...pageProps} />
    </Standard>
  )
}

export default MyApp
