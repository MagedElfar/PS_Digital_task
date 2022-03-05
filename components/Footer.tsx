import Link from 'next/link';
import React , {FC} from 'react';
import { Col, Container , Row } from 'react-bootstrap';
import { FooterMenu } from '../utils/interface';
import style from './../styles/Footer.module.css'
import Menu from './Menu';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

const menu:FooterMenu [] = [
    {
        title: "discover texas",
        menu: ["our story" , "halal"]
    },
    {
        title: "Work with us",
        menu: ["careers" , "franchising"]
    },
    {
        title: "texas way",
        menu: ["birthday package"]
    },
    {
        title: "let's talk",
        menu: ["contact us" , "faqs"]
    },
]

const Footer:FC = () => {
    return (
        <footer className={`${style.footer} py-4`}>
            <section>
                <Container>
                    <Row className='justify-content-center'>
                        {menu.map((item:FooterMenu , index:number) => {
                            return(
                                <Col lg= "2" md = "6" key={index}>
                                    <Menu menu={item} />
                                </Col>
                            )
                        })}
                        <Col lg= "3" md = "6">
                            <h2 className={`${style.title} fw-bold text-uppercase`}>
                                texas chicken | <span>uae</span>
                            </h2>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg="3" md="6" className='d-flex align-items-end mb-4'>
                            <h2 className={`${style.title} fw-bold text-uppercase`}>
                                join our community
                            </h2>
                        </Col>
                        <Col lg="5" md="6" className='align-items-end d-flex justify-content-center'>
                            <ul className='list-unstyled d-flex'>
                                <li>
                                    <Link href= "#">
                                        <a className={`d-block ${style.imgLink}`}>
                                            <Image src = {"/images/halalogo-483e3c68c6b9c3f369b6d235a5ceca0f.png"} width = "150" height= "58"/>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href= "#">
                                        <a className={`d-block ${style.imgLink}`}>
                                            <Image src = {"/images/del-c3878984c1693c1b689a4bea09629c18.png"} width = "150" height= "58"/>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg="3" md="6">
                            <h2 className={`${style.title} fw-bold text-uppercase`} >connect with</h2>
                            <div className={style.social}>
                                <ul className='list-unstyled d-flex'>
                                    <li className='me-2'>
                                        <a href='#' className='d-flex align-items-center justify-content-center'>
                                            <FontAwesomeIcon icon = {faFacebookF} />
                                        </a>
                                    </li>
                                    <li className='me-2'>
                                        <a href='#' className='d-flex align-items-center justify-content-center'>
                                            <FontAwesomeIcon icon = {faTwitter} />
                                        </a>
                                    </li>
                                    <li className='me-2'>
                                        <a href='#' className='d-flex align-items-center justify-content-center'>
                                            <FontAwesomeIcon icon = {faInstagram} />
                                        </a>
                                    </li>
                                    <li className='me-2'>
                                        <a href='#' className='d-flex align-items-center justify-content-center'>
                                            <FontAwesomeIcon icon = {faYoutube} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${style.copyrights} pt-3`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md="4">
                            <p className= {style.text}>All rights reserved. | Developed &#38; Designed  by</p>
                        </Col>
                        <Col md="4" className='justify-content-end d-flex'>
                            <Link href = "#">
                                <a className={`${style.link} me-2 text-capitalize}`}>privacy policy</a>
                            </Link>
                            <Link href = "#">
                                <a className={`${style.link} text-capitalize}`}>terms &#38; condition</a>
                            </Link>
                        </Col>
                        <Col md="4" className='justify-content-end d-flex'>
                            <ul className='list-unstyled d-flex'>
                                <li className='me-2'>
                                    <Link href= "#">
                                        <a className={`d-block`}>
                                            <Image src = {"/images/googleplay-e00bc70e0d0631cde759aa8286a7cc91.png"} width = "115" height= "35"/>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href= "#">
                                        <a className={`d-block`}>
                                            <Image src = {"/images/appstore-3fc8fd59de57b1400f03369976232356.png"} width = "115" height= "35"/>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </footer>
    )
}

export default Footer