import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home/Home';
import Landing from './pages/Landing/Landing';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
  path: "/home",
  element: <Home />
  },
  {
    path: "/",
    element: <Landing />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
