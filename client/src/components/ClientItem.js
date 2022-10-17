import React, {useEffect, useState} from 'react'
import {Card, Col, Button, ListGroup,Row} from "react-bootstrap";
import { DeleteRequest } from '../http/ClientAPI';
import { UpdateRequest } from '../http/ClientAPI';


const ClientItem = ({client, change}) => {
   // Мега костыль, надеюсь я когда нибудь вернусь к этой байде и исправлю это говно, но пока времени нет.......
    const value = "В обработке"
    const processed = "Обработана"

   
    const UpdateItem = async () => {
       // setValue('1111')
       UpdateRequest(client.id, value)
        console.log(value)
        return change(value)
    }
    const ProcessedItem = async () => {
        UpdateRequest(client.id, processed)
        console.log(processed)
        return change(processed)
    }

    const DeleteItem = async () => {

        DeleteRequest(client.id)
        //костыль для перерисовки, я просто не знаб как сделать иначе 
        return change(client.id)
    }

    
   
    return (
        <Row className='m-4 d-flex justify-content-center  ' style={{width:500}} md={1}>
            <Col>
            <Card style={{width:450, cursor: 'pointer' , fontSize:16}} border={"dark"} >
            <Card.Header><b>№ Заявка:{' '}</b><u>{client.id}</u >{' || '}<u className='text-wrap'>{client.status}</u></Card.Header>
            <Row>
                 <div class="col m-2  " ><b>Имя:{' '}</b><u>{client.first_name}</u></div>
                 <div class="col m-2"><b>Фамилия:{' '}</b><u>{client.last_name}</u></div>
                    <div class="w-100"></div>
                 <div class="col m-2"><b>Почта:{' '}</b><u>{client.email}</u></div>
                 <div class="col m-2"><b>Телефон:{' '}</b><u>{client.phone}</u></div>
                 <div class="w-100"></div>
                 <div class="col m-2"><b>Комнаты:{' '}</b><u>{client.roomName}</u></div>
                 <div class="col m-2"><b>Бюджет:{' '}</b><u>{client.budgetName}</u></div>
                 <div class="w-100"></div>
                 <div class="col m-2"><b>Район:{' '}</b><u>{client.areaName}</u></div>
                 <div class="col m-2"><b>Отделка:{' '}</b><u>{client.decorationName}</u></div>
               
                 
            </Row>
                <div className='d-flex '>
                    <Button onClick={DeleteItem} className='m-1 w-100 p-0' variant='success' style={{height:30}} >
                        Отменить 
                </Button>
                <Button onClick={UpdateItem}  className='m-1 w-100 p-0' variant='success' style={{height:30}} >
                        В обработке
                </Button>
                <Button onClick={ProcessedItem}  className='m-1 w-100 p-0' variant='success' style={{height:30}} >
                        Обработна
                </Button>
                </div>
                
                
            </Card>
            </Col>
            
        </Row>
    );
}

export default ClientItem