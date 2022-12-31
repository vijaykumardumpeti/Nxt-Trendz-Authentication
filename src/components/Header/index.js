import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <img
        className="nav-image"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <div className="header-items-container">
        <p>Home</p>
        <p>Products</p>
        <p>Cart</p>
        <button className="logout-button" type="button">
          Logout
        </button>
      </div>
    </div>
  </>
)

export default Header
