import Link from 'next/link'
import NavButton from '@/components/NavButton'
import { useEffect, useRef, useState } from 'react'

const Nav = () => {
  let desktop = useRef(false)
  useEffect(() => {
    if (window.innerWidth > 768) {
      desktop.current = true
    }
  }, [])

  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className='fixed top-0 -left-0 w-full bg-white p-4 z-20'>
      <nav className='flex justify-between'>
        <Link href='/'>
          <a className='font-outfit z-20'>RM</a>
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
                  <a>Home &amp; About</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>Projects &amp; Work</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>Design Ideas</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>Code</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>Books</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>Figma</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Nav
