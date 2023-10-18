import Link from 'next/link'
import Logo from './logo'
import { draftMode } from 'next/headers'

import Date from './date'
import CoverImage from './cover-image'
import Avatar from './avatar'
import MoreStories from './more-stories'

import { getAllPosts } from '@/lib/api'
import { CMS_NAME, CMS_URL, BASE_URL } from '@/lib/constants'

export const metadata = {
  metadataBase: new URL(`${process.env.PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}`),
  alternates: {
    canonical: '/',
  },
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
  openGraph: {
    title: 'OpenGraphika',
    description: 'OpenGraphika is a demo of Vercel/OG library for generating bitmap images.',
    images: [
      {
        url: `${process.env.PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/images/opengraph-image.jpg`,
        width: 1200,
        height: 670,
      },
      {
        url: `${process.env.PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/images/twitter-image.jpg`,
        width: 1200,
        height: 670,
        alt: 'Twitter share image',
      },
    ],
  },
  icons: {
    icon: '/favicons/favicon-16x16.png',
    shortcut: '/favicons/favicon-32x32.png',
    apple: '/favicons/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicons/apple-touch-icon.png',
    },
  },
}

function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="font-serif italic text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Logo></Logo>
      </h1>
      <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
        An Open Graph enabled blog{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </h2>
    </section>
  )
}

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string
  coverImage: any
  date: string
  excerpt: string
  author: any
  slug: string
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16 aspect-video object-cover overflow-hidden rounded-lg">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="font-serif font-bold mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} role={author.role} />}
        </div>
      </div>
    </section>
  )
}

export default async function Page() {
  const { isEnabled } = draftMode()
  const allPosts = await getAllPosts(isEnabled)
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <div className="container mx-auto px-5">
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} />
    </div>
  )
}
