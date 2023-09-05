import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home/Home.jsx'
import Produtos from './routes/Produtos/Produtos.jsx'
import Error from './routes/Error/Error.jsx'
import EditarProdutos from './routes/EditarProdutos/EditarProdutos.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produtos",
        element: <Produtos />,
      },
      {
        path: "/editar/:id",
        element: <EditarProdutos />,
      }
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
