import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.
// import Logo from '../../logo'
//import DateComponent from '../../date'
import Date from '../../date'
// import ContentfulImage from '../../../lib/contentful-image'
import { ogImageParams } from '@/lib/constants';
import LogoWide from '@/app/logo-white';
import TextureTriangles from '@/app/texture-triangles';

export const runtime = 'edge';
 
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'OpenGraphika Post'

    const publishDate =
      searchParams.get('date') || 'today';

    // const hasDate = searchParams.get('date')
    // const articleDate = hasDate
    //   ? searchParams.get('date')?.toString
    //   : 'Today'
    //const hasImage = searchParams.has('')
    const defaultImageRemote = `https://images.ctfassets.net/col7w9urljg1/3SkQKUUagpav7v1FkFtJ50/7e72bfa8c1d8bf66a8e94eaa883b9889/Bonneville_Flats_Sunset-18.jpg?${ogImageParams}`
    const hasImage = searchParams.has('entryImage'); // passed from slug route
    const entryImage = hasImage
      ? searchParams.get('entryImage')
      : defaultImageRemote

      console.log(entryImage + ogImageParams);

    const image = await fetch(new URL(defaultImageRemote, import.meta.url)).then(
      (res) => res.arrayBuffer(),
    );

    const serifFont = fetch(
      new URL('../../../public/fonts/Besley-Regular.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());
    const serifFontData = await serifFont;

    const sansFont = fetch(
      new URL('../../../public/fonts/PublicSans-Bold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());
    const sansFontData = await sansFont;    
    //console.log(serifFont);

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'left',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            backgroundColor: 'black',
            // backgroundImage: 'url(`${imageData}`)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img 
            width="1200" height="680" 
            // @ts-ignore 
            src={entryImage}
              style={{
                display: 'flex',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.8,
              }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '70%',
              backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 14%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
            }}
          >
          </div>
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              right: '4rem',
              top: '4rem',
              color: 'white',
            }}
          >
          <LogoWide></LogoWide>
          </div>
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: 0,
              right: '0rem',
            }}
          >
          <TextureTriangles></TextureTriangles>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '8rem 6.5rem',
              color: 'white',
              padding: 0,
              whiteSpace: 'pre-wrap',
              textShadow: '2px 2px 6px hsl(0 0% 0% / 0.6)',
            }}
          >
            <div
              style={{
                display: 'flex',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '0.2rem',
                fontWeight: 'bold',
                fontFamily: 'Public',
                fontSize: '2rem',
              }}
              >
              Blog
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: '1.5rem',
                fontWeight: 'light',
                fontFamily: 'Public',
                letterSpacing: '0em',
                opacity: 1,
                marginBottom: '0.5rem',
              }}
              >
              <Date dateString={publishDate} />
            </div>
            <div
              style={{
                display: 'flex',
                letterSpacing: '0em',
                lineHeight: 0.85,
                marginBottom: '0rem',
                fontFamily: 'Besley',
                fontSize: '4rem',
              }}
              >
                {title}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts:[
          {
            name: 'Besley',
            data: await serifFontData,
            style: 'normal',
            weight: 400,
          },
          {
            name: 'Public',
            data: await sansFontData,
            style: 'normal',
            weight: 700,
          },
        ]
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}