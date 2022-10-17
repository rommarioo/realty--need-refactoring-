import React from 'react'
import { Container } from 'react-bootstrap'
import ProvidersList from '../components/ProvidersList'

const Providers = () => {
    return (
        <Container fluid className='d-flex   flex-column'  >
            <div className='d-flex flex-column align-items-center' >
                <h2 className='mt-4'>Застройщики</h2>
              
               <ProvidersList/>
            </div>
            
        </Container>
    )
}

export default Providers