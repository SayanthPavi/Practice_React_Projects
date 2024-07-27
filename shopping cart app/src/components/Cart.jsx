import React, { useEffect, useState } from "react";
import "../styles/Cart.css";

export const Cart = ({cart, setCart}) => {
    const [total, setTotal] = useState(0);
    useEffect (() =>{
        setTotal(cart.reduce((acc, curr)=> acc + parseInt(curr.price), 0));
    }, [cart])
  return (
    <>
    <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {
            cart.map((product)=>(
                <div className="cart-product" key={product.id}>
              <div className="product-img">
                <img src={product.image} alt="" />
              </div>
              <div className="cart-product-details">
                <h3>{product.title}</h3>
                <p>Price Rs : {product.price}</p>
              </div>
            </div>
            ))
        }

      </div>
      <h2 className="cart-amt">Total Amount Rs : {total}</h2>
    </>
  );
};
