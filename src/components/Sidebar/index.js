import './index.scss'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import logoSubtitle from '../../assets/images/logoSubtitle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" alt="logo">
        <img src={logo} alt="logo" />
        <img className="sub-logo" src={logoSubtitle} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" to="/" activeClassName="active">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
    </div>
  )
}
export default Sidebar
