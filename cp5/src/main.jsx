import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//BLOCO DE ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.jsx';
import Error from './routes/Error/index.jsx';
import Produtos from './routes/Produtos/index.jsx'
import EditarProdutos from './routes/EditarProdutos/index.jsx';

//Criando o objeto de rotas
const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/editar/produtos/:id', element: <EditarProdutos /> },
    ]
  },
])

//BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
