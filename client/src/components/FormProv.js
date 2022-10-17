import React, { useContext, useEffect, useState } from 'react'

import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Form from './Form'
import Input from './Input'
import MainContainer from './MainContainer'
import { useForm } from "react-hook-form";
import { InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import PrimaryButton from './PrimaryButton'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { CONFIRM, STEP2 } from '../utils/consts'
import  {useData}  from "../DataContext";
import "yup-phone";
import { Context } from 'ag-grid-community'
import { Button, Col, Container, Dropdown, DropdownButton, InputGroup, Modal, Row } from 'react-bootstrap'
import { createprovider } from '../http/ProviderAPI'

const schema = yup.object().shape({
    address: yup
      .string()
      .required("Поле не может быть пустым"),
      floor: yup
      .string()
      .required("*")
      .min(1, '*')
      .max(5, 'Слишком большое'),
      
      email: yup
      .string()
      .email("Email должен иметь правильный формат")
      .required("Поле не может быть пустым"),
      phone: yup
      .string()
      .matches(
        /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/,
        "Номер телефона может содержать только цифры"
      )
      .required()
  });
const FormProv = ({change}) => {
     

    const navigate = useNavigate();
  
  
    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
           
      },
        mode: "onChange",
        resolver: yupResolver(schema)
    })
  
    const onSubmit = (data) => {
      
        
      
        createprovider(data)
        return change(data)
      }
      const [value, setValue] = useState('');
      const handleChange = (event) => {
          setValue(event.target.value);
        };
        
       
          
            
          
      
       
    return (
        <Container>
            
        
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                <Col xs lg="3">
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
                <Col xs lg="3">
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
            <Row className= ' d-flex align-items-center'>
            <Col xs lg="2">
                 <h5>Статус:</h5>
                </Col>
                <Col xs lg="4">
                <select className='form-select' {...register('statusbuild')} >
      
                    <option>
                      -
                    </option>
                    <option>
                      Дом сдан
                    </option>
                    <option>
                      2022год
                    </option>
                    <option>
                      2023год
                    </option>
                    <option>
                      2024год
                    </option>
                    <option>
                      Старт продаж
                    </option>

                  
                </select>
                </Col >
                <Col className='pt-4 me-2' xs lg="1">
                 <h5 className=''>Этажность:</h5>
                </Col>
                <Col xs lg="1">
                <Input
               
                
                {...register('floor')}
                id="floor"
                type="text"
                label="Кол-во"
                name="floor"
                required
                error={!!errors.floor}
                helperText={errors?.floor?.message}
                />
                </Col >
            </Row>
            <Row className= '  d-flex align-items-center'>
            <Col xs lg="2">
                 <h5>Район:</h5>
                </Col>
                <Col xs lg="4">
                <select className='form-select' {...register('area')} >
      
                    <option>
                      -
                    </option>
                    <option>
                      Кировский
                    </option>
                    <option>
                      Ленинский
                    </option>
                    <option>
                      Куйбышевский
                    </option>
                    <option>
                      Октябрьский
                    </option>
                    <option>
                      Свердловский
                    </option>
                  
                </select>
                </Col >
                <Col className='pt-4 me-2' xs lg="1">
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
            <Row className= '  d-flex align-items-center'>
            <Col xs lg="2">
                 <h5>Тип дома:</h5>
                </Col>
                <Col xs lg="4">
                <select className='form-select' {...register('typeHome')} >
      
                    <option>
                      -
                    </option>
                    <option>
                      Кирпичный
                    </option>
                    <option>
                      Панельный 
                    </option>
                    <option>
                      Деревянный
                    </option>
                    <option>
                      Монолитный
                    </option>
                  
                </select>
                </Col >
                <Col className='pt-4 me-2' xs lg="1">
                 <h5 className=''>Площадь:</h5>
                </Col>
                <Col xs lg="3">
                <Input
                
                
                {...register('square')}
                id="square"
                type="text"
                label="От и до (м2)"
                name="square"
                required
                error={!!errors.square}
                helperText={errors?.square?.message}
                />
                </Col >
            </Row>
              <Row className='d-flex justify-content-center mt-4 mb-3'>
                <Button  style={{width: 200}} className=' mb-3'  variant="outline-success" type= 'submit'  >Добавить</Button>
              </Row>
                
              
                
            </Form>
            </Container>
    )
}

export default FormProv