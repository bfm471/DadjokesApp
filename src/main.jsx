import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
// import Root from './routes/root.jsx';
import ErrorPage from './errorPage.jsx';
import Login from './login.jsx';
import RandomJoke from './routes/randomJoke.jsx';
import MyJokes from './routes/myJokes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RandomJoke />,
        index: true
      },
      {
        path: "myjokes",
        element: <MyJokes />
      }
    ]
    },
    

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
