import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import Catalog from './components/pages/Catalog'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='/:category/search/:keyword' element={<Catalog />} />
        <Route path='/:category/:id' element={<Detail />} />
        <Route path='/:category' element={<Catalog />} />
      </Route>
    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
