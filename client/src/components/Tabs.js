import React from 'react'
import { Button, ButtonGroup, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {All_REQUEST, All_REQUEST_SALE,All_PROVIDER} from '../utils/consts'
const Tabs = () => {
    const navigate = useNavigate();
    return (
        <ButtonGroup className="mb-2">
        <Button onClick={() => navigate(All_REQUEST)} variant="success">Отчет по заявкам на покупку</Button>
        <Button  onClick={() => navigate(All_REQUEST_SALE)} variant="success">Отчет по заявкам на продажу</Button>
        <Button  onClick={() => navigate(All_PROVIDER)} variant="success">Отчет по застройщикам</Button>
        
      </ButtonGroup>
    )
}

export default Tabs