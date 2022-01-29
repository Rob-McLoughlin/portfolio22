import Link from 'next/link'
import NavButton from '@/components/NavButton'
import SocialNav from '@/components/SocialNav'
import { useEffect, useRef, useState } from 'react'
import { Home, Page, GitHub, Book, Figma } from '@/components/Icons'

const Nav = () => {
  let desktop = useRef(false)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      desktop.current = true
    }
  }, [])

  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className='fixed top-0 -left-0 w-full bg-white z-20'>
      <nav className='flex justify-between md:max-w-4xl md:mx-auto'>
        <Link href='/'>
          <a className='flex font-outfit z-20 h-14 w-14 items-center justify-center'>
            RM
          </a>
        </Link>
        {!desktop.current && (
          <NavButton
            active={navOpen}
            openFunction={() => setNavOpen(!navOpen)}
          />
        )}
        {!desktop.current && navOpen && (
          <div className='mobile-nav z-10'>
            <ul>
              <li>
                <Link href='/'>
                  <a>
                    <Home />
                    Home &amp; About
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/projects'>
                  <a>
                    <Page />
                    Projects &amp; Work
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/ideas'>
                  <a>
                    {' '}
                    <Page />
                    Design Ideas
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

            <div className='social-nav absolute flex left-0 w-full bottom-8 justify-center'>
              <SocialNav />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Nav
