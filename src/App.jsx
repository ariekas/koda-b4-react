import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthLayout } from "./components/layout/AuthLayout"
import { LoginPage } from "./page/LoginPage"
import { NotFoud } from "./page/NotFound"
import { RegisterPage } from "./page/RegisterPage"
import { ForgetPassword } from "./page/ForgetPassword"


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    children: [
      {
        path: "/login",
        element: <LoginPage/>,
        handle: { title: "Login", desc: "Fill out the form correctly" }
      },
      {
        path: "/register",
        element: <RegisterPage/>,
        handle: { title: "Register", desc: "Fill out the form correctly" }
      },
      {
        path: "/forget-password",
        element: <ForgetPassword/>,
        handle: { title: "Fill Out The Form Correctly", desc: "We will send new password to your email" }
      }
    ]
  },
  {
    path: "*",
    element : <NotFoud/>
  }
])
function App() {

  return (
  <RouterProvider router={router}/>
  )
}

export default App
