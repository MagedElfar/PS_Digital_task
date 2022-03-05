import Link from 'next/link';
import React, { FC } from 'react';
import { FooterMenu } from '../utils/interface';
import style from "./../styles/Menu.module.css"

interface Props {
    menu: FooterMenu
}

const Menu:FC <Props> = ({menu:item}) => {
    const {title , menu} = item
    return (
        <div className='mb-4'>
            <h2 className={`${style.title} fw-bold text-uppercase `}>{title}</h2>
            <ul className='list-unstyled'>
                {menu.map((item:string , index:number) => {
                    return(
                        <li key = {index}>
                            <Link href = "#">
                                <a className={`text-capitalize py-1 d-block ${style.link}`}>{item}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Menu