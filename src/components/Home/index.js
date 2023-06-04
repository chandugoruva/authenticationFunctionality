import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = props => (
  <div className="bg-color">
    <Header />
    <h1 className="headingHome">Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
