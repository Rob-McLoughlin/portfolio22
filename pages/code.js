import Card from '@/molecules/Card'
import { GitHub } from '@/atoms/Icon'
import Head from 'next/head'

const projects = [
  {
    title: 'Personal Portfolio',
    link: 'https://github.com/Rob-McLoughlin/portfolio22',
    description:
      'A write up of this website that you’re on now and the process I went through to design and develop it.'
  }
]

const Code = ({}) => {
  return (
    <div>
      <Head>
        <title>Rob McLoughlin | Code</title>
      </Head>
      <section id='intro'>
        <div className='mb-4 flex justify-between'>
          <div>
            <h1 className='font-inter font-semibold text-h1 text-ink'>Code</h1>
          </div>
        </div>
        <p className='md:w-1/2'>
          I have always taken pride in my ability to build products with the
          same care as they are designed with.
        </p>
      </section>

      <section className='mt-6'>
        <ul className='flex flex-col gap-6 md:grid md:grid-cols-2'>
          {projects.map(project => {
            const titleKey = project.title.toLowerCase().split(' ').join('-')
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

export default Code
