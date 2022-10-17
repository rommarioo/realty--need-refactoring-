import React, {useContext, useState} from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import {LOGIN_ROUTE, PERSONAL_ROUTE} from "../utils/consts"
import { Container, Form, Card, Button} from 'react-bootstrap'
import { registration } from '../http/managerAPI'
import { logined } from '../http/managerAPI'
import { Context } from '..'
import { observer } from 'mobx-react-lite'


const Auth = observer(() => {
    const {manager} = useContext(Context) 
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const Swal = require('sweetalert2')

    const click = async () => {
        try {
        let data;
        if (isLogin) {
            data = await logined(login, password);
            
        } else {
             data = await registration(login, password);
             
        }
        manager.setManager(manager)
        manager.setIsAuth(true)
        navigate(PERSONAL_ROUTE);
        } catch (e) {
            //alert(e.response.data.message)
            Swal.fire({
                icon: 'error',
                title: 'Ошибка...',
                text: 'Введен неправильный Логин или пароль',
                
              })
        }
        
    }

    return (
       <Container
       className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 200}}
       >
            <Card style={{width: 600}} className="p-5">
                <h2 className='m-auto'>Авторизация</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-4'
                        placeholder='Введите ваш логин...'
                        value={login}
                        onChange={e => setLogin(e.target.value)}

                    />
                     <Form.Control
                        className='mt-4'
                        placeholder='Введите ваш пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />

                    <Button
                    className='mt-3'
                    variant='outline-success'
                    onClick={click}
                    >
                        Войти
                    </Button>
                </Form>
            </Card>
       </Container>
    )
});

export default Auth