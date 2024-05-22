import React from 'react'
import photo from "../../assets/images/1f937-2642.png"
import "./empty.scss"

function Empty() {
  return (
    <div className='empty'>
        <img src={photo} width={250} alt="" />
        <h2>Empty</h2>
    </div>
  )
}

export default Empty