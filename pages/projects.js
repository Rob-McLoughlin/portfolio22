import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ProjectCard from '@/components/ProjectCard'

const Projects = ({ projects }) => {
  return (
    <main className='relative mt-24 px-4'>
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
        <ul>
          {projects.map(({ slug, frontMatter: project }) => {
            return (
              <li key={slug}>
                <ProjectCard project={project} slug={slug} />
              </li>
            )
          })}
        </ul>
      </section>
    </main>
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

  return {
    props: {
      projects
    }
  }
}

export default Projects
