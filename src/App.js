import React from 'react'
import AppLayout from './components/AppLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Products from './components/Products'
import Login from './components/Login'
import Contact from './components/Contact'
import About from './components/About'
import AdminLayout from './components/Admin/AdminLayout'
import Dashboard from './components/Admin/Dashboard'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import ProductList from './components/Admin/AdminComponents/ProductList'
import { ProtectedRoute } from './utils/protectedRoute'
import AddProducts from './components/Admin/AdminComponents/AddProducts'






const App = () => {



  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Body />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "logout",
          element: <Body />,
        },

      ]



    },
    {
      path: '/admin',
      element: <ProtectedRoute path="/admin" element={<AdminLayout />} />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "addproduct",
          element: <AddProducts />,
        },
        {
          path: "addproduct",
          element: <AddProducts />,
        },
        {
          path: "categories",
          element: <ProductList />,
        },


      ]



    }

  ])

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}> </RouterProvider>
      </Provider>


    </div>
  )
}

export default App