import Head from 'next/head'
import Image from 'next/image'
import { Degree, Clock, Box, GitHub, Book, Figma } from '@/atoms/Icon'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Card from '@/molecules/Card'
import QuickLink from '@/molecules/QuickLink'

export default function Home ({ projects }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section id='intro'>
        <div className='mb-4 flex justify-between md:flex-row-reverse md:justify-end md:items-center md:gap-x-4'>
          <div>
            <h1 className='homepage-title font-outfit text-h1 text-ink'>
              Rob McLoughlin
            </h1>
            <span>Product Design @ Chupi &amp; Human</span>
          </div>
          <div className='-mt-4 md:mt-0'>
            <Image alt='My face' src='/profile.png' width={64} height={64} />
          </div>
        </div>
        <summary className='block'>
          <p className='mb-4 md:w-1/2'>
            I am a designer and developer from Dublin with 5 years experience
            defining problems and solving them through data-driven designs and
            good infastructure.
          </p>
        </summary>
      </section>

      <section
        id='jump-off'
        className='py-24 flex flex-col gap-6 md:grid md:grid-cols-2'
      >
        <Card
          icon={<Box />}
          title='Projects &amp; Work'
          body='Some of my work from Chupi and Human along with some free time projects'
          href='/projects'
        />
        <Card
          icon={<GitHub />}
          title='Code'
          href='/code'
          body='Good experiences start at the code level with efficient, best-practice code.'
        />
        <Card
          icon={<Book />}
          title='Books'
          href='/books'
          body='Some books I’ve read recently and liked. Pulled from my own personal Notion.'
        />
        <Card
          icon={<Figma />}
          title='Figma'
          href='/figma'
          body='Live Figma files for you to see how I use Atomic Design and components.'
        />
      </section>

      <section id='projects' className='py-8'>
        <h2 className='mb-4 font-outfit text-ink text-h1'>Recent Projects</h2>
        <p className='md:w-1/2 mb-6'>
          Here is a write up of some recent projects that I’ve done.
        </p>
        <ul className='md:grid md:grid-cols-2 gap-6'>
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

  const ordered = projects.sort(p => p.frontMatter.order).slice(0, 2)

  return {
    props: {
      projects: ordered
    }
  }
}
