import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext'
import { STEP5 } from '../utils/consts';
import Form from '../components/Form'
import Input from '../components/Input'
import MainContainer from '../components/MainContainer'
import Radio from '@material-ui/core/Radio';
import PrimaryButton from '../components/PrimaryButton'
import {  FormControl, FormControlLabel, FormLabel, RadioGroup, Typography } from '@material-ui/core'
import { Button } from 'react-bootstrap';

const Step4 = () => {
    const navigate = useNavigate();
    const {setValues, data} = useData()
    const [Empty, setEmpty] = useState(true)
    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
        budgetName: data.budgetName,
        },
          
        mode: "onChange",
    })

    const onSubmit = (data) => {
      
      setValues(data)
      navigate(STEP5)
    }
    useEffect(() => {
        if (!value) {
          setEmpty(true)
        } else {
          setEmpty(false)
        }
       
      })
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    return (
        <MainContainer>
        <Typography component="h2" variant="h4">Укажите примерный бюджет на покупку?</Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth  component="fieldset">
             
                <RadioGroup aria-label="budgetName" name="budgetName" defaultValue="asd"  value={value} onChange={handleChange}>
                    <FormControlLabel value="До 3 млн. руб." control={<Radio color="primary" />} label="До 3 млн. руб." {...register('budgetName')}/>
                    <FormControlLabel value="До 5 млн. руб." control={<Radio color="primary"/>} label="До 5 млн. руб." {...register('budgetName')}/>
                    <FormControlLabel value="До 7 млн. руб." control={<Radio color="primary"/>} label="До 7 млн. руб." {...register('budgetName')}/>
                    <FormControlLabel value="До 10 млн. руб." control={<Radio color="primary"/>} label="До 10 млн. руб." {...register('budgetName')}/>
                    <FormControlLabel value="До 15 млн. руб." control={<Radio color="primary"/>} label="До 15 млн. руб." {...register('budgetName')}/>
                    <FormControlLabel value="Выше 15 млн. руб." control={<Radio color="primary"/>} label="Выше 15 млн. руб." {...register('budgetName')}/>
                    <FormControlLabel value="Неважно" control={<Radio color="primary"/>} label="Неважно" {...register('budgetName')}/>
                </RadioGroup>
                <Button className='w-100 mt-2' variant='success' type= 'submit' disabled = {Empty}>Далее</Button>
</FormControl>
         
         
        
        </Form>
    </MainContainer>
    )
}

export default Step4