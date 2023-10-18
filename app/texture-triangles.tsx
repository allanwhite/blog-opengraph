const textureTriangles = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 702 86'>
          <g clipPath='url(#a)'>
            <mask
              id='b'
              width='729'
              height='87'
              x='4'
              y='0'
              maskUnits='userSpaceOnUse'
              style={{ maskType: "alpha" }}
            >
              <path
                fill='#fff'
                d='M35 43l30 43H5l30-43zm121 0l31 43h-61l30-43zm243 0l30 43h-60l30-43zM187 0l30 43h-61l31-43zm333 43l31 43h-61l30-43zM308 0l30 43h-60l30-43zm334 43l30 43h-61l31-43zM429 0l31 43h-61l30-43zM217 43l30 43h-60l30-43zm121 0l31 43h-61l30-43zM126 0l30 43H96l30-43zm334 43l30 43h-61l31-43zM247 0l31 43h-61l30-43zm334 43l30 43h-60l30-43zm121 0l31 43h-61l30-43zM490 0l30 43h-60l30-43z'
              ></path>
            </mask>
            <g mask='url(#b)'>
              <path
                fill='url(#c)'
                d='M742-40h195v751H742z'
                transform='rotate(90 741 -40)'
              ></path>
            </g>
          </g>
          <defs>
            <linearGradient
              id='c'
              x1='759.3'
              x2='1024.2'
              y1='635.7'
              y2='582'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D260CA'></stop>
              <stop offset='0.5' stopColor='#7E4DFD'></stop>
              <stop offset='1' stopColor='#0C8EB3'></stop>
            </linearGradient>
            <clipPath id='a'>
              <path fill='#fff' d='M0 0h702v86H0z'></path>
            </clipPath>
          </defs>
        </svg>
      );
    };

export default textureTriangles;

