import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <ul className="li-items">
      <Link to="/">
        <li className="li">Home</li>
      </Link>
      <Link to="/about">
        <li className="li">About</li>
      </Link>
    </ul>
  </div>
)
export default Header
