import { set } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState }  from 'react'
import { Container, Card, Form, Button, Dropdown } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { createQuiz } from '../http/QuizAPI'
import { Context } from '../index'
import { MAIN_ROUTE } from '../utils/consts'
import { fetchRooms, fetchAreas, fetchDecorations, fetchDeadlines, fetchBudget, } from '../http/QuizAPI'
//Кастомный хук для валидации
const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [inputValid, setInputvalid] = useState(false)

    useEffect(() => {
      for (const validation in validations) {
            switch (validation) {
                
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                        break;
                case 'maxLength':
                    value.length < validations[validation] ? setMaxLengthError(false) : setMaxLengthError(true)
                    
                        break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                     re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                         break
                case 'isPhone':
                    const tel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/
                     tel.test(String(value).toLowerCase()) ? setPhoneError(false) : setPhoneError(true)
                         break
                case 'isName':
                    const nam = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
                     nam.test(String(value).toLowerCase()) ? setNameError(false) : setNameError(true)
                         break         
                default:
                    break;
            }
      }
    
      
    }, [value])

    useEffect(() => {
      if (isEmpty || emailError || maxLengthError || phoneError || nameError) {
          setInputvalid(false)
      }else {
        setInputvalid(true)
      }
    
      
    }, [isEmpty, emailError, maxLengthError, phoneError, nameError])
    

    return {isEmpty, emailError, maxLengthError, phoneError, nameError, inputValid}
    
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }
    return {value,
            onChange,
            onBlur,
            isDirty,
            ...valid,
        }
}


