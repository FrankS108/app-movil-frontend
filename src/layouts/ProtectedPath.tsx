import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'
import { NavMobile } from '../components/NavMobile';


//TODO: Agregar el useAuth
export const ProtectedPath = () => {
  const { auth } = useAuthContext();
  return (
    <>
      {
        // auth.id ? (
        //   <div>
        //     <NavMobile/>
        //     <div>
        //         <main>
        //             <Outlet/>
        //         </main>
        //     </div>
        //   </div>
        // ) : <Navigate to='/'/>

        <div>
            <NavMobile/>
            <div>
                <main>
                    <Outlet/>
                </main>
            </div>
          </div>
      }
    </>
  )
}
