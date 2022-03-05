import React, { FC, useState } from 'react'
import { Col, Container , Navbar as BootNav, Row } from 'react-bootstrap';
import style from "./../styles/NavBar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import {useSelector} from "react-redux"
import {RootState} from "./../store/index"
import { CartItem } from '../utils/interface';

const NavBar:FC = () => {
    const {total , cart:{products}} = useSelector((state:RootState) => state.cart);
    const [open , setOpen] = useState(false)

    return (
        <BootNav className={`${style.nav} py-3`} bg="light" expand="lg">
            <Container>
                <Row className='w-100'>
                    <Col md = "6">
                        <div className='d-flex align-items-center'>
                            <Image src= "/images/logoW-59522258c45ee846225f46d80ba3589e.png" width="106" height = "92"/>
                        </div>
                    </Col>
                    <Col md = "6" className="d-flex align-items-center justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className={`${style.link} p-3 nav-link text-uppercase fw-bold`}>story</a> 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/food">
                                    <a className={`${style.link} p-3 nav-link text-uppercase fw-bold`}>food</a> 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className={`${style.link} p-3 nav-link text-uppercase fw-bold`}>location</a> 
                                </Link>
                            </li>
                            <li className={`nav-item d-flex align-items-center ${style.liCart}`}>
                                <div className={style.icon} onClick = {() => setOpen(!open)}>
                                    <Image src= "/images/download.png" width="28" height = "28"/>
                                </div>
                            </li>
                        </ul>
                    </Col> 
                </Row>
            </Container>
            {open ? 
                <div className={`${style.navCat} p-1`}>
                    <h6 className='px-2 text-center mb-3'>My cart contains</h6>
                    <ul className='list-unstyled p-0 m-0'>
                        {products.map((item:CartItem) => {
                            return(
                                <li key={item.productId} className = "d-flex mb-2">
                                    <div className='w-50 p-2'>
                                        <img src={item.image} />
                                    </div>
                                    <div className='w-50 d-flex flex-column justify-content-center p-1'>
                                        <div>{item.name}</div>
                                        <div>{item.price} SAR</div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className= {style.total}>
                        Subtotal = {total} SAR
                    </div>
                    <Link href="/cart">
                        <a className={`${style.cartLink} nav-link text-uppercase fw-bold`}>
                            VIEW CART
                        </a> 
                    </Link>
                </div>
            :null}
        </BootNav>

    )
}

export default NavBar