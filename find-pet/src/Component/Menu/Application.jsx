import React from 'react'
import { Routes, Route} from "react-router-dom";
import "./Application.css"
import Menu from './Menu/Menu';
import CatPage from './Pages/Pages/CatPage';
import DogPage from './Pages/Pages/DogPage';
import FormPage from './Pages/FormPage/FormPage';
import NotFound from './Pages/ErrorPage/NotFound'

export default function Application() {

    return (
        <>
           <Menu/>
            <div className='layout'>
                <Routes>
                    <Route path="/" element={<CatPage/>} />
                    <Route path="/Dog" element={<DogPage/>} />
                    <Route path='/form' element={<FormPage />}/>
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </div>
        </>
    )
}