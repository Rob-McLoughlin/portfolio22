import Nav from '@/organisms/Nav'
import Footer from '@/organisms/Footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const hideNavOnPages = ['/login']

const Standard = ({ children, hideNav }) => {
  return (
    <div>
      {!hideNav && <Nav />}
      <main className='standard'>{children}</main>
      <Footer />
    </div>
  )
}

export default Standard
