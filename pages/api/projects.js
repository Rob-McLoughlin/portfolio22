import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function handler (req, res) {
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

  const ordered = projects.sort(p => p.frontMatter.order).slice(0, 2)

  res.status(200).json({ projects: ordered })
}
