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
import {  FormControl, FormControlLabel, FormLabel, RadioGroup, Typography } from '@material-ui/core'
import { createQuiz } from '../http/QuizAPI'
import { Button } from 'react-bootstrap';


const Step7 = () => {
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
      navigate(RESULT)
      
      
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
             
                <RadioGroup aria-label="typeBuy" name="typeBuy" defaultValue="asd"  value={value} onChange={handleChange}>
                    <FormControlLabel value="Ипотека" control={<Radio color="primary" />} label="Ипотека" {...register('typeBuy')}/>
                    <FormControlLabel value="Рассрочка" control={<Radio color="primary"/>} label="Рассрочка" {...register('typeBuy')}/>
                    <FormControlLabel value="100% Оплата" control={<Radio color="primary"/>} label="100% Оплата" {...register('typeBuy')}/>
                    <FormControlLabel value="Материнский капитал" control={<Radio color="primary"/>} label="Материнский капитал" {...register('typeBuy')}/>
                    <FormControlLabel value="Военная ипотека" control={<Radio color="primary"/>} label="Военная ипотека" {...register('typeBuy')}/>
                   
                </RadioGroup>
                
</FormControl>
<Button className='w-100 mt-2' variant='success' type= 'submit' disabled = {Empty}>Далее</Button>
         
        
        </Form>
    </MainContainer>
    )
}

export default Step7