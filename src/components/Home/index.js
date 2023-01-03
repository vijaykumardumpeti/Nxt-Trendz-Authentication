import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="second-container-1">
      <div className="second-container-1-1">
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air it can serve as protection from the
          elements, rough surfaces, sharp stones, rash-causing plants, insect
          bites, by providing a barrier between the skin and the environment.
          Clothing can insulate against cold or hot conditions, and it can
          provide a hygienic barrier, keeping infectious and toxic materials
          away from the body. It can protect feet from injury and discomfort or
        </p>
        <button type="button">Shop Now</button>
      </div>

      <div className="second-container-1-2">
        <img
          className="candidate-image"
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        />
      </div>
    </div>
  </>
)

export default Home
