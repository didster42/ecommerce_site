"use client"

import React, { useState } from 'react'
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    const SEARCH_PLACEHOLDER = "What would you like to buy?"

  return (
    <>
        <header className="main-header">
          <div className="header-logo-container">
            <div className="header-logo">
              <span className="header-logo-letter">
                S
              </span>
            </div>
          </div>
          <div className="header-search-container">
            <form className="header-search-form">
              <input type="text" placeholder={SEARCH_PLACEHOLDER} className="header-search-input"/>
            </form>
          </div>
          <div className="header-button-container">
            <Link className="header-button" href="/cart">
              <IoCartOutline />
              <span>
                Cart
              </span>
            </Link>
            <div className='item-counter'>
              <span className='item-counter-number'>
                {totalQuantity}
              </span>
            </div>
          </div>
        </header>
    </>
  )
}

export default Navbar