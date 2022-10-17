import React, {useEffect, useState} from 'react'
import {Card, Col, Button, ListGroup,Row, InputGroup, SplitButton, Dropdown, Form, DropdownButton} from "react-bootstrap";
import { DeleteProvider } from '../http/ProviderAPI';
import { UpdateProvider } from '../http/ProviderAPI';

const ProviderTr = ({provider, change}) => {
    const value = "В обработке"
    const processed = "Обработана"

   
    const UpdateItem = async () => {
       // setValue('1111')
       UpdateProvider(provider.id, value)
        console.log(value)
        return change(value)
    }
    const ProcessedItem = async () => {
        UpdateProvider(provider.id, processed)
        console.log(processed)
        return change(processed)
    }

    const DeleteItem = async () => {

        DeleteProvider(provider.id)
        //костыль для перерисовки, я просто не знаб как сделать иначе 
        return change(provider.id)
    }

  console.log(provider.id)

    return (
        <tr>
            
            <td >{provider.id}</td>
            <td>{provider.name}</td>
            
            <td>{provider.email}</td>
            <td>{provider.phone}</td>
            <td>{provider.area}</td>
            <td>{provider.address}</td>
            <td>{provider.rooms}</td>
            <td>{provider.square}</td>
            
            <td>{provider.floor}</td>
            <td>{provider.statusbuild}</td>
            <td>{provider.typeHome}</td>
            <td className='d-flex justify-content-center'>
                <Button variant="outline-success" onClick={DeleteItem}>Удалить</Button>
            </td>
        </tr>
    )
}

export default ProviderTr