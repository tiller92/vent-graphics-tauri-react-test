export function MySVG({ cx, cy }) {
  const currentRange = 50;
  const currentDomain = 10;
  console.log('cx:', cx, 'cy:', cy);

  return (
    <div className="flex justify-center mt-20">
      <svg height="500" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1280" height="832" fill="#E5E5E5" />
        <g clip-path="url(#clip0_0_1)">
          <rect width="1280" height="832" fill="white" />
          <g filter="url(#filter0_d_0_1)">
            <rect width="1280" height="832" fill="url(#paint0_linear_0_1)" shape-rendering="crispEdges" />
            <rect x="0.5" y="0.5" width="1279" height="831" stroke="black" shape-rendering="crispEdges" />
          </g>
        </g>
        <g fill="#444cf7">
          <circle cy={cx} cx={cy} r="5" />
        </g>
        <defs>
          <filter id="filter0_d_101_3" x="0" y="0" width="1008" height="508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_3" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_3" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_101_3" x1="504" y1="0" x2="504" y2="500" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0580C5" stop-opacity="0" />
            <stop offset="0.72" stop-color="#3377C7" />
          </linearGradient>
        </defs>
        <line x1="600" y1="1000" x2="0" y2="0" stroke="black" />
        <line x1="10" y1="1000" x2="0" y2="0" stroke-width="3" stroke="white" />
      </svg>
    </div>

  );
}
