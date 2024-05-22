import React from 'react'
import "./notFound.scss"

import notFound from "../../assets/images/notFound.png"
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container notfound'>
        <img src={notFound} alt="" />
        <h2 className="notfound__title">
            Oops, page not found
        </h2>
        <p className="notfound__text">
            The page you are trying to access has restricted access. <br /> Please refer to your system administrator
        </p>
        <NavLink to={`/`} className="notfound__link">
            Back to HomePage
        </NavLink>
    </div>
  )
}

export default NotFound