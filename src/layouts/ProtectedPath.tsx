import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'


//TODO: Agregar el useAuth
export const ProtectedPath = () => {
  const { auth } = useAuthContext();
  return (
    <>
      {
        auth.id ? (
          <div>
            <div>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
        ) : <Navigate to='/'/>
      }
    </>
  )
}
