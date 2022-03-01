import Link from 'next/link'
import { RightArrow } from '@/components/Icons'
const colors = [
  '#3683AC',
  '#9EBFA8',
  '#D97693',
  '#EDB2C9',
  '#F1E4C2',
  '#FC993A',
  '#FDBB7C'
]

const Card = ({ href, title, subtitle, body, location, icon }) => {
  const color = colors[Math.floor(Math.random() * colors.length)]
  return (
    <Link href={href}>
      <a>
        <div
          className='project-card p-4 rounded-lg my-4 border-ink max-w-sm'
          style={{ borderColor: color }}
        >
          <div className='flex justify-between items-center gap-x-4 font-outfit mb-2'>
            <span>{title}</span>
            <RightArrow className='hover-arrow' />
            <span className='uppercase text-meta'>{location}</span>
          </div>
          <p>{body}</p>
        </div>
      </a>
    </Link>
  )
}

export default Card
