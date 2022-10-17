import React, { useContext, useEffect } from 'react'

import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Form from '../components/Form'
import Input from '../components/Input'
import MainContainer from '../components/MainContainer'
import { useForm } from "react-hook-form";
import { Typography } from '@material-ui/core'
import PrimaryButton from '../components/PrimaryButton'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { STEP2 } from '../utils/consts'
import  {useData}  from "../DataContext";
import "yup-phone";
import { Context } from 'ag-grid-community'
import { Button } from 'react-bootstrap'






   
  const schema = yup.object().shape({
    first_name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я' ]+[a-zA-Zа-яА-Я']?$/u, "Имя не может состоять из цифр и знаков")
      .required("Поле не может быть пустым"),
      last_name: yup
      .string()
      .matches(/^([^0-9]*)$/, "Фамилия не может состоять из цифр и знаков")
      .required("Поле не может быть пустым"),
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
    


  




  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if(!phoneNumber){
      return value
    }
  
    return (
      phoneNumber.formatInternational() 
    );
  };

const Step1 = () => {
  const navigate = useNavigate();
  const {setValues, data} = useData()
    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
      },
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
      setValues(data)
      navigate(STEP2)
      
    }
    console.error(data)
    return (

        <MainContainer>
            <Typography component="h2" variant="h4">Укажите ваши контакные данные</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Input
                {...register('first_name')}
                id="first_name"
                type="text"
                label="Имя"
                name="first_name"
                required
                error={!!errors.first_name}
                helperText={errors?.first_name?.message}
                />
                <Input
                {...register('last_name')}
                id="last_name"
                type="text"
                label="Фамилия"
                name="last_name"
                required
                error={!!errors.last_name}
                helperText={errors?.last_name?.message}
                />
                <Input
                {...register('email')}
                id="email"
                type="email"
                label="Email"
                name="email"
                required
                error={!!errors.email}
                helperText={errors?.email?.message}
                />
                <Input
                {...register('phone')}
                
                id="phone"
                type="phone"
                label="Телефон"
                name="phone"
               
                error={!!errors.phone}
                helperText={errors?.phone?.message}
                required
                />

<Button className='mt-2 w-100' variant='success' type= 'submit' >Далее</Button>
            </Form>
        </MainContainer>

    )
}

export default Step1