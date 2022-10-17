import { yupResolver } from '@hookform/resolvers/yup'
import {  FormControl, FormControlLabel, FormLabel, RadioGroup, Typography } from '@material-ui/core'
import { ClientSideRowModelSteps } from 'ag-grid-community'
import React, { useState , useEffect} from 'react'
import {  Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import Input from '../components/Input'
import MainContainer from '../components/MainContainer'
import Radio from '@material-ui/core/Radio';
import PrimaryButton from '../components/PrimaryButton'
import { useData } from '../DataContext'
import { STEP3 } from '../utils/consts'



const Step2 = () => {
    const navigate = useNavigate();
    const {setValues, data} = useData()
    const [Empty, setEmpty] = useState(true)
    const {register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            roomName: data.roomName,
            
          },
        mode: "onChange",
    })

    const onSubmit = (data) => {
      
      setValues(data)
      navigate(STEP3)
      
    }
    console.log(data)
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
        <Typography component="h2" variant="h4">Сколько комнат вам требуется?</Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth  component="fieldset">
             
                <RadioGroup aria-label="roomName" name="roomName"   value={value} onChange={handleChange}>
                    <FormControlLabel value="1 комнатная" control={<Radio color="primary" />} label="1 комнатная" {...register('roomName')}/>
                    <FormControlLabel value="2 комнатная" control={<Radio color="primary"/>} label="2 комнатная" {...register('roomName')}/>
                    <FormControlLabel value="3 комнатная" control={<Radio color="primary"/>} label="3 комнатная" {...register('roomName')}/>
                    <FormControlLabel value="4 комнатная" control={<Radio color="primary"/>} label="4 комнатная" {...register('roomName')}/>
                    <FormControlLabel value="5 и более комнат" control={<Radio color="primary"/>} label="5 и более комнат" {...register('roomName')}/>
                    <FormControlLabel value="Студия" control={<Radio color="primary"/>} label="Студия" {...register('roomName')}/>
                    <FormControlLabel value="Свободная планировка" control={<Radio color="primary"/>} label="Свободная планировка" {...register('roomName')}/>
                </RadioGroup>
                <Button className='mt-2' variant='success' type= 'submit' disabled = {Empty}>Далее</Button>
</FormControl>
         
         
        
        </Form>
    </MainContainer>
    )
}

export default Step2