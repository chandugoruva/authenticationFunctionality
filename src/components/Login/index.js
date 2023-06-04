import {Link, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  onSuccess = jwt => {
    const {history} = this.props
    Cookies.set('jwt_token', jwt, {expires: 30})
    history.replace('/')
  }

  onClickPage = async () => {
    const userData = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    }
  }

  render() {
    const jwt1 = Cookies.get('jwt_token')
    if (jwt1 !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Link to="/login" className="link">
        <div className="bg-color">
          <h1 className="heading">Please Login</h1>
          <button type="button" onClick={this.onClickPage}>
            Login with Sample Creds
          </button>
        </div>
      </Link>
    )
  }
}

export default Login
