"use client"

import { getProductData } from "./Backend/DataManager";
import Navbar from "./components/navbar";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartItem } from "./state/modules/cartSlice";

export default function ProductsPage() {

  const chosenIds = useSelector((state) => state.cart.productIds)
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const ADD_STRING = "Add";
  const ADDED_STRING = "Added";

  useEffect(() => {
    const fetchProductData = async () => {
      const productData = await getProductData();
      setProducts(productData);
    }

    fetchProductData();
  }, [])

  const onAddToCartClick = (productId, image, title, price) => {
    if(chosenIds.find((id) => id === productId)) {
      dispatch(removeCartItem(productId));
    }

    else {
      dispatch(addToCart({
        id: productId,
        image: image,
        title: title,
        price: price
      }))
    }
  }

  const populateProducts = () => {
    return (
      <>
        {
          products.map((item) => {
            return (
              <div className="product-card" key={item.id}>
                <div className="product-image-container">
                  <img className="product-image" src={item.image} />
                </div>
                <div className="product-info-container">
                  <div className="product-desc-container">
                    <h4 className="product-desc">{item.title}</h4>
                  </div>
                  <div>

                  </div>
                  <div className="add-to-cart-container">
                    <div className="price-container">
                      <h3>{USDollar.format(item.price)}</h3>
                    </div>
                    <div className={!chosenIds.find((id) => id === item.id) ? "add-to-cart-button" : "add-to-cart-button added-to-cart-button"} onClick={() => {
                      onAddToCartClick(item.id, item.image, item.title, item.price);
                    }}>
                      <IoCartOutline className="add-to-cart-icon" />
                      <span className="add-to-cart-desc">{chosenIds.find((id) => id === item.id)? ADDED_STRING : ADD_STRING}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="product-display-container">
        {populateProducts()}
      </div>
    </div>
  );
}
