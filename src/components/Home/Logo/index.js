import { useRef } from 'react'
// import gsap from 'gsap-trial'
// import logo from '../../../assets/images/logo.png'
// import logoOutline from '../../../assets/images/logoOutline4.svg'
import './index.scss'
// import { useGSAP } from '@gsap/react'
// import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
const Logo = () => {
  // const outlineLogoRef = useRef()
  // useGSAP(
  //   () => {
  //     gsap.registerPlugin(DrawSVGPlugin)
  //     gsap.timeline({ repeat: -1 }).to(outlineLogoRef.current, {
  //       duration: 10,
  //       drawSVG: 1,
  //     })
  //   },
  //   { scope: outlineLogoRef }
  )
  return (
    <div className="logo-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        zoomAndPan="magnify"
        viewBox="0 0 375 374.999991"
        height="500"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <path
          // ref={outlineLogoRef}
          stroke-linecap="butt"
          transform="matrix(2.222343, 0, 0, 2.222343, 94.419644, -10.567903)"
          fill="none"
          stroke-linejoin="miter"
          d="M 44.066961 99.186867 L 28.110409 99.186867 L 28.110409 160.000348 L 7.606644 160.000348 L 7.606644 20.330424 L 28.110409 20.330424 L 28.110409 78.127664 L 44.066961 78.127664 L 44.066961 20.330424 L 64.616426 20.330424 L 64.616426 160.000348 L 44.066961 160.000348 Z M 44.066961 99.186867 "
          stroke="#f8f9fa"
          stroke-width="4.275"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </svg>

      {/* <img src={logoOutline} /> */}
    </div>
  )
}
export default Logo
