import Navbar from './components/Navbar'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/Login",
      element:<Login />
    },
    {
      path:"/SignUp",
      element:<SignUp />
    },
  ])
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}