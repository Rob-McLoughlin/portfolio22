import Link from 'next/link'
import {
  Home,
  Box,
  GitHub,
  Book,
  Figma,
  Mail,
  Instagram,
  Twitter,
  LinkedIn,
  Polywork
} from '@/atoms/Icon'
import SocialNav from '@/molecules/SocialNav'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setDesktop(true)
    }
  }, [])
  return (
    <footer className='grid grid-cols-2 gap-x-2 py-10 px-4 border-t md:max-w-4xl md:mx-auto md:my-24 md:flex md:flex-col md:gap-y-4'>
      <nav className='md:mb-8'>
        <span className='block font-bold mb-2 md:hidden'>Navigation</span>
        <ul className='md:flex md:justify-center md:gap-x-6'>
          <li>
            <Link href='/'>
              <a className='flex gap-x-1 py-2'>
                <Home />
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a className='flex gap-x-1 py-2'>
                <Box />
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href='/ideas'>
              <a className='flex gap-x-1 py-2'>
                <Box />
                Ideas
              </a>
            </Link>
          </li>
          <li>
            <Link href='/code'>
              <a className='flex gap-x-1 py-2'>
                <GitHub />
                Code
              </a>
            </Link>
          </li>
          <li>
            <Link href='/books'>
              <a className='flex gap-x-1 py-2'>
                <Book />
                Books
              </a>
            </Link>
          </li>
          <li>
            <Link href='/figma'>
              <a className='flex gap-x-1 py-2'>
                <Figma />
                Figma
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      {!desktop && (
        <nav>
          <span className='block font-bold mb-2'>Contact</span>
          <ul>
            <li>
              <Link href='mailto:robbiemcloughlin@gmail.com'>
                <a className='flex gap-x-2 py-2'>
                  <Mail />
                  Email
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/rob_mcloughlin/'>
                <a className='flex gap-x-2 py-2'>
                  <Instagram />
                  Instagram
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://twitter.com/rob_does_ux'>
                <a className='flex gap-x-2 py-2'>
                  <Twitter />
                  Twitter
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://www.linkedin.com/in/robmcloughlin-ux/'>
                <a className='flex gap-x-2 py-2'>
                  <LinkedIn />
                  LinkedIn
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://www.polywork.com/robmcloughlin'>
                <a className='flex gap-x-2 py-2'>
                  <Polywork />
                  Polywork
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <div className='flex justify-center'>{desktop && <SocialNav />}</div>
      <span className='block mt-10 col-span-2 text-center'>
        © {new Date().getFullYear()} Rob McLoughlin
      </span>
    </footer>
  )
}

export default Footer
