import React, { useContext, useEffect, useState } from 'react'

import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Form from '../components/Form'
import Input from '../components/Input'
import MainContainer from '../components/MainContainer'
import { useForm } from "react-hook-form";
import { InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import PrimaryButton from '../components/PrimaryButton'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { CONFIRM, STEP2 } from '../utils/consts'
import  {useData}  from "../DataContext";
import "yup-phone";
import { Context } from 'ag-grid-community'
import { Button, Col, Dropdown, DropdownButton, InputGroup, Modal, Row } from 'react-bootstrap'

const schema = yup.object().shape({
  address: yup
    .string()
    .required("Поле не может быть пустым"),
    floor: yup
    .string()
    .required("*"),
    email: yup
    .string()
    .email("Email должен иметь правильный формат")
    .required("Поле не может быть пустым"),
    phones: yup
    .string()
    .matches(
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/,
      "Номер телефона может содержать только цифры"
    )
    .required()
});


const Modals = ({show, onHide}) => {
    
    const navigate = useNavigate();
  const {setValues, data} = useData()
    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            address: data.address,
            name: data.name,
            email: data.email,
            phone: data.phone,
      },
        mode: "onChange",
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        setValues(data)
        console.log(data)
        
      }
      const [value, setValue] = useState('');
      const handleChange = (event) => {
          setValue(event.target.value);
        };
        
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size="lg"
             >
        <Modal.Header closeButton>
          <Modal.Title>Добавить застройщика</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <Form id="hook-form"  onSubmit={handleSubmit(onSubmit)}>
          <Row className= ' mt-3 d-flex align-items-center'>
                <Col className='pt-4' xs lg="2">
                 <h5>Застройщик:</h5>
                </Col>
                <Col xs lg="4">
                <Input
                
                
                {...register('name')}
                id="name"
                type="text"
                label="Название"
                name="name"
                required
                error={!!errors.name}
                helperText={errors?.name?.message}
                />
                </Col >
                <Col className='pt-4 me-2' xs lg="1">
                 <h5 className=''>Адрес:</h5>
                </Col>
                <Col xs lg="4">
                <Input
                
                
                {...register('address')}
                id="address"
                type="text"
                label="Строительный адрес"
                name="address"
                required
                error={!!errors.address}
                helperText={errors?.address?.message}
                />
                </Col >
            </Row>
            <Row className= ' mt-3 d-flex align-items-center'>
                <Col className='pt-4' xs lg="2">
                 <h5>Телефон:</h5>
                </Col>
                <Col xs lg="4">
                <Input
                
                
                {...register('phone')}
                id="phone"
                type="text"
                label="Телефон"
                name="phone"
                required
                error={!!errors.phone}
                helperText={errors?.phone?.message}
                />
                </Col >
                <Col className='pt-4 me-2' xs lg="1">
                 <h5 className=''>Email:</h5>
                </Col>
                <Col xs lg="4">
                <Input
                
                
                {...register('email')}
                id="email"
                type="text"
                label="Email"
                name="email"
                required
                error={!!errors.email}
                helperText={errors?.email?.message}
                />
                </Col >
            </Row>
            <Row className= ' mt-3 d-flex align-items-center'>
            <Col xs lg="2">
                 <h5>Статус:</h5>
                </Col>
                <Col xs lg="4">
                <select className='form-select' {...register('statusbuild')} >
      
                    <option>
                      -
                    </option>
                    <option>
                      111111
                    </option>
                  
                </select>
                </Col >
                <Col className='pt-4 me-2' xs lg="2">
                 <h5 className=''>Этажность:</h5>
                </Col>
                <Col xs lg="2">
                <Input
                
                
                {...register('floor')}
                id="floor"
                type="number"
                label="Номер"
                name="floor"
                required
                error={!!errors.floor}
                helperText={errors?.floor?.message}
                />
                </Col >
            </Row>
            <Row className= ' mt-3 d-flex align-items-center'>
            <Col xs lg="2">
                 <h5>Район:</h5>
                </Col>
                <Col xs lg="4">
                <select className='form-select' {...register('area')} >
      
                    <option>
                      -
                    </option>
                    <option>
                      111111
                    </option>
                  
                </select>
                </Col >
                <Col className='pt-4 me-2' xs lg="2">
                 <h5 className=''>Комнаты:</h5>
                </Col>
                <Col xs lg="3">
                <Input
                
                
                {...register('rooms')}
                id="rooms"
                type="text"
                label="Типы комнат"
                name="rooms"
                required
                error={!!errors.rooms}
                helperText={errors?.rooms?.message}
                />
                </Col >
            </Row>
            <Row className= ' mt-3 d-flex align-items-center'>
            <Col xs lg="2">
                 <h5>Тип дома:</h5>
                </Col>
                <Col xs lg="4">
                <select className='form-select' {...register('typeHome')} >
      
                    <option>
                      -
                    </option>
                    <option>
                      111111
                    </option>
                  
                </select>
                </Col >
                <Col className='pt-4 me-2' xs lg="2">
                 <h5 className=''>Площадь:</h5>
                </Col>
                <Col xs lg="3">
                <Input
                
                
                {...register('square')}
                id="square"
                type="text"
                label="От и до"
                name="square"
                required
                error={!!errors.square}
                helperText={errors?.square?.message}
                />
                </Col >
            </Row>
            < Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button   form="hook-form"  variant="outline-success" type= 'submit'  >Добавить</Button>
            </Form>
        </Modal.Body>
        
         
         
        
          
      </Modal>
    )
}

export default Modals