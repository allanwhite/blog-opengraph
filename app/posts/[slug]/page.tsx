import Link from 'next/link'
import Logo from '../../logo'
import { draftMode } from 'next/headers'

import MoreStories from '../../more-stories'
import Avatar from '../../avatar'
import Date from '../../date'
import CoverImage from '../../cover-image'

import { Markdown } from '@/lib/markdown'
import { getAllPosts, getPostAndMorePosts } from '@/lib/api'

// aubries stuff
import { Metadata, ResolvingMetadata } from 'next'
import { BASE_URL, ogImageParams } from '@/lib/constants'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // const id = params.id
  // fetch data
  //const product = await fetch(`https://.../${id}`).then((res) => res.json())
  const { isEnabled } = draftMode()
  const { post } = await getPostAndMorePosts(params.slug, isEnabled)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
//  const dynamicOGImage = await. || []

  return {
    metadataBase: new URL(`${process.env.PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}`),
    alternates: {
      canonical: '/',
    },
    title: post.title,
    description: post.excerpt,
    icons: {
      icon: '/favicons/favicon-16x16.png',
      shortcut: '/favicons/favicon-32x32.png',
      apple: '/favicons/apple-touch-icon.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicons/apple-touch-icon.png',
      },
    },
    openGraph: {
      //images: [`${process.env.PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${post.title}&date=${post.date}&entryImage=${post.coverImage.url}?${ogImageParams}`, ...previousImages],
      images: [
        { url: `${process.env.PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${post.title}&date=${post.date}&entryImage=${post.coverImage.url}?${ogImageParams}` },
        ...previousImages,
      ]
    },
  }
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false)

  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { isEnabled } = draftMode()
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled)

  return (
    <div className="container mx-auto px-5">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="">
          <Logo></Logo>
        </Link>
      </h2>
      <article>
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {post.title}
        </h1>
        <div className="hidden md:block md:mb-12">
          {post.author && (
            <Avatar name={post.author.name} picture={post.author.picture} role={post.author.role} />
          )}
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0 aspect-video object-cover overflow-hidden rounded-lg">
          <CoverImage title={post.title} url={post.coverImage.url} />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="block md:hidden mb-6">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} role={post.author.role} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={post.date} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="prose">
            <Markdown content={post.content} />
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24" />
      <MoreStories morePosts={morePosts} />
    </div>
  )
}
