import Image from 'next/image';
import Link from 'next/link';
import React , {FC} from 'react'
import { Category } from '../utils/interface';
import style from "./../styles/Card.module.css"

interface Props {
    item: Category,
    type?: string | undefined,
    catId?: number
}

const Card:FC <Props> = ({item , type , catId}) => {
    const {Name , ID , ImagePath} = item;
    return (
        <div className='mb-4'>
            <div>
                <Link href={!type ? `/food/${ID}` : `/food/${catId}/product/${ID}`}> 
                    <a><img className={`${style.img} d-block mx-auto`} src = {ImagePath}/></a>
                </Link>
            </div>
            <div className={`${style.name} ${type ? style.productSize : ""}`}>
                <Link href={!type ? `/food/${ID}` : `/food/${catId}/product/${ID}`}>
                    <a className='d-block text-center fw-bold py-3'>{Name}</a>
                </Link>
            </div>
        </div>
    )
}

export default Card;