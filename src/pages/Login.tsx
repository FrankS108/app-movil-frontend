import { useState } from 'react'
import { Auth, LoginData } from '../interfaces/interfaces'
import styles from '../styles/Login.module.css'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

export const Login = () => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { setAuth } = useAuthContext();
  const navigate = useNavigate();

  //SOLO PARA PRUEBAS
  const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsIm5pdmVsIjoxLCJOb21icmUiOiJEYXJpbyBBc3RvcmdhIE9saXZlcm9zIn0.Aile8Flxh_9N97qHZ5FlNx88xAjvimANEkSh37ln6ro";
  const userTest: Auth = {
    id: 78, 
    name: 'Dario Astorga Oliveros',
    token: token
  };

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUser(event.target.value);
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const login: LoginData = {
      user: user,
      password: password
    }

    //TODO: PONER API
    console.log(login);
    sessionStorage.setItem('token', userTest.token);
    setAuth(userTest);
    navigate('/diesel');
  }

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <p className={styles.titleLogin}>Iniciar Sesión</p>
        <p className={styles.subTitle}>Integranet - Aplicación Choferes</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.input} value={user} onChange={handleUser} type='text' name='user' placeholder='Usuario'/>
          <input className={styles.input} value={password} onChange={handlePassword} type='password' name='password' placeholder='Contraseña'/>
          <input className={styles.button} type='submit' value="Iniciar Sesión"/>
        </form>
        </div>
    </div>
  )
}
