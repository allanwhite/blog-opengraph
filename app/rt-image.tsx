import ContentfulImage from '../lib/contentful-image'
import Link from 'next/link'

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PostImage({
  title,
  url,
  slug,
}: {
  title: string
  url: string
  slug?: string
}) {
  const image = (
    <ContentfulImage
      alt={`Post Image for ${title}`}
      priority
      width={1200}
      height={1000}
      className={cn('shadow-sm hover:shadow-lg transition-shadow duration-200', {
        '': slug,
      })}
      src={url}
    />
  )

  return (
    <figure>
      {image}
    <figcaption className='italic font-serif'>{title}</figcaption>
    </figure>
  )
// 
//   return (
//     <div className="sm:mx-0">
//       {slug ? (
//         <Link href={`/posts/${slug}`} aria-label={title}>
//           {image}
//         </Link>
//       ) : (
//         image
//       )}
//     </div>
//   )
}
