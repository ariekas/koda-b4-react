import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthLayout } from "./components/layout/AuthLayout"
import { LoginPage } from "./page/LoginPage"
import { NotFoud } from "./page/NotFound"
import { RegisterPage } from "./page/RegisterPage"
import { ForgetPassword } from "./page/ForgetPassword"
import { MainLayout } from "./components/layout/MainLayout"
import { HomePage } from "./page/HomePage"
import { ProductPage } from "./page/ProductPage"
import { DetailPage } from "./page/DetailPage"
import { CheckoutPage } from "./page/CheckouPage"
import { HistoryPage } from "./page/HistoryPage"
import { DetailOrder } from "./page/DetailOrder"
import { Profile } from "./page/Profile"

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
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/home",
        element: <HomePage/>,
      },
      {
        path: "/product",
        element: <ProductPage/>,
      },
      {
        path: "/detail-product",
        element: <DetailPage/>,
      },
      {
        path: "/checkout",
        element: <CheckoutPage/>,
      },
      {
        path: "/history",
        element: <HistoryPage/>,
      },
      {
        path: "/detail-order",
        element: <DetailOrder/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
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
