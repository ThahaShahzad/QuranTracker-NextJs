import { Global } from '@emotion/react'
const Fonts = () => (
  <Global
    styles={`
      /* Alaska */
      @font-face {
        font-family: Alaska;
        src: url('./alaska.ttf') format('truetype');
        font-display: swap;
      }
      `}
  />
)
export default Fonts
