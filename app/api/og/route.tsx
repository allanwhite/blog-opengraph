import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.
import Logo from '../../logo'

export const runtime = 'edge';
 
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
 
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'
    const pubDate = searchParams.get('date') ?? "Some date"
    
    const serifFont = fetch(
      new URL('Brygada1918-Regular.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())
    const serifFontData = await serifFont;

    const sansFont = fetch(
      new URL('PublicSans-Bold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())
    const sansFontData = await sansFont;
    
    //console.log(serifFont);


    const image = await fetch(new URL('opengraph-image-bg.png', import.meta.url)).then(
      (res) => res.arrayBuffer(),
    );

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
            src={image}
              style={{
                display: 'flex',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
          />
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              right: '3rem',
              top: '3rem',
              color: 'white',
            }}
          >
          <Logo></Logo>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 40,
              margin: '2.5em 2em',
              color: 'white',
              padding: 0,
              lineHeight: 1.3,
              whiteSpace: 'pre-wrap',
              textShadow: '2px 2px 6px hsl(0 0% 0% / 0.6)',
            }}
          >
            <div
              style={{
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontFamily: 'Public',
              }}
              >
              Blog
            </div>
            <div
              style={{
                letterSpacing: '-0.05em',
                fontFamily: 'Brygada',
                fontSize: '5rem',
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
            name: 'Brygada',
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