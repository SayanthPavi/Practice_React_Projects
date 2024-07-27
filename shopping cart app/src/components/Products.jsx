import { cartContext } from './CartContext';
import { useContext } from "react";
import "../styles/Product.css";

import PropTypes from 'prop-types';


export const Products = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  const title =
    product.title.length > 20
      ? product.title.substring(0, 35) + " ..."
      : product.title;

  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };
  return (
    <>
      <div className="product">
        <div className="product-img">
          <img src={product.image} alt="" />
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p>Price Rs: {product.price}</p>
          {/* condition add btn and remove btn  */}
          {cart.includes(product) ? (
            <button className="btnRemove" onClick={removeCart}>
              Remove from cart
            </button>
          ) : (
            <button onClick={addCart}>Add to Cart</button>
          )}
        </div>
      </div>
    </>
  );
};


Products.propTypes = {
  product: PropTypes.string.isRequired,
 
};