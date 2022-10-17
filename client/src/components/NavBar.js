import React, {useContext} from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom'
import { ABOUT_US, CONTACT, MAIN_ROUTE, PERSONAL_ROUTE, All_REQUEST, LOGIN_ROUTE, BUYREQUEST, PROVIDERS } from '../utils/consts'
import { Context } from "../index";
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const {manager} = useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
        manager.setManager({})
        manager.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(MAIN_ROUTE)
    }
    return (
        <Navbar bg="dark" variant='dark'>
    <Container>
    <Navbar.Brand href="/" className='align-items-center'><img src={logo} alt='logo'
        width="50"
        height="40" />{' '} 
    </Navbar.Brand>
    {manager.isAuth  ?
    <Nav className="ml-auto" style={{color: 'white'}}>
        <Button variant={"outline-light"} className="m-2" onClick={() => navigate(PERSONAL_ROUTE)}>Заявки на покупку</Button> 
        <Button variant={"outline-light"} className="m-2" onClick={() => navigate(BUYREQUEST)}>Заявки на продажу</Button>   
        <Button variant={"outline-light"} className="m-2" onClick={() => navigate(All_REQUEST)}>Отчеты</Button>
        <Button variant={"outline-light"} className="m-2" onClick={() => navigate(PROVIDERS)}>Застройщики</Button>
        <Button variant={"outline-light"} className="m-2" onClick={() => logOut()}>Выйти</Button>
    </Nav>
    :
    <Nav className="ml-auto" style={{color: 'white'}}>
        <Button variant={"outline-light"} className="m-2" onClick={() => navigate(MAIN_ROUTE)}>На главную</Button>
        <Button variant={"outline-light"} className="m-2" onClick={() => navigate(ABOUT_US)}>О компании</Button>
        
    </Nav>
    }
    </Container>
    </Navbar>
    )
});

export default NavBar