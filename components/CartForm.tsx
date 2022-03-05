import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useRef, useState , MouseEvent, FocusEventHandler, ChangeEvent} from 'react';
import { Button } from 'react-bootstrap';
import { CartItem, Product } from '../utils/interface';
import style from './../styles/Form.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from "../store";
import {addCart} from "./../store/thunk-action"


interface Props {
    product?: Product,
    page?: string,
    quantity?: number,
    item?:CartItem

}

const CartForm:FC <Props> = ({product , item , page , quantity:q}) => {
    const [quantity , setQuantity] = useState<number>(q || 1);
    const increaseBtn = useRef<HTMLButtonElement>(null);
    const decreaseBtn = useRef<HTMLButtonElement>(null);

    const dispatch = useDispatch<AppDispatch>();


    const changQuantity:(e:MouseEvent | ChangeEvent<HTMLInputElement>) => void = (e) => {
        if(e.target == increaseBtn.current || e.currentTarget == increaseBtn.current){
            setQuantity(s => ++s)
        } else if(e.target == decreaseBtn.current || e.currentTarget == decreaseBtn.current) {
            quantity > 1 ? setQuantity(s => --s) : null
        }
    }

    const onSubmit: FocusEventHandler<HTMLFormElement> = async (e) =>{
        e.preventDefault();
        const data = {
            products:{
                productId: item?.productId || product?.ID.toString(),
                name: item?.name || product?.Name,
                price: item?.price ? item?.price ! : product?.DefaultPrice ? product?.DefaultPrice * 10 : 0 ,
                image: item?.image || product?.ImagePath,
                quantity: quantity
            }
        }
        dispatch(addCart(data))
    }
    return (
        <div>
            <form onSubmit={onSubmit} className = {`d-flex ${page === "cart" ? "flex-column align-items-center" : ""}`}>
                <div className='d-flex'>
                    <div>
                        <button ref = {decreaseBtn} className= {`${style.btn} ${style.decBtn} btn`} type='button' onClick={(e) => changQuantity(e)}>
                            <FontAwesomeIcon icon = {faMinus} />
                        </button>
                    </div>
                    <div>
                        <input onChange={changQuantity} className={`${style.input} text-center`} type="number" value={quantity}/>
                    </div>
                    <div>
                        <button ref = {increaseBtn} className= {`${style.btn} ${style.incBtn} btn`} type='button' onClick={(e) => changQuantity(e)}>
                            <FontAwesomeIcon icon = {faPlus} />
                        </button>
                    </div>
                </div>
                <div>
                    <Button className={`${style.btn} ${page === "cart" ? style.cartBtn : ""} fw-bold ms-2 me-2 text-uppercase `} type = "submit">
                        {page === "cart" ? "UPDATE CART" : "ADD TO CART" }
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CartForm