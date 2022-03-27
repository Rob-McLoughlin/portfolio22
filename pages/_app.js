import '@/styles/globals.scss'
import Standard from '@/templates/Standard'
import { useRouter } from 'next/router'

export default function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const hideNavOnPages = ['/login']

  return (
    <Standard hideNav={hideNavOnPages.includes(router.pathname)}>
      <Component {...pageProps} />
    </Standard>
  )
}
