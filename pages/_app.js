import '@/styles/globals.scss'
import Standard from '@/templates/Standard'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import TagManager from 'react-gtm-module'
const jwt = require('jsonwebtoken')

const tagManagerArgs = {
  gtmId: 'GTM-545LPZB'
}

const decodeTokenWithoutVerify = token => {
  let claim = false
  try {
    claim = jwt.decode(token)
  } catch (err) {
    console.log(err)
  }
  return claim
}

export default function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const hideNavOnPages = ['/login']

  useEffect(() => {
    // Tag Manager
    TagManager.initialize(tagManagerArgs)
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageview',
        pagePath: router.pathname,
        pageTitle: router.pageTitle,
        invitee: window.claim ? claim.name : '(not set)'
      }
    })
  }, [router.pageTitle, router.pathname])

  return (
    <Standard hideNav={hideNavOnPages.includes(router.pathname)}>
      <Component {...pageProps} />
    </Standard>
  )
}
