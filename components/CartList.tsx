import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { CartItem } from '../utils/interface';
import style from "./../styles/CartList.module.css";
import CartForm from './CartForm';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { deleteCart } from '../store/thunk-action';

interface Props {
    item: CartItem
}

const CartList:FC <Props> = ({item}) => {
    const dispatch = useDispatch<AppDispatch>();
    const deleteItem = (id:any) => {
        dispatch(deleteCart({id}))
    }
    return (
        <ul className={`d-flex list-group list-group-horizontal ${style.list}`}>
            <li className="col-md-1 list-group-item">
                <div className={style.delete} onClick = {() => deleteItem(item?.productId.toString())}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </li>
            <li className="col-md-3 list-group-item">
                <img src = {item.image} />
            </li>
            <li className="col-md-2 list-group-item">
                {item.name}
            </li>
            <li className="col-md-2 list-group-item">
                {item.price} SAR
            </li>
            <li className="col-md-2 list-group-item">
                <CartForm quantity={item.quantity} page = {"cart"} item = {item} />
            </li>
            <li className="col-md-2 list-group-item">{item.price * item.quantity} SAR</li>
        </ul>
    )
}

export default CartList