import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={logo} alt="developer" />
          Hector
          <br />
          web developer
          <h2>Frontend Developer / Javscript Expert / Youtuber </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </h1>
      </div>
    </div>
  )
}
export default Home
