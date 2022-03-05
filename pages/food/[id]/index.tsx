import React, { FC, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '../../../components/Card';
import SideBar from '../../../components/SideBar';
import { getCategories , getProducts} from '../../../utils/api';
import { Category, Product } from '../../../utils/interface';
import style from './../../../styles/Cat.module.css'

interface Props {
    categories: [Category],
    products: [Product],
    id: number
}

export const getStaticPaths = async () => {
    try {
        const {data} : {data: [Category]} = await getCategories();
        const paths = data.map((item:Category) => {
            return {
                params: {id: `${item?.ID}`}
            }
        })

        return {paths , fallback:false}
    } catch (error) {
        console.log(error)
    }
}

export const getStaticProps = async ({params} : any) => {
    try {
        const id = params?.id
        const [{data: categories}, {data: products}] = await Promise.all([getCategories() , getProducts(id)]);
        return {
            props: {
                categories,
                products,
                id
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const Cat:FC <Props> = ({categories , products , id}) => {
    const cat:Category = categories.find((item:Category) => {
        return item?.ID == id
    })!
    // useEffect(() => {
    //     const test = async () => {
    //         const {data:categories} : {data: [Category]} = await getCategories();
    //         console.log(categories)
    //     }
    //     test()
    // })
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md = "2" className='px-0'>
                        <SideBar items={categories} id = {id} />
                    </Col>
                    <Col md = "10" className='p-3'>
                        <div>
                            <h2 className={`${style.title} fw-bold text-center py-3`}>{cat?.Name}</h2>
                        </div>
                        <Row>
                            {
                                products.map((item:Product) => {
                                return(
                                    <Col md = "3" key={item.ID}>
                                    <Card item={item} type = "product" catId = {id}/>
                                    </Col>
                                )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cat