import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthLayout } from "./components/layout/AuthLayout"
import { LoginPage } from "./page/LoginPage"
import { NotFoud } from "./page/NotFound"


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    children: [
      {
        path: "/login",
        element: <LoginPage/>
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
