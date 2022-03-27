import Nav from '@/organisms/Nav'
import Footer from '@/organisms/Footer'
import { useEffect, useState } from 'react'

const hideNavOnPages = ['/login']

const Standard = ({ children }) => {
  const [hideNav, setHideNav] = useState(false)
  useEffect(() => {
    const path = window.location.pathname
    if (hideNavOnPages.includes(path)) {
      setHideNav(true)
    }
  }, [hideNav])
  return (
    <div>
      {!hideNav && <Nav />}
      <main className='standard'>{children}</main>
      <Footer />
    </div>
  )
}

export default Standard
