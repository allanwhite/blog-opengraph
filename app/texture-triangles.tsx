const textureTriangles = () => {
    return (

      // <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 530 65'>
      //   <g fill='#000' clipPath='url(#a)'>
      //     <path d='M40 33l22 31H17l23-31zm89 0l22 31h-44l22-31zm178 0l23 31h-45l22-31zM151 1l22 32h-44l22-32zm245 32l23 31h-45l22-31zM240 1l23 32h-45l22-32zm246 32l22 31h-45l23-31zM330 1l22 32h-45l23-32zM173 33l23 31h-45l22-31zm90 0l22 31h-45l23-31zM107 1l22 32H84l23-32zm245 32l22 31h-44l22-31zM196 1l22 32h-45l23-32zm245 32l22 31h-44l22-31zm89 0l22 31h-44l22-31zM374 1l22 32h-44l22-32z'></path>
      //   </g>
      //   <defs>
      //     <clipPath id='a'>
      //       <path fill='#fff' d='M0 1h530v64H0z'></path>
      //     </clipPath>
      //   </defs>
      // </svg>
      
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 530 64'>
        <g clipPath='url(#a)'>
          <mask
            id='b'
            width='536'
            height='64'
            x='17'
            y='1'
            maskUnits='userSpaceOnUse'
            style={{ maskType: "alpha" }}
          >
            <path
              fill='#fff'
              d='M40 33l22 31H17l23-31zm89 0l22 31h-44l22-31zm178 0l23 31h-45l22-31zM151 1l22 32h-44l22-32zm245 32l23 31h-45l22-31zM240 1l23 32h-45l22-32zm246 32l22 31h-45l23-31zM330 1l22 32h-45l23-32zM173 33l23 31h-45l22-31zm90 0l22 31h-45l23-31zM107 1l22 32H84l23-32zm245 32l22 31h-44l22-31zM196 1l22 32h-45l23-32zm245 32l22 31h-44l22-31zm89 0l22 31h-44l22-31zM374 1l22 32h-44l22-32z'
            ></path>
          </mask>
          <g mask='url(#b)'>
            <path
              fill='url(#c)'
              d='M559-28h144v551H559z'
              transform='rotate(90 559 -28)'
            ></path>
          </g>
        </g>
        <defs>
          <linearGradient
            id='c'
            x1='572'
            x2='766.7'
            y1='468.2'
            y2='428.8'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#D260CA'></stop>
            <stop offset='0.5' stopColor='#7E4DFD'></stop>
            <stop offset='1' stopColor='#0C8EB3'></stop>
          </linearGradient>
          <clipPath id='a'>
            <path fill='#fff' d='M0 0h530v64H0z'></path>
          </clipPath>
        </defs>
      </svg>
      );
    };

export default textureTriangles;

