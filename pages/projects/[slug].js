import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PostPage = ({ frontMatter, mdxSource }) => {
  console.log(frontMatter)
  return (
    <main className='relative mt-24 px-4 pb-32'>
      <article className='mt-4 project-prose'>
        <MDXRemote {...mdxSource} />
      </article>
      <div className='block text-center mt-24'>
        <span className='font-outfit uppercase opacity-50'>End of Project</span>
      </div>
    </main>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('projects'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('projects', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
