import axios from 'axios';
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { fetchProvider } from '../http/ProviderAPI';
import Table from 'react-bootstrap/Table';
import { Context } from '../index';
import ClientItem from './ClientItem';
import ProviderTr from './ProviderTr';
import FormProv from './FormProv';

const ProvidersList = observer(() => {
    const {provider} = useContext(Context)
    const [change, setChange] = useState('')
    const [ssearch , setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])
    const [visible, setVisible] = useState(false)
  
    useEffect(() =>{
        
        fetchProvider().then(data => provider.setProviders(data))
      
      
    },[ssearch,change])

    const keys = ["name", "email", "phone", "area","address",  "square","rooms", "floor","statusbuild,typeHome,status"]
    
   const search = (data) => {
        console.error(data)
       return data.filter(item => keys.some((key) => item[key].toLowerCase().includes(ssearch.toLowerCase()) )
       ) 
   }
    
   const [hide, setHide] = useState(false)
   const handleClick = () => setHide(!hide)
   
    return (
        <Container fluid>
            <input className='form-check-input' onChange={handleClick} checked={hide}  type="checkbox"/> Добавить застройщика?
            {hide ? <FormProv change={setChange} /> : null }
            
            <Row className='p-2' >
                <input
                style={{width: 300, height:30}}
                value={ssearch}
                autoFocus
                type="text"
                autoComplete='off'
                onChange={(e) => setSearch(e.target.value)}
                 placeholder='Поиск по заявкам'
                />
                
            </Row>
            
            {/*
            <Row className='d-flex m-4  justify-content-center'  >
            
            
            {search(client.clients).slice(0).reverse().map(client =>
                <ClientItem  change={setChange} key={client.id} client={client}/>
                )}
        </Row>
            */}
            <Table bordered  hover>
                <thead style={{backgroundColor: "#f8f8f8"}}>
                    <tr style={{borderWidth: 2}}>
                    <th style={{textAlign:"center"}}>№</th>
                    <th style={{textAlign:"center"}}>Застройщик</th>
                
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Телефон</th>
                    <th style={{textAlign:"center"}}>Район</th>
                    <th style={{textAlign:"center"}}>Адрес</th>
                    <th style={{textAlign:"center"}}>Команты</th>
                    <th style={{textAlign:"center"}}>Площадь</th>
                    <th style={{textAlign:"center"}}>Этажность</th>
                    <th style={{textAlign:"center"}}>Статус постройки</th>
                    <th style={{textAlign:"center"}}>Тип дома</th>
                    <th style={{textAlign:"center"}}></th>
                    </tr>
                </thead>
                <tbody>
                {search(provider.providers).slice(0).reverse().map(provider =>
                    <ProviderTr  change={setChange} key={provider.id} provider={provider}></ProviderTr>
                    )}
                </tbody>
            </Table>
           
        </Container>
        
    )
});

export default ProvidersList