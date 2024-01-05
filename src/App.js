import React from 'react'
import AppLayout from './components/AppLayout'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Products from './components/Products'
import Footer from './components/Fragments/Footer'
import SubHeader from './components/Fragments/SubHeader'
import Header from './components/Fragments/Header'




const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "products",
          element: <Products />,
        },

      ]



    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}>
        <SubHeader />
        <Header />
        <Outlet />
      </RouterProvider>
      <Footer />

    </div>
  )
}

export default App