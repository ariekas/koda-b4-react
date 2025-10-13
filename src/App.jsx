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
import { CheckoutPage } from "./page/CheckoutPage"
import { HistoryPage } from "./page/HistoryPage"
import { DetailOrder } from "./page/DetailOrder"
import { Profile } from "./page/Profile"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/storage"
import { PersistGate } from "redux-persist/integration/react"
import { CheckoutProvider } from "./context/CheckoutContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
        handle: { title: "Login", desc: "Fill out the form correctly" }
      },
      {
        path: "/register",
        element: <RegisterPage />,
        handle: { title: "Register", desc: "Fill out the form correctly" }
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
        handle: { title: "Fill Out The Form Correctly", desc: "We will send new password to your email" }
      }
    ]
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/detail-product/:id",
        element: <DetailPage />,
      },
      {
        path: "/checkout",
        element: (
          <CheckoutProvider>
            <CheckoutPage />
          </CheckoutProvider>

        ),
      },
      {
        path: "/history",
        element: (
          <CheckoutProvider>
            <HistoryPage />
          </CheckoutProvider>

        ),
      },
      {
        path: "/detail-order/:id",

        element: (
          <CheckoutProvider>
            <DetailOrder />
          </CheckoutProvider>

        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFoud />
  }
])
function App() {

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>

        <RouterProvider router={router} />
      </Provider>
    </PersistGate>

  )
}

export default App
