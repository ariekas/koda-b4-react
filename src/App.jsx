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
import { DashboardAdminPage } from "./page/admin/DashboardAdminPage"
import { AdminLayout } from "./components/layout/AdminLayout"
import ProductAdminPage from "./page/admin/ProductAdminPage"
import OrderAdminPage from "./page/admin/OrderAdminPage"
import { AccountAdminPage } from "./page/admin/AccoutAdminPage"

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
        handle: { title: "Login", desc: "Fill out the form correctly" },
      },
      {
        path: "/register",
        element: <RegisterPage />,
        handle: { title: "Register", desc: "Fill out the form correctly" },
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
        handle: {
          title: "Fill Out The Form Correctly",
          desc: "We will send new password to your email",
        },
      },
    ],
  },

  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        handle: { title: "Home" },
      },
      {
        path: "/product",
        element: <ProductPage />,
        handle: { title: "Products" },
      },
      {
        path: "/detail-product/:id",
        element: <DetailPage />,
        handle: { title: "Product Detail" },
      },
      {
        path: "/checkout",
        element: (
          <CheckoutProvider>
            <CheckoutPage />
          </CheckoutProvider>
        ),
        handle: { title: "Checkout" },
      },
      {
        path: "/history",
        element: (
          <CheckoutProvider>
            <HistoryPage />
          </CheckoutProvider>
        ),
        handle: { title: "History" },
      },
      {
        path: "/detail-order/:id",
        element: (
          <CheckoutProvider>
            <DetailOrder />
          </CheckoutProvider>
        ),
        handle: { title: "Order Detail" },
      },
      {
        path: "/profile",
        element: <Profile />,
        handle: { title: "Profile" },
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardAdminPage />,
      },
      {
        path: "product",
        element: <ProductAdminPage />,
      },
      {
        path: "order",
        element: <OrderAdminPage />,
      },
      {
        path: "accout",
        element: <AccountAdminPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoud />,
    handle: { title: "Not Found" },
  },
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
