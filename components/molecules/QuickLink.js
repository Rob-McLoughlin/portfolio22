import Link from 'next/link'
import { RightArrow } from '@/atoms/Icon'

const QuickLink = ({ icon, title, href, description }) => {
  return (
    <Link href={href}>
      <a className='quick-link flex flex-wrap items-center justify-between'>
        <h2 className='py-2 font-outfit flex gap-x-2'>
          {icon}
          {title}
        </h2>
        <RightArrow className='hover-arrow' />
        <p className='basis-full'>{description}</p>
      </a>
    </Link>
  )
}

export default QuickLink
