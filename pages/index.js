import Head from 'next/head'
import Image from 'next/image'
import { Box, GitHub, Book, Figma, TrendLine } from '@/atoms/Icon'
import Card from '@/molecules/Card'
import WelcomePlate from '@/organisms/WelcomePlate'
import { useState, useEffect } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const jwt = require('jsonwebtoken')

const decodeTokenWithoutVerify = token => {
  let claim = false
  try {
    claim = jwt.decode(token)
  } catch (err) {
    console.log(err)
  }
  return claim
}

export default function Home ({ projects }) {
  const [showWelcome, setShowWelcome] = useState(false)
  const [invite, setInvite] = useState(null)

  useEffect(() => {
    const query = window.location.search
    if (!query.includes('welcome=')) {
      return
    }
    setShowWelcome(true)
    const authCookie = document.cookie
      .split(';')
      .find(c => c.trim().startsWith('access-token='))
    if (!authCookie) {
      return
    }
    const token = authCookie.split('=')[1]
    const claim = decodeTokenWithoutVerify(token)
    setInvite(claim)
  }, [])

  return (
    <div>
      <Head>
        <title>Rob McLoughlin</title>
      </Head>

      {showWelcome && (
        <WelcomePlate invite={invite} closeFn={() => setShowWelcome(false)} />
      )}

      <section id='intro'>
        <div className='mb-4 flex justify-between md:flex-row-reverse md:justify-end md:items-center md:gap-x-4'>
          <div>
            <h1 className='homepage-title font-inter font-semibold text-h1 text-ink'>
              Rob McLoughlin
            </h1>
            <span>Senior Product Designer</span>
          </div>
          <div className='-mt-4 md:mt-0'>
            <Image alt='My face' src='/profile.png' width={64} height={64} />
          </div>
        </div>
        <summary className='block'>
          <p className='mb-4 md:w-1/2'>
            I am a researcher, designer and strategist from Dublin, Ireland. I
            help companies make great experiences. My work has been used by
            millions of users over the past six years.
          </p>
        </summary>
      </section>

      <section
        id='jump-off'
        className='py-16 flex flex-col gap-6 md:grid md:grid-cols-2'
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
          icon={<TrendLine />}
          title='Mentoring'
          href='https://ux-tree.com/rob'
          body='I am a mentor with the UX Tree, where I help other designers learn and develop.'
        />
        <Card
          icon={<Figma />}
          title='Figma'
          href='/figma'
          body='Live Figma files for you to see how I use Atomic Design and components.'
        />
      </section>

      <section id='projects' className='py-8'>
        <h2 className='mb-4 font-inter font-semibold text-ink text-h1'>
          Recent Projects
        </h2>
        <p className='md:w-1/2 mb-6'>
          Here is a write up of some recent projects that I have worked on.
        </p>
        <ul className='flex flex-col gap-6 md:grid md:grid-cols-2'>
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
    },
    revalidate: 1
  }
}
