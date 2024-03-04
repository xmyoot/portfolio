import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimtedLetters'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['e', 'c', 't', 'o', 'r']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
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
          <img src={logo} alt="JavaScript Developer Name, Web Developer Name" />
          <span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </span>
          <br />
          <span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </span>
        </h1>
        <h2>Frontend Developer / React Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}
export default Home
