import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const Projects = ({ projects }) => {
  return (
    <div className='mt-5'>
      {projects.map((post, index) => {
        console.log(post)
        return <h1>{post.frontMatter.title}</h1>
      })}
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

  return {
    props: {
      projects
    }
  }
}

export default Projects
