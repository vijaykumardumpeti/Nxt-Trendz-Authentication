import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <img
        className="nav-image"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <ul className="header-items-container">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <button className="logout-button" type="button">
          Logout
        </button>
      </ul>
    </div>
  </>
)

export default Header
