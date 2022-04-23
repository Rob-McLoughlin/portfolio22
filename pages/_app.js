import '@/styles/globals.scss'
import Standard from '@/templates/Standard'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-545LPZB'
}

export default function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const hideNavOnPages = ['/login']

  useEffect(() => {
    // Tag Manager
    TagManager.initialize(tagManagerArgs)
    // TagManager.dataLayer({ dataLayer: { pagePath: router.asPath } })
  }, [router.pathname])

  return (
    <Standard hideNav={hideNavOnPages.includes(router.pathname)}>
      <Component {...pageProps} />
    </Standard>
  )
}
