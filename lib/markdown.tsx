import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
//import CoverImage from '@/app/cover-image'
import RtImage from '@/app/rt-image'
import PostImage from '@/app/rt-image'

interface Asset {
  sys: {
    id: string
  }
  url: string
  description: string
}

interface AssetLink {
  block: Asset[]
}

interface Content {
  json: any
  links: {
    assets: AssetLink
  }
}

function RichTextAsset({
  id,
  assets,
}: {
  id: string
  assets: Asset[] | undefined
}) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    // using a dedicated component for body images
    //return <Image src={asset.url} layout="fill" alt={asset.description} />
    return (
      <PostImage
        url={asset.url}
        title={asset.description}
      />
    )
    // return <img src={asset.url} alt={asset.description} />
  }

  return null
}

export function Markdown({ content }: { content: Content }) {
  return documentToReactComponents(content.json, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
    },
  })
}
