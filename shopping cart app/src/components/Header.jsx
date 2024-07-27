import "../styles/Header.css";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

export const Header = ({ cart }) => {
  return (
    <>
      <div className="navbar">
        <div className="logo">Shop Cart</div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Cart"}>
              View Cart
              <span className="cart-count">{cart.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};


Header.propTypes = {
  length: PropTypes.number.isRequired,
  cart: PropTypes.string.isRequired,
 
};