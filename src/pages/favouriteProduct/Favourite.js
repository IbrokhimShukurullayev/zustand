import React , {useEffect , useState} from 'react'
import "./favourite.scss"

import axios from "axios"

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import star from "../../assets/images/str.png"

import { FaRegHeart , FaHeart } from "react-icons/fa";

import { useDispatch } from 'react-redux'
import { toogleWishes } from '../../context/wishestSlice'

import Empty from "../../components/empty/Empty"

const API_URL = "https://fakestoreapi.com/products/"

const Favourite = () => {
        const dispatch = useDispatch()
    const [data , setData] = useState([])
    const wishes = useSelector(state => state.wishlist.value)
    console.log(wishes);

  
useEffect(()=> {
        axios
        .get(API_URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    let products = wishes?.map(el=> (
        <div key={el.id} className="card">
            <div className="card__img">
                <Link to={`/single/${el.id}`}><img title={el.description} src={el.image} alt="" /></Link>
            </div>
            <button onClick={() => dispatch(toogleWishes(el))} className='card__like'>
                {
                    wishes.some(w => w.id === el.id) ? <FaHeart/> :
                <FaRegHeart/> 
                }
            </button>
            <div className="card__body">
                <h2 title={el.title} className="card__title">
                    {el.title}
                </h2>
                
                <div className="card__prices">
                    <h3>${el.price}</h3>
                    <img src={star} alt="" />
                    <h4>({el.rating.rate})</h4>
                </div>
            </div>
        </div>
    ))
  return (
    <div className='wishes'>
    <h2>Wishes</h2>
     <div className='row container'>
    {
        wishes.length ? products : <Empty/>
    }
    </div>
    </div>
  )
}

export default Favourite