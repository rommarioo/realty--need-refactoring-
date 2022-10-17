import axios from 'axios';
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { fetchClients } from '../http/ClientAPI';
import Table from 'react-bootstrap/Table';
import { Context } from '../index';
import ClientItem from './ClientItem';
import CastomTr from './CastomTr';
import BuyRequest from '../pages/BuyRequest';
import { fetchBuyreq } from '../http/BuyClient';
import TrforBuyreq from './TrforBuyreq';




const BuyRequestList = observer(() => {
    const {buyreq} = useContext(Context)
    const [change, setChange] = useState('')
    const [ssearch , setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])
    
    useEffect(() =>{
        
        fetchBuyreq().then(data => buyreq.setBuyReq(data))
        console.log(buyreq)
    },[ssearch,change])

    const keys = ["first_name", "last_name", "email", "phone","address", "floor", "rooms", "remont","typeHome","status"]

   const search = (data) => {
       return data.filter(item => keys.some((key) => item[key].toString().toLowerCase().includes(ssearch.toLowerCase()) )
       ) 
   }
    
     
   
    return (
        <Container fluid>
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
                    <th style={{textAlign:"center"}}>Имя</th>
                    <th style={{textAlign:"center"}}>Фамилия</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Телефон</th>
                    <th style={{textAlign:"center"}}>Адрес</th>
                    <th style={{textAlign:"center"}}>Этаж</th>
                    <th style={{textAlign:"center"}}>Команты</th>
                    <th style={{textAlign:"center"}}>Прощадь</th>
                    <th style={{textAlign:"center"}}>Ремонт</th>
                    <th style={{textAlign:"center"}}>Тип дома </th>
                    <th style={{textAlign:"center"}}>Цена </th>
                    <th style={{textAlign:"center"}}>Статус</th>
                    </tr>
                </thead>
                <tbody>
                {search(buyreq.buyreqs).slice(0).reverse().map(buyreq =>
                    <TrforBuyreq  change={setChange} key={buyreq.id} buyreq={buyreq}></TrforBuyreq>
                    )}
                </tbody>
            </Table>
        </Container>
        
    )
});

export default BuyRequestList