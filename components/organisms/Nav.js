import Link from 'next/link'
import NavButton from '@/atoms/NavButton'
import SocialNav from '@/molecules/SocialNav'
import { useEffect, useRef, useState } from 'react'
import { Home, Page, GitHub, Book, Figma } from '@/atoms/Icon'

const Nav = () => {
  const [desktop, setDesktop] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setDesktop(true)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 -left-0 w-full bg-white bg-opacity-90 z-20 backdrop-filter backdrop-blur-md ${navOpen &&
        'h-full'}`}
    >
      <nav className='flex justify-between md:max-w-4xl md:mx-auto'>
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
                  <Page />
                  {desktop ? 'Projects' : 'Projects & Work'}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/ideas'>
                <a>
                  <Page />
                  {desktop ? 'Ideas' : 'Design Ideas'}
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
