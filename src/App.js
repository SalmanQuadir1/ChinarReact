import React from 'react'
import AppLayout from './components/AppLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Products from './components/Products'





const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/products",
          element: <Products />,
        },

      ]



    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}>
        <AppLayout />
      </RouterProvider>


    </div>
  )
}

export default App