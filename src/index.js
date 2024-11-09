import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantCard from './components/RestaurantCard';
import { CuisinePage } from './components/CuisinePage';
import { CuisineProvider } from './Context/CuisineContext';
import { RestaurantMenu } from './components/RestaurantMenu';

const appRouter = createBrowserRouter([
  { path: "/",
    element: <App />,
    children: [
  { path: "/", element: <RestaurantCard /> },
  { path: "/cuisine/:cuisineLink", element: <CuisinePage /> },
  { path: "/restaurant/:restroId", element: <RestaurantMenu/> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CuisineProvider>
     <RouterProvider router={appRouter} />
    </CuisineProvider>
  </React.StrictMode>
);
