import Image from 'next/image';
import React, { FC } from 'react';
import { Ingredients } from '../utils/interface';
import style from "./../styles/Ingredients.module.css"

interface Props {
    arr: Ingredients[]
}

const Ingredients:FC <Props> = ({arr}) => {
  return (
    <div className='p-5'>
        <div className='d-flex align-items-center flex-column justify-content-center'>
            <div className={style.img}>
                <Image src = "/images/ingredients.svg" width="64" height="64" />
            </div>
            <p className = {`${style.text} fw-bold mt-1 mb-2 text-uppercase`}>Ingredients</p>
        </div>
        <div>
            <ul className='list-unstyled'>
                {arr.map((item:Ingredients) => {
                    const {Name , ID , ImagePath , Price} = item
                    return(
                        <li key = {ID} className={`${style.list} py-4 align-items-center d-flex justify-content-between`}>
                            <div>
                                <img src = {ImagePath} />
                            </div>
                            <div className='text-center'>
                                <h5>{Name}</h5>
                            </div>
                            <div className='text-end'>
                                SAR {Price * 10}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Ingredients