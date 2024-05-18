import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from './errorPage.jsx';
import Loginscreen from './Loginscreen.jsx';
import Login from './login.jsx';
import Signin from './signin.jsx';
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
      },
    ]
    },
    {
      path: "/login",
      element: <Loginscreen />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <Login />,
          index: true
        },
        {
          path: "signin",
          element: <Signin />,
        },
      ]
    }
], {
  basename: "/DadjokesApp"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
