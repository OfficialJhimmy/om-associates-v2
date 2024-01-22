import "./Error404.css";
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
const Error404 = () => {
  return (
    <>
      <div className="error404__container">
        <h2>404</h2>
        <p>Sorry, Page not found, please try other pages.</p>
        <Link to='/'>Home</Link>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
