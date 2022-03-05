import React, { FC , useState} from 'react'
import { Container , Row , Col , Button} from 'react-bootstrap';
import { getCategories, getProducts } from '../../../../utils/api';
import { Category , Product } from '../../../../utils/interface';
import style from './../../../../styles/Product.module.css';
import { useRouter } from 'next/router'
import CartForm from '../../../../components/CartForm';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Ingredients from '../../../../components/Ingredients';

Modal.setAppElement('#__next');


interface Props {
    products: [Product],
    id: number
}

export const getStaticPaths = async () => {
    try {
        const {data:categories} : {data: [Category]} = await getCategories();
            const products = await Promise.all(categories.map(async (item:Category) => {
                const {data} : {data:[Product]} = await getProducts(item.ID)
                const arr = data.map((product:Product) => {
                    return({
                        id: item.ID,
                        ...product
                    })
                })
            return arr
        }));
        
        const paths = products.flat().map((item:any) => {
            return {
                params: {
                    id:  `${item.id}`,
                    proId : `${item?.ID}`
                }
            }
        })
        return {paths , fallback:false}
    } catch (error) {
        console.log(error)
    }
}

export const getStaticProps = async ({params} : any) => {
    try {
        const id = params?.proId
        const {data:categories} : {data: [Category]} = await getCategories();
        const products: Product[] = await Promise.all(categories.map(async (item:Category): Promise<Product> => {
            const {data} = await getProducts(item.ID)
            return data;
        }));

        return {
            props: {
                products: products.flat(),
                id
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const product:FC <Props> = ({products , id}) => {
    const router = useRouter()
    const [modalIsOpen, setIsOpen] = useState(false);
    const pro:Product = products.find((item:Product) => {
        return item?.ID == id
    })!

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }
    
    const {ImagePath , Name , Description , DefaultPrice , Ingridents } = pro;
    return (
        <div className='py-5'>
            <Container>
                <Row className = "justify-content-center align-items-center">
                    <Col md = "7">
                        <div className = "d-flex flex-column  justify-content-center align-items-center">
                            <h1 className = {`${style.title} mt-5 mb-3 text-uppercase fw-bold`}>
                                {Name}
                            </h1>
                            <p className={`${style.text} text-uppercase text-center`}>
                                {Description}
                            </p>
                            <div className={`d-flex flex-column  justify-content-center align-items-center`}>
                                <h4 className={`${style.text} text-uppercase fw-normal`}>{Name}</h4>
                                <div className={`${style.price} fw-bold`}>{DefaultPrice * 10} SAR</div>
                            </div>
                        </div>
                    </Col>
                    <Col md = "5">
                        <div>
                            <img className="img-fluid" src = {ImagePath} />
                        </div>
                    </Col>
                </Row>
                <div className='mt-3'>
                    <CartForm product = {pro} />
                </div>
                <div className='mt-3 d-flex'>
                    <Button className={`${style.back} fw-bold me-2`} onClick={() => router.back()}>BACK</Button>
                    <Button className={`${style.order} fw-bold me-2 text-uppercase `} onClick={openModal}>
                        Ingredients
                    </Button>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <div className='model-container'>
                        <div className='p-3 d-flex align-items-center justify-content-center w-100 model-header'>
                            <h5 className='fw-bold text-center'>Ingredients</h5>
                            <Button className='fw-bold model-close' onClick={closeModal}>
                                <FontAwesomeIcon icon = {faTimes} />
                            </Button>
                        </div>
                        <Ingredients arr = {Ingridents} />
                    </div>
                </Modal>
            </Container>
        </div>
    )
}

export default product