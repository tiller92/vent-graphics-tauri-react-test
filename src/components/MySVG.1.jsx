export function MySVG({ cx, cy }) {

  return (

    <svg width="1280" height="832" viewBox="0 0 1280 832" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 " fill="none" stroke="#444cf7" stroke-width="4" />
      <g fill="#444cf7">
        <circle cx={cy} cy={cx} r="4" />
      </g>
      <rect width="1280" height="832" fill="#E5E5E5" />
      <g clip-path="url(#clip0_0_1)">
        <rect width="1280" height="832" fill="white" />
        <g filter="url(#filter0_d_0_1)">
          <rect width="1280" height="832" fill="url(#paint0_linear_0_1)" shape-rendering="crispEdges" />
          <rect x="0.5" y="0.5" width="1279" height="831" stroke="black" shape-rendering="crispEdges" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_0_1" x="-4" y="0" width="1288" height="840" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_0_1" x1="640" y1="0" x2="640" y2="832" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9EE2EB" stop-opacity="0" />
          <stop offset="0.175" stop-color="#7AD6E3" stop-opacity="0.381944" />
          <stop offset="0.72" stop-color="#40C4D6" />
        </linearGradient>
        <clipPath id="clip0_0_1">
          <rect width="1280" height="832" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
}