import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Home from '..';
import Card from '../../components/Card';
import { getCategories } from '../../utils/api';
import { Category } from '../../utils/interface';

interface Props {
  Categories: [Category]
}

export const getStaticProps = async () => {
  try {
    const {data:Categories} = await getCategories()
    return {
      props: {Categories}
    }
  } catch (error) {
    console.log(error)
  }
}

const Categories:FC <Props> = ({Categories}) => {
  return (
    <div className='p-5'>
      <Container>
        <Row>
          {
            Categories.map((item:Category) => {
              return(
                <Col md = "4" key={item.ID}>
                  <Card item={item}/>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}


export default Categories