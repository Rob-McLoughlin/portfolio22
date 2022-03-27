import '@/styles/globals.scss'
import Standard from '@/templates/Standard'

export default function MyApp ({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <Standard>
      <Component {...pageProps} />
    </Standard>
  )
}
