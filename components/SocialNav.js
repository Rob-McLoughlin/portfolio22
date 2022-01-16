import { Mail, Instagram, Twitter, LinkedIn } from '@/components/Icons'
import Link from 'next/link'

const socialNav = ({ condensed }) => {
  return (
    <nav>
      <ul className={condensed ? 'flex gap-x-4' : 'flex gap-x-12'}>
        <li>
          <Link href='mailto:robbiemcloughlin@gmail.com'>
            <a>
              <Mail />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.instagram.com/rob_mcloughlin/'>
            <a>
              <Instagram />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://twitter.com/rob_does_ux'>
            <a>
              <Twitter />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/robmcloughlin-ux/'>
            <a>
              <LinkedIn />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default socialNav
