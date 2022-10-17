import React, { useContext } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import { Context } from '..';
import { authRoutes, publicRoutes} from '../routes';



const AppRouter = () => {
    
    const {manager} = useContext(Context)
    
    return (
        <Routes>
            
            {manager.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path = {path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
            <Route key={path} path = {path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Navigate to ="/main" />}/>
        </Routes>
            
        
    )
}

export default AppRouter