import React, { useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import './index.css'
import { Context } from "./index";
import { check } from "./http/managerAPI";
import { Spinner } from "react-bootstrap";

const App = observer (() => {
  const {manager} = useContext(Context)
  const [loading, setLoading] = useState(true)

useEffect(() => {
  
    check().then(data =>{
      manager.setManager(data)
      manager.setIsAuth(true)
    }).finally(() => setLoading(false))
},[])

if (loading) {
  return <Spinner animation={"grow"}/>
}

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
