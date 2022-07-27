import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Page/Home';
import Contact from '../Page/Contact';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/contato' element={ <Contact />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;