import ContentfulImage from '@/lib/contentful-image'

export default function Avatar({
  name,
  role,
  picture,
}: {
  name: string
  role: string
  picture: any
}) {
  return (
    <div className="flex items-center">
      <div className="mr-4 w-12 h-12">
        <ContentfulImage
          alt={name}
          className="object-cover h-full rounded-full"
          height={48}
          width={48}
          src={picture.url}
        />
      </div>
      <div className="flex items-start flex-col leading-tight">
        <div className="text-lg font-bold">{name}</div>
        <div className="text-md font-normal">{role}</div>
      </div>
    </div>
  )
}
