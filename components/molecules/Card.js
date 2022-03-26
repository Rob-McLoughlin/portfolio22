import { RightArrow } from '@/atoms/Icon'
import Link from 'next/link'

const Card = ({ title, subtitle, body, location, icon, href }) => {
  const destination = href || null
  const inner = (
    <div className='group p-4 bg-white rounded-lg card-shadow border-2 border-white cursor-pointer transition text-ink max-w-sm hover:border-flamingo'>
      <div className='relative flex gap-x-1'>
        <div className='h-6 w-6 text-flamingo'>{icon}</div>
        <div>
          <span className='block text-body font-outfit transition-colors group-hover:text-flamingo'>
            {title}
          </span>
          {subtitle && (
            <span className='subtitle mt-2 transition-colors group-hover:text-flamingo'>
              {subtitle}
            </span>
          )}
        </div>
        <span
          className={`text-meta font-outfit uppercase ml-auto transition ${destination &&
            'group-hover:translate-y-4 group-hover:opacity-0'}`}
        >
          {location}
        </span>
        {destination && (
          <RightArrow className='absolute right-0 text-flamingo translate-y-4 rotate-45 transition opacity-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100' />
        )}
      </div>
      <summary className='block mt-2 text-ink'>{body}</summary>
    </div>
  )
  if (destination) {
    return (
      <Link href={destination}>
        <a>{inner}</a>
      </Link>
    )
  } else {
    return inner
  }
}

export default Card
