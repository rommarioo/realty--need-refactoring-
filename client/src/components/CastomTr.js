import React, {useEffect, useState} from 'react'
import {Card, Col, Button, ListGroup,Row, InputGroup, SplitButton, Dropdown, Form, DropdownButton} from "react-bootstrap";
import { DeleteRequest } from '../http/ClientAPI';
import { UpdateRequest } from '../http/ClientAPI';

const CastomTr = ({client, change}) => {
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
        <tr>
            <td >{client.id}</td>
            <td>{client.first_name}</td>
            <td>{client.last_name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>{client.roomName}</td>
            <td>{client.budgetName}</td>
            <td>{client.areaName}</td>
            <td>{client.decorationName}</td>
            
            <td>{client.typeHome}</td>
            <td>{client.typeBuy}</td>
            <td className='d-flex justify-content-center'>
            <InputGroup className="mb-3 d-flex justify-content-center">
            <DropdownButton
            
          variant="outline-success"
          title={client.status}
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

export default CastomTr