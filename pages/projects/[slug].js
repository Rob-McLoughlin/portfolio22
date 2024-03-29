import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GitHub, Figma, Box, ExternalLink, Android, Apple } from '@/atoms/Icon'
import SmallCard from '@/molecules/SmallCard'
import Head from 'next/head'
import Card from '@/molecules/Card'
import Image from 'next/image'
import RoleRow from '@/molecules/RoleRow'

const width = 'max-w-lg'
// this object will contain all the replacements we want to make
const components = {
  h2: props => (
    <h2 className={`text-h2 text-flamingo font-inter font-semibold mb-4`}>
      {props.children}
    </h2>
  ),
  h3: props => (
    <h3 className='text-h4 text-flamingo font-inter font-semibold mb-4'>
      {props.children}
    </h3>
  ),
  p: props => <p className={`text-ink text-body mb-10`}>{props.children}</p>,
  strong: props => (
    <strong className={`font-semibold`}>{props.children}</strong>
  ),
  ul: props => <ul className={`mb-10`}>{props.children}</ul>,
  ol: props => <ol className={`list-decimal pl-6 mb-10`}>{props.children}</ol>,
  img: props => (
    // height and width are part of the props, so they get automatically passed here with {...props}
    <div className='relative aspect-video w-full my-12'>
      <Image
        {...props}
        layout='fill'
        loading='lazy'
        objectFit='contain'
        alt={props.alt}
      />
    </div>
  ),
  video: props => (
    <div className='relative aspect-video w-full my-12'>
      <video controls muted playsInline autoPlay>
        <source src={props.src} type='video/mp4' />
      </video>
    </div>
  )
}

const PostPage = ({ frontMatter, mdxSource, otherProjects }) => {
  const { roles } = frontMatter
  return (
    <main className='relative mt-4 text-ink'>
      <Head>
        <title>Rob McLoughlin - {frontMatter.title}</title>
        <meta name='description' content={frontMatter.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex gap-x-4 mb-4 mt-32 max-w-lg mx-auto'>
        <div>
          <h1 className='text-title font-inter font-semibold mb-1'>
            {frontMatter.title}
          </h1>
          <span>
            {frontMatter.year} | {frontMatter.at}
          </span>
        </div>
        <div className='ml-auto flex gap-x-2 items-center'>
          {frontMatter.github_link && (
            <SmallCard href={frontMatter.github_link} icon={<GitHub />} />
          )}
          {frontMatter.figma_link && (
            <SmallCard href={frontMatter.figma_link} icon={<Figma />} />
          )}
          {frontMatter.ios_link && (
            <SmallCard href={frontMatter.ios_link} icon={<Apple />} />
          )}
          {frontMatter.android_link && (
            <SmallCard href={frontMatter.android_link} icon={<Android />} />
          )}
          {frontMatter.project_link && (
            <SmallCard
              href={frontMatter.project_link}
              icon={<ExternalLink />}
            />
          )}
        </div>
      </div>
      <div className='mb-9 max-w-lg mx-auto'>
        {roles &&
          Object.entries(roles).map(([key, value]) => (
            <RoleRow key={key} label={key} hadRole={value} />
          ))}
      </div>
      <article className='max-w-lg mx-auto'>
        <MDXRemote {...mdxSource} components={components} />
      </article>
      <section className='mt-24 border-t py-24 md:pb-0'>
        <h3 className='text-h3 font-inter font-semibold mb-4'>
          Other Projects
        </h3>
        <ul className='flex flex-col gap-6 md:grid md:grid-cols-2'>
          {otherProjects.map(({ slug, frontMatter: project }) => {
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

  const filtered = projects.filter(
    p => p.frontMatter.title !== frontMatter.title
  )

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      otherProjects: filtered.slice(0, 2)
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
