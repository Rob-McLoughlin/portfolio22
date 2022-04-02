import Link from 'next/link'

const SmallCard = ({ href, icon }) => {
  return (
    <Link href={href}>
      <a target='_blank'>
        <div
          className={
            'inline-block group p-4 bg-white rounded-lg card-shadow cursor-pointer  border-2 hover:border-flamingo border-white transition text-flamingo'
          }
        >
          {icon}
        </div>
      </a>
    </Link>
  )
}

export default SmallCard
