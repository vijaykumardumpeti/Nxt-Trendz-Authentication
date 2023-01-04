import {Component} from 'react'
import './index.css'

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  onSubmitUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onSubmitPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailure = data => {
    console.log(data.error_msg)
    this.setState({
      errorMsg: data.error_msg,
    })

    console.log(data)
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    if (username !== '' && password === '') {
      this.setState({
        errorMsg: "*Username and Password didn't match",
      })
    }
    if (username === '' && password !== '') {
      this.setState({
        errorMsg: "*Username and Password didn't match",
      })
    }
    if (username === '' && password === '') {
      this.setState({
        errorMsg: "*Username and Password didn't match",
      })
    }

    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccess()
    } else {
      this.onFailure(data)
    }
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <>
        <div className="login-container">
          <img
            className="login-image"
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          />

          <div className="form-container">
            <img
              alt="website logo"
              className="trendz-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            />
            <form onSubmit={this.submitForm}>
              <div className="userName-container">
                <label htmlFor="username">USERNAME</label>
                <input
                  placeholder="Username"
                  value={username}
                  onChange={this.onSubmitUsername}
                  className="input-element"
                  id="username"
                  type="text"
                />
              </div>

              <div className="password-container">
                <label htmlFor="password">PASSWORD</label>
                <input
                  placeholder="Password"
                  value={password}
                  onChange={this.onSubmitPassword}
                  className="input-element"
                  id="password"
                  type="password"
                />
              </div>
              <button className="login-button" type="submit">
                Login
              </button>
              <p className="error-msg">{errorMsg}</p>
            </form>
          </div>
        </div>
      </>
    )
  }
}
