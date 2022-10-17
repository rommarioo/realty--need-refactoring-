import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext'
import { STEP4 } from '../utils/consts';
import Form from '../components/Form'
import Input from '../components/Input'
import MainContainer from '../components/MainContainer'
import Radio from '@material-ui/core/Radio';
import PrimaryButton from '../components/PrimaryButton'
import {  FormControl, FormControlLabel, FormLabel, RadioGroup, Typography } from '@material-ui/core'
import { Button } from 'react-bootstrap';

const Step3 = () => {
    const navigate = useNavigate();
    const {setValues, data} = useData()
    const [Empty, setEmpty] = useState(true)
    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            areaName: data.areaName,
            
          },
        mode: "onChange",
    })

    const onSubmit = (data) => {
      
      setValues(data)
      console.log(data)
      navigate(STEP4)
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
        <Typography component="h2" variant="h4">Какой район вас интересует?</Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth  component="fieldset">
             
                <RadioGroup aria-label="areaName" name="areaName" defaultValue="asd"  value={value} onChange={handleChange}>
                    <FormControlLabel value="Кировский" control={<Radio color="primary" />} label="Кировский" {...register('areaName')}/>
                    <FormControlLabel value="Куйбышевский" control={<Radio color="primary"/>} label="Куйбышевский" {...register('areaName')}/>
                    <FormControlLabel value="Ленинский" control={<Radio color="primary"/>} label="Ленинский" {...register('areaName')}/>
                    <FormControlLabel value="Октябрьский" control={<Radio color="primary"/>} label="Октябрьский" {...register('areaName')}/>
                    <FormControlLabel value="Свердловский" control={<Radio color="primary"/>} label="Свердловский" {...register('areaName')}/>
                    <FormControlLabel value="Неважно" control={<Radio color="primary"/>} label="Неважно" {...register('areaName')}/>
                </RadioGroup>
                <Button className='mt-2 w-100' variant='success' type= 'submit' disabled = {Empty} >Далее</Button>
</FormControl>
         
         
        
        </Form>
    </MainContainer>
    )
}

export default Step3