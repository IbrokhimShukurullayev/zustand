import React from 'react'
import "./header.scss"

import { IoBookOutline } from "react-icons/io5";
import { FaHeart , FaShoppingCart , FaRegSmile } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='header'>
        <div className="container">
            <div className="nav">
                <div className="nav__logo">
                    <Link to={`/`}>AliExpress</Link>
                </div>
                <div className="nav__right">
                    <div className="nav__right-katalog">
                        <IoBookOutline/>
                        <p>Каталог</p>
                    </div>
                    <div className="nav__right-search">
                        <input type="text" placeholder='Serching...' />
                        <button>Найти</button>
                    </div>
                    <Link to={`/favourite`} className="nav__right-wishlist">
                        <FaHeart/>
                        <p>Wishlist</p>
                    </Link>
                    <Link to={`karzinka`} className="nav__right-cart">
                        <FaShoppingCart/>
                        <p>Корзина</p>
                    </Link>
                    <div className="nav__right-log">
                        <FaRegSmile/>
                        <p>Войти</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header