const Quiz =  observer(() => {
    const {quiz} = useContext(Context);
    
    const {areastore} = useContext(Context);
    const {roomstore} = useContext(Context);
   
    const last_name = useInput('', {isEmpty: true ,maxLength: 20, isName: true})
    const first_name = useInput('', {isEmpty: true,maxLength: 20, isName: true})
    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const phone = useInput('', {isEmpty: true, minLength: 3,maxLength: 20, isPhone: true})

    useEffect(()=> {
        fetchRooms().then(data => roomstore.setRooms(data));
        fetchAreas().then(data => areastore.setAreas(data));
        fetchDecorations().then(data => quiz.setDecorations(data));
        fetchDeadlines().then(data => quiz.setDeadlines(data));
        fetchBudget().then(data => quiz.setBudgets(data));

    }, [quiz])

    const navigate = useNavigate();
   
    const Swal = require('sweetalert2')
    
    const fetchRequest = async () => {
        const formData = new FormData()
        formData.append('last_name', last_name.value)
        formData.append('first_name', first_name.value)
        formData.append('email', email.value)
        formData.append('phone', phone.value)
        formData.append('roomName', roomstore.selectedRoom.room)
        formData.append('areaName', areastore.selectedArea.area)
        formData.append('budgetName', quiz.selectedBudgets.budget)
        formData.append('decorationName', quiz.selectedDecorations.decoration)
        createQuiz(formData)
        
        Swal.fire(
            'Заявка оправлена',
            'В ближайшее время мы свяжемся с вами!',
            'success'
          ).then(() => navigate(MAIN_ROUTE))
        
    }
    return (
        <Container className='d-flex justify-content-center'>
            <Card style={{width: 800}} className="p-5 mt-5 d-flex " >
                <h2 className='m-auto'>Введите ваши контактные данные</h2>
                <Form className='d-flex flex-column mt-3'>
                <Form.Label>Имя*</Form.Label>
                    <Form.Control
                        value = {first_name.value}
                        onChange={e => first_name.onChange(e)}
                        onBlur={e => first_name.onBlur(e)}
                        className='mb-2'
                        placeholder='Введите Имя'
                        type='text'
                    />{(first_name.isDirty && first_name.isEmpty) && <Form.Text className='mb-2' style={{color: 'red'}}>Поле имя не может быть пустым</Form.Text> }
                    {(first_name.isDirty && first_name.maxLengthError) && <Form.Text className='mb-2'style={{color: 'red'}}>Слишком длинное имя</Form.Text> }
                    {(first_name.isDirty && first_name.nameError) && <Form.Text className='mb-2' style={{color: 'red'}}>Некорректное имя(Имя не может состоять из цифр и знаков)</Form.Text> }
                    <Form.Label className=' '>Фамилия*</Form.Label>
                     <Form.Control
                        value = {last_name.value}
                        onChange={e => last_name.onChange(e)}
                        onBlur={e => last_name.onBlur(e)}
                        className='mb-2'
                        placeholder=' Введите Фамилию'
                    />{(last_name.isDirty && last_name.isEmpty) && <Form.Text className='mb-2' style={{color: 'red'}}>Поле не может быть пустым</Form.Text> }
                    {(last_name.isDirty && last_name.maxLengthError) && <Form.Text className='mb-2' style={{color: 'red'}}>Слишком длинная фамилия</Form.Text> }
                    {(last_name.isDirty && last_name.nameError) && <Form.Text className='mb-2' style={{color: 'red'}}>Некорректная Фамилия(Фамилия не может состоять из цифр и знаков)</Form.Text> }
                    <Form.Label className=' '>Номер телефона*</Form.Label>
                     <Form.Control
                         value = {phone.value}
                         onChange={e => phone.onChange(e)}
                         onBlur={e => phone.onBlur(e)}
                        type='tel'
                        className='mb-2'
                        placeholder='Введите номер телефона'
                    />{(phone.isDirty && phone.phoneError) && <Form.Text className='mb-2' style={{color: 'red'}}>Некорректный номер телефона</Form.Text> }
                    {(phone.isDirty && phone.isEmpty) && <Form.Text  className='mb-2' style={{color: 'red'}}>Поле не может быть пустым</Form.Text> }
                    <Form.Label className=' '>Почта*</Form.Label>
                    <Form.Control
                       value = {email.value}
                       onChange={e => email.onChange(e)}
                       onBlur={e => email.onBlur(e)}
                        
                        className=' mb-2'
                        placeholder='Введите Email'
                    />{(email.isDirty && email.emailError) && <Form.Text className='mb-2' style={{color: 'red'}}>Некорректный email</Form.Text> }
                    {(email.isDirty && email.isEmpty) && <Form.Text className='mb-2' style={{color: 'red'}}>Поле не может быть пустым</Form.Text> }


                    <h3 className='m-auto'>Выберите желаемые характеристики недвижимости</h3>
                    <Dropdown className='mt-4 '  >
                        <Dropdown.Toggle className='w-100' variant="success" >{roomstore.selectedRoom.room || "Сколько комнат вам требуется?*"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {roomstore.rooms.map(rooms => 
                                <Dropdown.Item  onClick={() => roomstore.setSelectedRoom(rooms)} key={rooms.id}>{rooms.room}</Dropdown.Item>
                                )}
                                
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-4' >
                        <Dropdown.Toggle className='w-100' variant="success" >{areastore.selectedArea.area || "В каком районе вам требуется квартира?*"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {areastore.areas.map(areas => 
                                <Dropdown.Item  onClick={() => areastore.setSelectedArea(areas)} key={areas.id}>{areas.area}</Dropdown.Item>
                                )}
                                
                                
                        </Dropdown.Menu>        
                    </Dropdown>
                    <Dropdown className='mt-4' >
                        <Dropdown.Toggle className='w-100' variant="success" >{quiz.selectedBudgets.budget || "На какой бюджет вы расчитывваете?*"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {quiz.budgets.map(b => 
                                <Dropdown.Item onClick={() => quiz.setSelectedBudgets(b)} key={b.id}>{b.budget}</Dropdown.Item>
                                )}
                                
                                
                        </Dropdown.Menu>            
                    </Dropdown>
                    <Dropdown className='mt-4'  > 
                        <Dropdown.Toggle className='w-100' variant="success" >{quiz.selectedDecorations.decoration || "Какая отделка вам нужна?*"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {quiz.decorations.map(decorations => 
                                <Dropdown.Item onClick={() => quiz.setSelectedDecorations(decorations)} key={decorations.id}>{decorations.decoration}</Dropdown.Item>
                                )}
                                
                                
                        </Dropdown.Menu>    
                    </Dropdown>
                    
                    <Button
                    disabled={!last_name.inputValid || !first_name.inputValid || !email.inputValid || !phone.inputValid || !quiz.selectedDecorations.decoration}
                    className='mt-3'
                    variant='success'
                    onClick={fetchRequest}
                    >
                        Оформить заявку
                    </Button>
                </Form>
            </Card>
        </Container>
    )
})

export default Quiz