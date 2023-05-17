import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

import './navbar.css'

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_containers">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt">What is GPT?</a>
          </p>
          <p>
            <a href="#posibility">OpenAI</a>
          </p>
          <p>
            <a href="#feature">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
