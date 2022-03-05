import React, { Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartList from '../../components/CartList';
import { RootState } from '../../store';
import { CartItem } from '../../utils/interface';
import style from './../../styles/Cart.module.css';

const index = () => {
    const {total , cart:{products}} = useSelector((state:RootState) => state.cart);
    return (
        <div className='py-5'>
            <h3 className={`${style.title} text-center mb-5`}>SHOPPING CART</h3>
            <Container>
                <Row>
                    <Col md = "8">
                    {products.length > 0 ? 
                        <>
                            <ul className={`d-flex list-group list-group-horizontal ${style.list}`}>
                                <li className="col-md-1 list-group-item"></li>
                                <li className="col-md-3 list-group-item"></li>
                                <li className="col-md-2 list-group-item">Product</li>
                                <li className="col-md-2 list-group-item">Price</li>
                                <li className="col-md-2 list-group-item">Quantity</li>
                                <li className="col-md-2 list-group-item">Total</li>
                            </ul>
                            {
                                products.map((item:CartItem) => {
                                    return(
                                        <Fragment key={item.productId}>
                                            <CartList item={item} />
                                        </Fragment>
                                    )
                                })
                            }
                        </>
                    :
                        <div className='text-center'>
                            Cart is empty
                        </div>
                    }
                    </Col>
                    <Col md = "4">
                        <div className={`${style.info} p-4`}>
                            <h4>Payment Summary</h4>
                            <div className="d-flex mt-2 justify-content-between">
                                <div className={style.total}>Total</div>
                                <div className={style.price}>{total} SAR</div>
                            </div>
                            <div className='mt-5 d-flex justify-content-center'>
                                <Button className={`${style.back} fw-bold me-2 text-uppercase `}>Add to Favourites</Button>
                                <Button className={`${style.order} fw-bold me-2 text-uppercase `}>
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default index