import React , {useEffect , useState} from 'react'
import "./karzinka.scss"

import axios from "axios"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addCard } from '../../context/karzinkaSlice'
import { inCart } from '../../context/karzinkaSlice'
import { decCart } from '../../context/karzinkaSlice'
import { remove } from '../../context/karzinkaSlice'
import { clear } from '../../context/karzinkaSlice'

const API_URL = "https://fakestoreapi.com/products/"



const Karzinka = () => {
const [modal , setModal] =useState(false)
      const toggleModal = () => {
        setModal(!modal)
      }

      const [totalPrice, setTotalPrice] = useState(0);

    // ...
    const karzinka = useSelector(state => state.karzinka.value)

    useEffect(() => {
        // Karzinkadagi har bir mahsulotning umumiy narxini hisoblash
        let price = 0;
        karzinka.forEach(product => {
            price += product.price * product.quantity;
        });
        setTotalPrice(price);
    }, [karzinka]);

    const dispatch = useDispatch()
    const [data , setData] = useState([])
    console.log(karzinka);

    const handlsubmit =(el) => {
        if(el.quantity <= 1) {
            dispatch(remove(el))
        } else {
            dispatch(decCart(el))
        }
    }

    useEffect(()=> {
        axios
        .get(API_URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    let products = karzinka?.map (el => (
        <div key={el.id} className="karzinka__card"><div>
                <img src={el.image} alt="" />
                <h3>{el.title}</h3>
            </div>
            <h3>${el.price}</h3>
            <div>
                <button onClick={() => dispatch(inCart(el))} >+</button>
                <span>{el.quantity}</span>
                <button  onClick={() => handlsubmit(el)}>-</button>
            </div>
            <h3>${(el.price * el.quantity).toFixed(1)}</h3>
        </div>
    ))
  return (
    <>
        <div id="karzinka">
            <div className="container karzinka">
                <p className='karzinka__text'>Home / <span>Cart</span></p>
                <div className="karzinka__template">
                    <h3>Product</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                    <h3>Subtotal</h3>
                </div>
                <div className="div">
                    <button onClick={() => dispatch(clear())} className="clear">
                        Clear All
                    </button>
                </div>
                <div className="karzinka__row">
                    {
                        products
                    }
                </div>
                <div className="karzinka__button">
                    <button>Return To Shop</button>
                    <button>Update Cart</button>
                </div>
                <div className="karzinka__price">
                    <div className="karzinka__price__promocod">
                        <input type="text" placeholder='Voucher code' />
                        <button>Redeem</button>
                    </div>
                    <div className="karzinka__price__all">
                        <ul>
                            <li><h2>Subtotal</h2> <p>$998</p></li>
                            <li><h2>Shipping fee</h2> <p>$20</p></li>
                            <li><h2>Coupon</h2> <p>No</p></li>
                        </ul>
                        <div>
                            <h2>TOTAL</h2>
                            <p><p>{totalPrice.toFixed(1)}</p></p>
                        </div>
                        <button onClick={toggleModal}>Check out</button>
                    </div>
                </div>
            </div>
        </div>
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form className="create__user-form" action="">
              <input
                type="text"
                placeholder="name"
              />
              <input
                type="text"
                placeholder="profession"
              />
              <input
                type="number"
                placeholder="age"
              />
              <select
              name="" 
              id=""
              >
                <option value="">gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
              <div className="modal__buttons">
                <button className="madal__button__1" type="submit">Save</button>
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Karzinka