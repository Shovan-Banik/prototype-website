import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Step1Form from './pages/Step1Form/Step1Form.jsx';
import Step2Form from './pages/Step2Form/Step2Form.jsx';
import DataProvider from './DataProvider/DataProvider.jsx';
import Result from './pages/Result/Result.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Step1Form></Step1Form>
      },
      {
        path: '/step2Form',
        element: <Step2Form></Step2Form>
      },
      {
        path: '/result',
        element: <Result></Result>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-slate-900 text-red-500'>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </div>
  </React.StrictMode>,
)
