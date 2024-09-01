import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Logo from './Logo'
import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['e', 'c', 't', 'o', 'r']
  const jobArray = [
    'E',
    'l',
    'e',
    'c',
    't',
    'r',
    'i',
    'c',
    'a',
    'l',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={logo} alt="Electrical Engineer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={17}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={17}
          />
        </h1>
        <h2>
          Passionate about hardware engineering, open-source software, and
          robotics
        </h2>
        <Link to="/portfolio" className="flat-button portfolio-button">
          PORTFOLIO
        </Link>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
      <Loader type="pacman" />
    </div>
  )
}
export default Home
