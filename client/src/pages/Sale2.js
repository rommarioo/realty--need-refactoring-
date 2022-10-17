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
import { Button, Col, Dropdown, DropdownButton, InputGroup, Row } from 'react-bootstrap'
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
      phone: yup
      .string()
      .matches(
        /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/,
        "Номер телефона может содержать только цифры"
      )
      .required("Поле не может быть пустым"),
      price: yup
      .string()
      .required("Поле не может быть пустым"),
      square: yup
      .string()
      .required("*"),
  });

const Sale2 = () => {
    const navigate = useNavigate();
  const {setValues, data} = useData()
  const [Empty, setEmpty] = useState(true)
    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            address: data.address,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
      },
        mode: "onChange",
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        setValues(data)
        navigate(CONFIRM)
        console.log(data)
      }
      const [value, setValue] = useState('');
      const handleChange = (event) => {
          setValue(event.target.value);
        };
        console.log(data)
        
    return (
     
        <MainContainer  >
          <Typography component="h2" variant="h4">Укажите характеристики вашей недвижимости</Typography>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className= ' mt-3 d-flex align-items-center'>
                <Col className='pt-4' xs lg="6">
                 <h4>Адрес:</h4>
                </Col>
                <Col className=''>
                <Input
                
                className='form-control'
                {...register('address')}
                id="address"
                type="text"
                label="Улица и номер дома"
                name="address"
                required
                error={!!errors.address}
                helperText={errors?.address?.message}
                />
                </Col >
            </Row>
            <Row className='d-flex justify-content-start align-items-end'>
                <Col  className='mt-4' xs lg="6">
                 <h4>Этаж:</h4>
                </Col>
                <Col xs lg="2">
                <Input
                className='form-control'
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
            <Row className='mt-4 d-flex justify-content-start align-items-end'>
                <Col xs lg="6">
                 <h4>Количество комнат:</h4>
                </Col>
                <Col >
                <select className='form-select' {...register('rooms')} >
      
        <option>
          -
        </option>
        <option>
          1 комнатная
        </option>
        <option>
          2 комнатная
        </option>
        <option>
          3 комнатная
        </option>
        <option>
          4 комнатная
        </option>
        <option>
          5 комнатная
        </option>
        <option>
          Студия
        </option>
        <option>
          Свободная планировка
        </option>
      
    </select>
                </Col >
            </Row>
            <Row className='d-flex justify-content-start align-items-end'>
                <Col  className='mt-4' xs lg="6">
                 <h4>Площадь:</h4>
                </Col>
                <Col xs lg="2">
                <Input
                className='form-control'
                {...register('square')}
                
                id="square"
                type="number"
                label="м2"
                name="square"
                required
                error={!!errors.square}
                helperText={errors?.square?.message}
                />
                </Col >
            </Row>
            <Row className='mt-4 d-flex justify-content-start align-items-end'>
                <Col xs lg="6">
                 <h4>Ремонт:</h4>
                </Col>
                <Col >
                <select className='form-select' {...register('remont')} >
      
                    <option>
                      -
                    </option>
                    <option>
                      Косметический
                    </option>
                    <option>
                      Без ремонта
                    </option>
                    <option>
                      Евроремонт
                    </option>
                    <option>
                      Дизайнерский
                    </option>
                    <option>
                      Неважно
                    </option>
                  
                </select>
                </Col >
            </Row>
            <Row className='mt-4 d-flex justify-content-start align-items-end'>
                <Col xs lg="6">
                 <h4>Тип дома:</h4>
                </Col>
                <Col >
                <select className='form-select' {...register('typeHome')} >
      
                    <option>
                      -
                    </option>
                    <option>
                      Кирпичный
                    </option>
                    <option>
                      Деревянный
                    </option>
                    <option>
                      Панельный
                    </option>
                    <option>
                      Монолитный
                    </option>
                    <option>
                      Неважно
                    </option>
                  
                </select>
                </Col >
            </Row>
            <Row className= ' mt-3 d-flex align-items-center'>
                <Col className='pt-4' xs lg="6">
                 <h4>Цена:</h4>
                </Col>
                <Col className=''>
                <Input
                
                className='form-control'
                {...register('price')}
                id="price"
                type="number"
                label="Цена в руб."
                name="price"
                required
                error={!!errors.price}
                helperText={errors?.price?.message}
                />
                </Col >
            </Row>
          
            <Button className='w-100 mt-4' variant='success' type= 'submit'  >Далее</Button>
            </Form>  
          
        </MainContainer>
    )
}

export default Sale2