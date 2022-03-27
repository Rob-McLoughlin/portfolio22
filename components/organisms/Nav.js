import Link from 'next/link'
import NavButton from '@/atoms/NavButton'
import SocialNav from '@/molecules/SocialNav'
import { useEffect, useState } from 'react'
import { Home, Box, GitHub, Book, Figma } from '@/atoms/Icon'
import { useRouter } from 'next/router'

const Nav = () => {
  const [desktop, setDesktop] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const router = useRouter()

  const handleRouteChange = (url, { shallow }) => {
    setNavOpen(false)
  }

  useEffect(() => {
    // Close nav on route change
    router.events.on('routeChangeComplete', handleRouteChange)

    if (window.innerWidth >= 768) {
      setDesktop(true)
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setDesktop(true)
      } else {
        setDesktop(false)
      }
    })
  }, [router.events])

  return (
    <header
      className={`fixed top-0 -left-0 w-full bg-opacity-90 z-20 backdrop-filter backdrop-blur-md ${navOpen &&
        'h-full nav-open'}`}
    >
      <nav className='flex justify-between md:max-w-4xl md:mx-auto bg-white'>
        <Link href='/'>
          <a className='flex font-outfit z-20 h-14 w-14 items-center justify-center'>
            RM
          </a>
        </Link>
        {!desktop && (
          <NavButton
            active={navOpen}
            openFunction={() => setNavOpen(!navOpen)}
          />
        )}
        <div
          className={`${desktop ? 'desktop-nav' : 'mobile-nav'} ${
            navOpen ? 'nav-open' : ''
          }`}
        >
          <ul className='md:pr-4'>
            <li>
              <Link href='/'>
                <a>
                  <Home />
                  {desktop ? 'Home' : 'Home & About'}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                <a>
                  <Box />
                  {desktop ? 'Projects' : 'Projects & Work'}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/code'>
                <a>
                  <GitHub />
                  Code
                </a>
              </Link>
            </li>
            <li>
              <Link href='/books'>
                <a>
                  <Book />
                  Books
                </a>
              </Link>
            </li>
            <li>
              <Link href='/figma'>
                <a>
                  <Figma />
                  Figma
                </a>
              </Link>
            </li>
          </ul>

          {!desktop && (
            <div className='social-nav absolute flex left-0 w-full bottom-8 justify-center'>
              <SocialNav />
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Nav
