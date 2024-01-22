import { Link } from "react-router-dom"
import './index.css'

// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ title, url }) => {
  return (
      <Link to={url}>
        <button className="button__wrapper">
          {title}
        </button>
      </Link>
  )
}

export default PrimaryButton