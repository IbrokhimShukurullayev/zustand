import React from 'react'
import "./hero.scss"
import hero from "../../assets/images/Screenshot 2024-05-22 152210.png"

import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div id='hero'>
        <div className="container hero">
            {/* <div className="hero__left">
                <h2>Одна цена</h2>
                <p>При заказе от 3 до 10 товаров</p>
                <button>Купить <FaAngleRight/> </button>
            </div>
            <div className="hero__right">
                <img src={hero} alt="" />
            </div> */}
            <div className='hero__button'>
              <button>Горящие товары</button>
              <button>Одна цена</button>
            </div>
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero