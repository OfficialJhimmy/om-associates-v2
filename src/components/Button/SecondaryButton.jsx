import { Link } from "react-router-dom"
import './index.css'

// eslint-disable-next-line react/prop-types
const SecondaryButton = ({ title, url }) => {
  return (
      <Link to={url}>
        <button className="button__wrapper--secondary">
          {title}
        </button>
      </Link>
  )
}

export default SecondaryButton