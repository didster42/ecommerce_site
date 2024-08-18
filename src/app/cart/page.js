"use client"

import Navbar from "../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, emptyCart } from "../state/modules/cartSlice";

export default function Home() {

  const products = useSelector((state) => state.cart.items)
  const dispatch = useDispatch();

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const populateCardCards = () => {
    return (
      <>
        {
          products.map((product) => {
            return (
              <div className="cart-card-box">
                <div className="cart-card-image-container">
                  <img className="cart-card-image" src={product.image}/>
                </div>
                <div className="cart-card-info-container">
                  <h3 className="cart-card-heading">{product.title}</h3>
                  <h5 className="cart-card-cost">{USDollar.format(product.price)}</h5>
                  <div className="cart-card-value-change-container">
                    
                  </div>
                </div>
              </div>
            )
          })
        }
      </>
    )
  }

  const onClearCartClicked = () => {
    dispatch(emptyCart);
  }

  return (
      <>
        <Navbar />
      <div className="cart-body-container">
        <div className="cart-page-container">
          <div className="shopping-cart-container">
            <h1>Your Shopping Cart</h1>
            <span className="clear-shopping-cart-button" onClick={onClearCartClicked}>Clear Shopping Cart</span>
            <div className="cart-items-container">
              {populateCardCards()}
            </div>
          </div>
          <div className="cart-cost-container">

          </div>
        </div>
      </div>
      </>
  );
}
