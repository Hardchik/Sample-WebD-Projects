import * as React from 'react'
import './App.css'
import {
  Routes,
  Route,
  BrowserRouter,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Header from './components/Header'

export default function App() {
  return (
    <ChakraProvider>
      <div className='body'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navigation />
        <Login /></>}></Route>
        <Route path='/register' element={<><Navigation />
                          <Register /></>}></Route>
        <Route path='/dashboard' element={<><Header /><Dashboard/></>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  )
}