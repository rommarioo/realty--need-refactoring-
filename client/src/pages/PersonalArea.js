import React from 'react'
import { Container } from 'react-bootstrap'
import RequestList from '../components/RequestList'

const PersonalArea = () => {
    return (
        <Container fluid className='d-flex   flex-column'  >
            <div className='d-flex flex-column align-items-center' >
                <h2 className='mt-4'  >Заявки клиентов на покупку недвижимости</h2>
              
                < RequestList/>
            </div>
            
        </Container>
    )
}

export default PersonalArea