import Link from 'next/link'
import NavButton from '@/components/NavButton'
import { useEffect, useRef, useState } from 'react'

const Nav = () => {
  let desktop = useRef(false)
  useEffect(() => {
    if (window.innerWidth > 768) {
      desktop.current = true
    }
    console.log(desktop.current)
  }, [])

  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className='fixed top-0 -left-0 w-full bg-white p-4'>
      <nav className='flex justify-between'>
        <Link href='/'>
          <a className='font-outfit'>RM</a>
        </Link>
        {!desktop.current && (
          <NavButton
            active={navOpen}
            openFunction={() => setNavOpen(!navOpen)}
          />
        )}
      </nav>
    </header>
  )
}

export default Nav
