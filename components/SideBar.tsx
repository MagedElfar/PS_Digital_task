import Link from 'next/link'
import React , {FC} from 'react'
import { Category } from '../utils/interface';
import style from './../styles/SideBar.module.css'

interface Props {
    items: [Category],
    id: number
}

const SideBar:FC <Props> = ({items , id}) => {
    return (
        <div className={style.sidebar}>
            <ul className={'m-0 py-2 px-3'}>
                {items.map((item:Category) => {
                    return(
                        <li className='fw-bold mb-3' key={item.ID}>
                            <Link href={`/food/${item.ID}`}>
                                <a className={`py-3 d-block ${style.link} ${item.ID == id ? style.active :""}`}>
                                    {item.Name}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar