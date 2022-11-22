import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from '../pages/Login'
import Home from '../pages/Home'
import NewsDetail from '../pages/NewsDetail'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'
import SignUp from '../pages/Register'

function AppRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/login' element={<SignIn/>}/>
               <Route path='/register' element={<SignUp/>}/>
               <Route path='/newsdetail' element={<PrivateRouter/>}>
                <Route path="" element={<NewsDetail/>}/>
                </Route>

            </Routes>


        </BrowserRouter>
    )
}

export default AppRouter