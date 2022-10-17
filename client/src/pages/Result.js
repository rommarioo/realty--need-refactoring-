import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";

import  {useData}  from "../DataContext";
import MainContainer from '../components/MainContainer'

import Typography from "@material-ui/core/Typography";
import {  Button } from 'react-bootstrap'
import { createQuiz } from '../http/QuizAPI'

import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/consts";

const useStyles = makeStyles({
    root: {
      marginBottom: "30px",
    },
    table: {
      marginBottom: "30px",
    },
  });


const Result = () => {
    const styles = useStyles();
     const { data } = useData();
      console.log(data)
     const navigate = useNavigate();
    const entries = Object.entries(data)

    const Swal = require('sweetalert2')
    const onSubmit =  () => {
        const formdata = new FormData();
        
        entries.forEach(entry => {
            formdata.append(entry[0],entry[1])
        })
        
        createQuiz(formdata)
         navigate(MAIN_ROUTE)
      }
    return (
      <MainContainer >
        
      <Typography component="h2" variant="h4">Заявка отправлена</Typography>

      <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
</svg>
</div>
      <Typography component="h2" variant="h6">В ближайшее время мы свяжемся с вами!</Typography>
      <Typography component="h2" variant="h4"></Typography>
      <Button className="w-100 mt-2" variant='success' onClick = {onSubmit}>Вернуться на главную страницу</Button>
  </MainContainer>
    )
}

export default Result