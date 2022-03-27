import Card from '@/molecules/Card'
import { GitHub } from '@/atoms/Icon'

const projects = [
  {
    title: 'Personal Portfolio',
    link:
      'https://www.figma.com/file/cyff5Us1LkuM2dIIOgG1Xo/Portfolio-22?node-id=0%3A1',
    description:
      'I designed this site and the components for it with Figma, you can see it here!'
  }
]

const Figma = ({}) => {
  return (
    <div>
      <section id='intro'>
        <div className='mb-4 flex justify-between'>
          <div>
            <h1 className='font-outfit text-h1 text-ink'>Figma</h1>
          </div>
        </div>
        <p className='md:w-1/2'>
          I have been working in Figma a lot recently and have come to really
          love it. I’m always trying to improve my knowledge of it. Here’s a few
          projects in Figma to highlight my belief in component-based design
          systems.
        </p>
      </section>

      <section className='mt-6'>
        <ul className='flex flex-col gap-6 md:grid md:grid-cols-2'>
          {projects.map(project => {
            const titleKey = project.title
              .toLowerCase()
              .split(' ')
              .join('-')
            return (
              <li key={titleKey}>
                <Card
                  href={project.link}
                  icon={<GitHub />}
                  title={project.title}
                  body={project.description}
                  location='Side Project'
                />
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default Figma
