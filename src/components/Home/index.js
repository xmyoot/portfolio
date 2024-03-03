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
          ector
          <br />
          web developer
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
