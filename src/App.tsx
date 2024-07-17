import Nomina from './pages/Nomina'
import './App.css'
import Vencimientos from './pages/Vencimientos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorContextProvider from './context/errorContext'
import { AuthLayout } from './layouts/AuthLayout'
import { Login } from './pages/Login'
import { ProtectedPath } from './layouts/ProtectedPath'
import { Comunicados } from './pages/Comunicados'
import AuthContextProvider from './context/authContext'
import { Diesel } from './pages/Diesel'
import { Inicio } from './pages/Inicio'


function App() {
    
  
  return (
   
      <BrowserRouter>
        <AuthContextProvider>
          <ErrorContextProvider>
            <Routes>
              <Route path='/' element={<AuthLayout/>}>
                <Route index element={<Login/>}/>
              </Route>
              <Route path='/' element={<ProtectedPath/>}>
                <Route path='inicio' element={<Inicio/>}/>
                <Route path='vencimientos' element={<Vencimientos/>}/>
                <Route path='comunicados' element={<Comunicados/>}/>
                <Route path='nomina' element={<Nomina/>}/>
                <Route path='diesel' element={<Diesel/>}/>

              </Route>
            </Routes>
          </ErrorContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
  )
}

export default App
