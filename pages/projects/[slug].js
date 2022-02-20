import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

const PostPage = ({ frontMatter, mdxSource }) => {
  return (
    <main className='mx-auto relative mt-24 px-4 max-w-xl'>
      <Link href='/projects'>
        <a className='underline'>Projects /</a>
      </Link>
      <article className='project-prose'>
        <MDXRemote {...mdxSource} />
      </article>
      <div className='block text-center my-16'>
        <Link href='/projects'>
          <a className='underline'>View All Projects</a>
        </Link>
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
