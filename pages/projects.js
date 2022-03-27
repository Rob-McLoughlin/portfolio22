import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Card from '@/molecules/Card'
import { Box } from '@/atoms/Icon'

const Projects = ({ projects }) => {
  return (
    <div>
      <section id='intro'>
        <div className='flex justify-between mb-4'>
          <div>
            <h1 className='text-h1 font-outfit text-ink'>
              Projects &amp; Work
            </h1>
          </div>
        </div>
        <p>
          I am not permitted to re-display work so I will link to the live
          project and write up my process on them!
        </p>
      </section>

      <section className='mt-6'>
        <ul className='md:grid md:grid-cols-2 gap-x-6'>
          {projects.map(({ slug, frontMatter: project }) => {
            return (
              <li key={slug}>
                <Card
                  title={project.title}
                  body={project.description}
                  location={project.at}
                  href={`/projects/${slug}`}
                  icon={<Box />}
                />
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('projects'))

  const projects = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join('projects', filename),
      'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  const ordered = projects.sort(p => p.frontMatter.order)

  return {
    props: {
      projects: ordered
    }
  }
}

export default Projects
