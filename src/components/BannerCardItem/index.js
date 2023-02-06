// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="header-text">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
