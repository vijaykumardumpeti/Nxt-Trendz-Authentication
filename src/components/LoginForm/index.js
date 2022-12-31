import './index.css'

const LoginForm = () => (
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
        <form>
          <div className="userName-container">
            <label htmlFor="username">USERNAME</label>
            <input className="input-element" id="username" type="text" />
          </div>

          <div className="password-container">
            <label htmlFor="password">PASSWORD</label>
            <input className="input-element" id="password" type="password" />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  </>
)
export default LoginForm
