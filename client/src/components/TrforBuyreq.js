import React, {useEffect, useState} from 'react'
import {Card, Col, Button, ListGroup,Row, InputGroup, SplitButton, Dropdown, Form, DropdownButton} from "react-bootstrap";
import { DeleteRequestBuy } from '../http/BuyClient';
import { UpdateRequestBuy } from '../http/BuyClient';

const TrforBuyreq = ({buyreq, change}) => {
    const value = "В обработке"
    const processed = "Обработана"

   
    const UpdateItem = async () => {
       // setValue('1111')
       UpdateRequestBuy(buyreq.id, value)
        console.log(value)
        return change(value)
    }
    const ProcessedItem = async () => {
      UpdateRequestBuy(buyreq.id, processed)
        console.log(processed)
        return change(processed)
    }

    const DeleteItem = async () => {

      DeleteRequestBuy(buyreq.id)
        //костыль для перерисовки, я просто не знаб как сделать иначе 
        return change(buyreq.id)
    }

    

    return (
        <tr>
            <td >{buyreq.id}</td>
            <td>{buyreq.first_name}</td>
            <td>{buyreq.last_name}</td>
            <td>{buyreq.email}</td>
            <td>{buyreq.phone}</td>
            <td>{buyreq.address}</td>
            <td>{buyreq.floor}</td>
            <td>{buyreq.rooms}</td>
            <td>{buyreq.square}{' м2.'}</td>
            
            <td>{buyreq.remont}</td>
            <td>{buyreq.typeHome}</td>
            <td>{buyreq.price}{' руб.'}</td>
            <td className='d-flex justify-content-center'>
            <InputGroup className="mb-3 d-flex justify-content-center">
            <DropdownButton
            
          variant="outline-success"
          title={buyreq.status}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item  onClick={DeleteItem} href="#">Отменить</Dropdown.Item>
          <Dropdown.Item onClick={UpdateItem} href="#">В обработке</Dropdown.Item>
          <Dropdown.Item  onClick={ProcessedItem} href="#">Обработна</Dropdown.Item>
          
          
        </DropdownButton>
        
      </InputGroup>
           </td> 
        </tr>
    )
}

export default TrforBuyreq