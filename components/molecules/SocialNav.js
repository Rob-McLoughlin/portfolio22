import { Mail, Instagram, Twitter, LinkedIn, Polywork } from '@/atoms/Icon'
import Link from 'next/link'

const socialNav = ({ condensed }) => {
  return (
    <nav>
      <ul className={condensed ? 'flex gap-x-4' : 'flex gap-x-12'}>
        <li>
          <Link href='mailto:robbiemcloughlin@gmail.com'>
            <a className='transition hover:text-flamingo'>
              <Mail />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.instagram.com/rob_mcloughlin/'>
            <a className='transition hover:text-flamingo'>
              <Instagram />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://twitter.com/rob_does_ux'>
            <a className='transition hover:text-flamingo'>
              <Twitter />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/robmcloughlin-ux/'>
            <a className='transition hover:text-flamingo'>
              <LinkedIn />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.polywork.com/robmcloughlin'>
            <a className='transition hover:text-flamingo'>
              <Polywork />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default socialNav
