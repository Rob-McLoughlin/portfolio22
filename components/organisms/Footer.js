import Link from 'next/link'
import SocialNav from '@/molecules/SocialNav'

const footerLinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Projects',
    href: '/projects'
  },
  {
    title: 'Code',
    href: '/code'
  },
  {
    title: 'Books',
    href: '/books'
  },
  {
    title: 'Figma',
    href: '/figma'
  }
]

const Footer = () => {
  return (
    <footer className='py-10 px-4 border-t md:max-w-4xl md:mx-auto md:my-24 md:flex md:flex-col md:gap-y-4'>
      <nav className='md:mb-8'>
        <ul className='flex flex-col items-center pb-8 gap-y-4 md:flex-row md:justify-center md:gap-x-14'>
          {footerLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href}>
                <a className='py-2 text-ink transition hover:text-flamingo'>
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex justify-center'>
        <SocialNav />
      </div>
      <span className='block mt-10 col-span-2 text-center'>
        © {new Date().getFullYear()} Rob McLoughlin
      </span>
    </footer>
  )
}

export default Footer
