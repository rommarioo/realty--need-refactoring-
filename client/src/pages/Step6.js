import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext'
import {  QUIZ, RESULT, STEP7 } from '../utils/consts';
import Form from '../components/Form'
import Input from '../components/Input'
import MainContainer from '../components/MainContainer'
import Radio from '@material-ui/core/Radio';
import PrimaryButton from '../components/PrimaryButton'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Typography } from '@material-ui/core'
import { createQuiz } from '../http/QuizAPI'
import { Button } from 'react-bootstrap';


const Step6 = () => {
    const navigate = useNavigate();
    const {setValues, data} = useData()
    const [Empty, setEmpty] = useState(true)
    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            decorationName: data.decorationName,
            },
        mode: "onChange",
    })
    useEffect(() => {
        if (!value) {
          setEmpty(true)
        } else {
          setEmpty(false)
        }
       
      })
    const onSubmit = async (data) => {
      setValues(data)
      navigate(STEP7)
      
      
    }
    
    
    
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
      };
      
      
      
      
    return (
        <MainContainer>
        <Typography component="h2" variant="h4">Укажите тип дома</Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth  component="fieldset">
             
                <RadioGroup aria-label="typeHome" name="typeHome" defaultValue="asd"  value={value} onChange={handleChange}>
                    <FormControlLabel value="Кирпичный" control={<Radio color="primary" />} label="Кирпичный" {...register('typeHome')}/>
                    <FormControlLabel value="Деревянный" control={<Radio color="primary"/>} label="Деревянный" {...register('typeHome')}/>
                    <FormControlLabel value="Панельный" control={<Radio color="primary"/>} label="Панельный" {...register('typeHome')}/>
                    <FormControlLabel value="Монолитный" control={<Radio color="primary"/>} label="Монолитный" {...register('typeHome')}/>
                    <FormControlLabel value="Неважно" control={<Radio color="primary"/>} label="Неважно" {...register('typeHome')}/>
                   
                </RadioGroup>
                
</FormControl>
<Button className='w-100 mt-2' variant='success' type= 'submit' disabled = {Empty} >Далее</Button>
         
        
        </Form>
    </MainContainer>
    )
}

export default Step6