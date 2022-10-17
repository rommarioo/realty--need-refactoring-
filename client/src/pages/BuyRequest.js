import React from 'react'
import { Container } from 'react-bootstrap'
import BuyRequestList from '../components/BuyRequestList'

const BuyRequest = () => {
    console.error('asdasdasd')
    return (
        <Container fluid className='d-flex   flex-column'  >
            <div className='d-flex flex-column align-items-center' >
                <h2 className='mt-4'  >Заявки клиентов на продажу недвижимости</h2>
              
                <BuyRequestList/>
            </div>
            
        </Container>
    )
}

export default BuyRequest