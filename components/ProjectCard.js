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

const ProjectCard = ({ project, slug }) => {
  const color = colors[Math.floor(Math.random() * colors.length)]
  return (
    <Link href={`/projects/${slug}`}>
      <a>
        <div
          className='project-card p-4 rounded-lg my-4'
          style={{ borderColor: color }}
        >
          <div className='flex justify-between items-center gap-x-4 font-outfit mb-2'>
            <span>{project.title}</span>
            <RightArrow className='hover-arrow' />
            <span className='uppercase text-meta'>at {project.at}</span>
          </div>
          <p>{project.description}</p>
        </div>
      </a>
    </Link>
  )
}

export default ProjectCard
