import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../index.css'
import { useNavigate } from 'react-router-dom'
import { QUIZ, QUIZSALE, STEP2 } from '../utils/consts'
import img from '../images/house22.jpg'
import { DataProvider } from '../DataContext'
import { Typography } from '@material-ui/core'


const Main = () => {
const navigate = useNavigate();
const StyleImage = {
    
    width: "100%", 
    height: 750,
    
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    
    backgroundPosition: "top center",
    backgroundImage: `url(${img})`
}
const StyleCol = {
    display: "flex",
    justifyContent: "center",
    color: "white"
}
const StyleCol1 = {
    display: "flex",
    
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    color: "white"
}
    return (
        
               <div className=" p-0  " style={StyleImage} >
            <Row>
                <Col className='mt-5' style={StyleCol1}>
                
                    <Typography className='m-3' component="h2" variant="h2">Продажа недвижимости в Иркутске</Typography>
                    <div className='m-4' style={{width: 600,}}>
                        <p style={{fontSize: '25px'}}>
                        <b>Опытные и грамотные специалисты  качественно решают поставленные задачи клиентов в сфере недвижимости. 
                        Наша работа оценивается Вашими рекомендациями. Мы помогаем людям.</b>
                        
                </p>
                    </div>
                
                    
                
                </Col>


                
            </Row>        
           <Row >
           <Col style={StyleCol}>
           <Button  onClick={() => navigate(QUIZ)} variant={"outline-light"} size="lg"><b>Купить квартиру</b></Button>
           </Col>
           <Col style={StyleCol}>
           <Button onClick={() => navigate(QUIZSALE)} variant={"outline-light"} size="lg"><b>Продать квартиру</b></Button>
           </Col>
           </Row>
            
            
            
            
            
        </div>
           
        
    )
}

export default Main