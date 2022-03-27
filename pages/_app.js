import '@/styles/globals.scss'
import Standard from '@/templates/Standard'
import { SessionProvider } from 'next-auth/react'

export default function MyApp ({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Standard>
        <Component {...pageProps} />
      </Standard>
    </SessionProvider>
  )
}
