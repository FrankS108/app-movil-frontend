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


function App() {
    
  
  return (
   <AuthContextProvider>
    <ErrorContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
          </Route>
          <Route path='/diesel' element={<ProtectedPath/>}>
            <Route index element={<Diesel/>}/>
            <Route path='comunicados' element={<Comunicados/>}/>
            <Route path='vencimientos' element={<Vencimientos/>}/>
            <Route path='nomina' element={<Nomina/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorContextProvider>
   </AuthContextProvider>
  )
}

export default App
